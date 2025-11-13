@extends('master')

@section('title', 'Donors List')
@section('page-title', 'All Donors')

@section('content')
<div class="container mx-auto px-4 max-w-5xl py-8">
    @if(session('success'))
        <div class="bg-green-100 text-green-800 p-4 rounded mb-6">
            {{ session('success') }}
        </div>
    @endif

    <div class="flex justify-between mb-4">
        <h2 class="text-xl font-bold">Donors</h2>
        <a href="{{ route('donors.create') }}" class="blood-btn py-2 px-4 rounded">Add Donor</a>
    </div>

    <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-md">
            <thead class="bg-red-600 text-white">
                <tr>
                    <th class="py-2 px-4">#</th>
                    <th class="py-2 px-4">Name</th>
                    <th class="py-2 px-4">Age</th>
                    <th class="py-2 px-4">Blood Group</th>
                    <th class="py-2 px-4">Gender</th>
                    <th class="py-2 px-4">Contact</th>
                    <th class="py-2 px-4">Location</th>
                    <th class="py-2 px-4">Status</th>
                    <th class="py-2 px-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($donors as $donor)
                    <tr class="border-b hover:bg-gray-50">
                        <td class="py-2 px-4">{{ $loop->iteration }}</td>
                        <td class="py-2 px-4">{{ $donor->name }}</td>
                        <td class="py-2 px-4">{{ $donor->age }}</td>
                        <td class="py-2 px-4">{{ $donor->blood_group }}</td>
                        <td class="py-2 px-4">{{ ucfirst($donor->gender) }}</td>
                        <td class="py-2 px-4">{{ $donor->contact }}</td>
                        <td class="py-2 px-4">{{ $donor->location }}</td>
                        <td class="py-2 px-4">
                            @if($donor->status == 1)
                                <span class="text-green-600 font-bold">Approved</span>
                            @else
                                <span class="text-gray-600 font-bold">Pending</span>
                            @endif
                        </td>
                        <td class="py-2 px-4 flex space-x-2">
                            <!-- Approve button -->
                            @if($donor->status != 1)
                                   <a href="{{ route('donors.approve', $donor->id) }}"   class="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700">Approve</a>
                                    
                            @endif

                            <!-- Edit button -->
                           <a href="{{ url('donors/show/' . $donor->id) }}" class="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500">
    View
</a>


                            <!-- Delete button -->
                            <a href="{{ url('donors/delete/'. $donor->id) }}" class="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                     Delete
                            </a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="9" class="text-center py-4">No donors found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <div class="mt-4">
            {{ $donors->links() }}
        </div>
    </div>
</div>
@endsection
