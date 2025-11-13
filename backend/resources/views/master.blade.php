<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel')</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @stack('styles')
</head>
<body class="bg-gray-100 flex">

  
<div class="sidebar">
    @include('admin.components.navbar') 
</div>    <!-- Main content -->
    <div class="flex-1 flex flex-col min-h-screen">
        <!-- Top Navbar -->
        <header class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h1 class="text-xl font-semibold text-gray-800">@yield('page-title', 'Dashboard')</h1>
            <div class="flex items-center gap-4">
                <span class="text-gray-600">Admin</span>
                <img src="https://ui-avatars.com/api/?name=Admin" class="w-10 h-10 rounded-full">
            </div>
        </header>

        <!-- Page Content -->
        <main class="p-6 flex-1 overflow-y-auto">
            @yield('content')
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t py-4 px-6 text-center text-gray-500">
            &copy; {{ date('Y') }} BloodFinder. All rights reserved.
        </footer>
    </div>

    @stack('scripts')
</body>
</html>
