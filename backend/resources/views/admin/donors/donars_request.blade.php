@extends('master')

@section('title', 'Add Donor')
@section('page-title', 'Add New Donor')

@section('content')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
    }

    .blood-card {
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
        transition: all 0.3s ease;
    }

    .blood-card:hover {
        box-shadow: 0 15px 40px rgba(220, 38, 38, 0.15);
    }

    .blood-header {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        color: white;
        border-radius: 16px 16px 0 0;
    }

    .blood-btn {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        color: white;
        transition: all 0.3s ease;
    }

    .blood-btn:hover {
        background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3);
    }

    .blood-btn-secondary {
        background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
        color: white;
    }

    .blood-btn-secondary:hover {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }

    .input-focus:focus {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
    }

    .checkbox-blood:checked {
        background-color: #dc2626;
        border-color: #dc2626;
    }

    .file-upload-area {
        border: 2px dashed #d1d5db;
        transition: all 0.3s ease;
    }

    .file-upload-area:hover {
        border-color: #dc2626;
        background-color: #fef2f2;
    }

    .eligibility-box {
        transition: all 0.5s ease;
    }

    .pulse {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .location-loading { color: #f59e0b; }
    .location-success { color: #10b981; }
    .location-error { color: #ef4444; }
    .btn-disabled {
        opacity: .6;
        cursor: not-allowed;
    }
</style>

<div class="container mx-auto px-4 max-w-3xl py-8">
    <!-- Registration Form -->
    <div class="blood-card overflow-hidden">
        <!-- Form Header -->
        <div class="blood-header py-5 px-6">
            <h2 class="text-2xl font-bold">Donor Registration Form</h2>
            <p class="text-red-100 mt-1">Please fill in all the required details accurately</p>
        </div>

        <form action="{{ route('donors.store') }}" method="POST" enctype="multipart/form-data" class="p-6 space-y-8" id="registrationForm">
            @csrf

            <!-- Personal Info -->
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Full Name *</label>
                        <input type="text" name="name" required
                            class="pl-3 w-full px-4 py-3 border border-gray-300 rounded-lg input-focus transition"
                            placeholder="Enter your full name">
                    </div>

                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Age *</label>
                        <input type="number" name="age" min="18" max="65" required
                            class="pl-3 w-full px-4 py-3 border border-gray-300 rounded-lg input-focus transition"
                            placeholder="18-65 years">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Blood Group *</label>
                        <select name="blood_group" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus transition">
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Gender *</label>
                        <div class="flex space-x-6 mt-2">
                            <label class="inline-flex items-center">
                                <input type="radio" name="gender" value="male" class="h-5 w-5 text-red-600 focus:ring-red-500" required>
                                <span class="ml-2">Male</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" name="gender" value="female" class="h-5 w-5 text-red-600 focus:ring-red-500">
                                <span class="ml-2">Female</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" name="gender" value="other" class="h-5 w-5 text-red-600 focus:ring-red-500">
                                <span class="ml-2">Other</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact & Documents -->
            <div class="space-y-6">
                <div>
                    <label class="block text-gray-700 font-semibold mb-1">Contact Number *</label>
                    <input type="text" name="contact" required
                        class="pl-3 w-full px-4 py-3 border border-gray-300 rounded-lg input-focus transition"
                        placeholder="Enter phone number">
                </div>

                <div>
                    <label class="block text-gray-700 font-semibold mb-1">ID Document </label>
                    <input type="file" name="id_document" accept=".jpg,.jpeg,.png,.pdf"   class="w-full border border-gray-300 rounded px-3 py-2">
                </div>

                <div>
                    <label class="block text-gray-700 font-semibold mb-1">Blood Group Test Document *</label>
                    <input type="file" name="blood_test_document" accept=".jpg,.jpeg,.png,.pdf"   class="w-full border border-gray-300 rounded px-3 py-2">
                </div>
            </div>

            <!-- Location Controls -->
            <div class="space-y-4">
                <!-- Hidden Location Input -->
                <input type="hidden" name="location" id="location">

                <div class="flex items-center space-x-4">
                    <button type="button" id="fetchLocationBtn" class="blood-btn-secondary py-2 px-4 rounded-lg font-semibold">
                        <i class="fas fa-location-arrow mr-2"></i> Use my location
                    </button>

                    <div id="locationStatus" class="text-sm location-error">
                        Location not set.
                    </div>
                </div>

                <p class="text-xs text-gray-500 mt-1">
                    Clicking <strong>Use my location</strong> will ask for browser permission and fill your coordinates (lat,lng) into the form.
                    The <strong>Register Donor</strong> button will be enabled only after a valid location is fetched.
                </p>
            </div>

            <div class="text-center mt-4">
                <button type="submit" id="submitBtn" class="blood-btn py-3 px-8 font-semibold rounded-lg shadow-md flex items-center pulse btn-disabled" disabled>
                    <i class="fas fa-heart mr-2"></i> Register Donor
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Location Script -->
<script defer>
document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('location');
    const status = document.getElementById('locationStatus');
    const fetchBtn = document.getElementById('fetchLocationBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Helper to set UI to loading
    function setLoading() {
        status.textContent = 'Fetching your location...';
        status.className = 'location-loading text-sm';
        fetchBtn.disabled = true;
        fetchBtn.classList.add('btn-disabled');
    }

    // Helper to set success UI
    function setSuccess(lat, lng) {
        status.textContent = `Location fetched ✓ `;
        status.className = 'location-success text-sm';
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-disabled');
        fetchBtn.disabled = false;
        fetchBtn.classList.remove('btn-disabled');
    }

    // Helper to set error UI
    function setError(msg) {
        status.textContent = msg || 'Could not fetch location ❌';
        status.className = 'location-error text-sm';
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled');
        fetchBtn.disabled = false;
        fetchBtn.classList.remove('btn-disabled');
    }

    // Perform geolocation fetch
    function fetchLocation() {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser ❌');
            return;
        }

        setLoading();

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = parseFloat(position.coords.latitude);
                const lng = parseFloat(position.coords.longitude);

                // Save as "lat,lng" (your agreed format)
                locationInput.value = `${lat},${lng}`;

                setSuccess(lat, lng);
            },
            (error) => {
                console.error('Geolocation error:', error);
                let message = 'Could not fetch location ❌';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        message = 'Permission denied. Allow location access and try again.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message = 'Position unavailable. Try again or check your device settings.';
                        break;
                    case error.TIMEOUT:
                        message = 'Request timed out. Try again.';
                        break;
                }
                setError(message);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    }

    // Wire up button click
    fetchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetchLocation();
    });

     fetchLocation();
});
</script>
@endsection
