@extends('master')

@section('title', 'Donor Details')
@section('page-title', 'Donor Information')

@section('content')
<div class="container mx-auto px-4 max-w-3xl py-8">
    <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Donor Details</h2>

        <div class="grid grid-cols-2 gap-4 mb-4">
            <!-- Name -->
            <div>
                <h3 class="font-semibold text-gray-700">Name</h3>
                <p class="text-gray-900">{{ $donor->name }}</p>
            </div>

            <!-- Age -->
            <div>
                <h3 class="font-semibold text-gray-700">Age</h3>
                <p class="text-gray-900">{{ $donor->age }}</p>
            </div>

            <!-- Blood Group -->
            <div>
                <h3 class="font-semibold text-gray-700">Blood Group</h3>
                <p class="text-gray-900">{{ $donor->blood_group }}</p>
            </div>

            <!-- Gender -->
            <div>
                <h3 class="font-semibold text-gray-700">Gender</h3>
                <p class="text-gray-900">{{ ucfirst($donor->gender) }}</p>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="font-semibold text-gray-700">Contact</h3>
                <p class="text-gray-900">{{ $donor->contact }}</p>
            </div>

            <!-- Location -->
            <div>
                <h3 class="font-semibold text-gray-700">Location</h3>
                <p class="text-gray-900">{{ $donor->location }}</p>
            </div>

            <!-- Status -->
            <div class="col-span-2">
                <h3 class="font-semibold text-gray-700">Status</h3>
                <p class="text-gray-900">
                    @if($donor->status == 1)
                        <span class="text-green-600 font-bold">Approved</span>
                    @else
                        <span class="text-gray-600 font-bold">Pending</span>
                    @endif
                </p>
            </div>
<!-- ID Document -->
<div class="col-span-2">
    <h3 class="font-semibold text-gray-700">ID Document</h3>
    @if($donor->id_document && Storage::disk('public')->exists($donor->id_document))
        <div class="border rounded p-2 w-full max-w-md">
            <img src="{{ asset('storage/' . $donor->id_document) }}" alt="ID Document" class="w-full h-auto object-contain">
        </div>
    @else
        <p class="text-gray-500">No document uploaded</p>
    @endif
</div>

<!-- Blood Test Document -->
<div class="col-span-2">
    <h3 class="font-semibold text-gray-700">Blood Test Document</h3>
    @if($donor->blood_test_document && Storage::disk('public')->exists($donor->blood_test_document))
        <div class="border rounded p-2 w-full max-w-md">
            <img src="{{ asset('storage/' . $donor->blood_test_document) }}" alt="Blood Test Document" class="w-full h-auto object-contain">
        </div>
    @else
        <p class="text-gray-500">No document uploaded</p>
    @endif
</div>

        </div>

        <!-- Action Buttons -->
        <div class="mt-6 flex gap-4">
            <!-- Approve / Unapprove Button -->
            <a href="{{ route('donors.approve', $donor->id) }}"
               class="{{ $donor->status == 1 ? 'bg-gray-600 hover:bg-gray-700' : 'bg-green-600 hover:bg-green-700' }} 
                      text-white py-2 px-4 rounded">
                {{ $donor->status == 1 ? 'Unapprove' : 'Approve' }}
            </a>

            <!-- Back Button -->
            <a href="{{ url('donors/') }}" class="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500">Back</a>
        </div>
  
     </div>
</div>
@endsection
