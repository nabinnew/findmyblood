<?php

namespace App\Http\Controllers\admin;

 use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\DonorModel;
use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Log;
  
class DonarsController extends Controller
{
    // Display all donors
    public function index()
    {
        $donors = DonorModel::latest()->paginate(10);
        return view('admin.donors.index', compact('donors'));
    }

     public function create()
    {
        return view('admin.donors.donars_request');
    }

public function store(Request $request)
{
 

    log::info($request->all());
   $request->validate([
    'fullName' => 'required|string|max:255',
    'age' => 'required|integer|min:18|max:65',
    'bloodGroup' => 'required|string',
    'gender' => 'required|string',
    'contact' => 'required|string|max:20',
     
    'location' => 'required|string',
]);
 
     try {
     

$baseName = time() . '_' . Str::slug($request->fullName ?: 'donor');

// Handle identity photo upload
if ($request->hasFile('identityPhoto')) {
    $idFile = $request->file('identityPhoto');
    $idPath = $idFile->storeAs(
        'uploads/donor/id_documents',
        $baseName . '_id.' . $idFile->getClientOriginalExtension(),
        'public'
    );
}

// Handle blood test document upload
if ($request->hasFile('testDocument')) {
    $testFile = $request->file('testDocument');
    $bloodPath = $testFile->storeAs(
        'uploads/donor/blood_tests',
        $baseName . '_blood.' . $testFile->getClientOriginalExtension(),
        'public'
    );
}
         // Store in database
        $donor = DonorModel::create([
            'name' => $request->fullName,
            'age' => $request->age,
            'blood_group' => $request->bloodGroup,
            'gender' => $request->gender,
            'contact' => $request->contact,
            'id_document' => $idPath,
            'blood_test_document' => $bloodPath,
            'location' => $request->location,
        ]);
         return response()->json([
            'success' => true,
            'message' => 'Donor created successfully.',
            'donor' => $donor
        ]);

    } catch (\Throwable $ex) {
        Log::error('Donor store failed', [
            'error' => $ex->getMessage(),
            'trace' => $ex->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Donor creation/upload failed: ' . $ex->getMessage()
        ], 500);
    }
}


 
    // Show single donor
    public function show($id)
    {
        $donor = DonorModel::findOrFail($id);
        return view('admin.donors.show', compact('donor'));
    }

     public function destroy($id)
{
    $donor = DonorModel::findOrFail($id);

     if ($donor->id_document && Storage::disk('public')->exists($donor->id_document)) {
        Storage::disk('public')->delete($donor->id_document);
    }

     if ($donor->blood_test_document && Storage::disk('public')->exists($donor->blood_test_document)) {
        Storage::disk('public')->delete($donor->blood_test_document);
    }

     $donor->delete();

    return redirect()->route('donors.index')->with('success', 'Donor deleted successfully.');
}

    // Approve / unapprove donor
    public function approve($id)
    {
        $donor = DonorModel::findOrFail($id);
        $donor->status = $donor->status == 1 ? 0 : 1;
        $donor->save();

        $message = $donor->status == 1 ? 'Donor approved successfully.' : 'Donor unapproved successfully.';
        return redirect()->route('donors.index')->with('success', $message);
    }
 
 
// public function search(Request $request)
// {
//     $request->validate([
//         'blood_group' => 'required|string',
//         'location'    => 'nullable|string',  
//         'radius'      => 'nullable|numeric',
//     ]);

//     $bloodGroup = $request->blood_group;
//     $locationInput = $request->location;  
//     $radius = (float) ($request->radius ?? 2);  
//     $query = DonorModel::where('blood_group', $bloodGroup)
//         ->where('status', 1);

//     $lat = null;
//     $lng = null;

//      if ($locationInput && strpos($locationInput, ',') !== false) {
//         [$lat, $lng] = array_map('trim', explode(',', $locationInput));
//         if (is_numeric($lat) && is_numeric($lng)) {
//             $lat = (float) $lat;
//             $lng = (float) $lng;
//         } else {
//             $lat = null;
//             $lng = null;
//         }
//     }

//      if (!is_null($lat) && !is_null($lng)) {

//         $haversine = "
//             (6371 * acos(
//                 cos(radians(?)) *
//                 cos(radians(CAST(TRIM(SUBSTRING_INDEX(location, ',', 1)) AS DECIMAL(10,6)))) *
//                 cos(radians(CAST(TRIM(SUBSTRING_INDEX(location, ',', -1)) AS DECIMAL(10,6))) - radians(?)) +
//                 sin(radians(?)) *
//                 sin(radians(CAST(TRIM(SUBSTRING_INDEX(location, ',', 1)) AS DECIMAL(10,6))))
//             ))
//         ";

//         $donors = $query->selectRaw(
//             "contact, blood_group, location, {$haversine} AS distance",
//             [$lat, $lng, $lat]
//         )
//         ->having('distance', '<=', $radius)
//         ->orderBy('distance')
//         ->limit(10)
//         ->get();

//     } else {
//          $donors = $query->select('contact', 'blood_group', 'location')
//                          ->get();
//     }

//      foreach ($donors as $donor) {
//         if (!empty($donor->location)) {
//             $donor->municipality = $this->getMunicipality($donor->location);
//         } else {
//             $donor->municipality = null;
//         }
//     }

//     return response()->json([
//         'success' => true,
//         'data'    => $donors
//     ]);
// }

public function search(Request $request)
{
    $request->validate([
        'blood_group' => 'required|string',
        'location'    => 'nullable|string',
        'radius'      => 'nullable|numeric',
    ]);

    $bloodGroup = $request->blood_group;
    $locationInput = $request->location;
    $radius = (float) ($request->radius ?? 2);

    $query = DonorModel::where('blood_group', $bloodGroup)
        ->where('status', 1);

    // Extract user lat/lng
    $lat = null;
    $lng = null;

    if ($locationInput && strpos($locationInput, ',') !== false) {
        [$lat, $lng] = array_map('trim', explode(',', $locationInput));
        if (!is_numeric($lat) || !is_numeric($lng)) {
            $lat = $lng = null;
        }
    }

    if (!is_null($lat) && !is_null($lng)) {

        // PostgreSQL version of Haversine
        $haversine = "
            (6371 * acos(
                cos(radians(?)) *
                cos(radians(CAST(split_part(location, ',', 1) AS DOUBLE PRECISION))) *
                cos(radians(CAST(split_part(location, ',', 2) AS DOUBLE PRECISION)) - radians(?)) +
                sin(radians(?)) *
                sin(radians(CAST(split_part(location, ',', 1) AS DOUBLE PRECISION)))
            ))
        ";

        $donors = $query
            ->selectRaw("contact, blood_group, location, {$haversine} AS distance", [
                $lat, $lng, $lat
            ])
            ->having('distance', '<=', $radius)
            ->orderBy('distance')
            ->limit(10)
            ->get();

    } else {
        $donors = $query->select('contact', 'blood_group', 'location')->get();
    }

    // Add Municipality
    foreach ($donors as $donor) {
        $donor->municipality = !empty($donor->location)
            ? $this->getMunicipality($donor->location)
            : null;
    }

    return response()->json([
        'success' => true,
        'data'    => $donors
    ]);
}

 
     private function getMunicipality($location)
    {
        $parts = explode(',', $location);
        if (count($parts) != 2) {
            return null;
        }

        $lat = trim($parts[0]);
        $lng = trim($parts[1]);

        $url = "https://nominatim.openstreetmap.org/reverse?lat={$lat}&lon={$lng}&format=json";

         $options = [
            "http" => [
                "header" => "User-Agent: FindMyBlood/1.0\r\n"
            ]
        ];
        $context = stream_context_create($options);
        $response = @file_get_contents($url, false, $context);

        if (!$response) {
            return null;
        }

        $data = json_decode($response, true);

         return $data['address']['city_district'] ?? null;
    }
}
