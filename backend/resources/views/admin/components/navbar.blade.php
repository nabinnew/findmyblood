  <!-- Sidebar -->
    <aside class="w-64 bg-red-600 min-h-screen text-white flex flex-col">
        <div class="p-6 text-2xl font-bold text-center border-b border-red-500">BloodFinder</div>
        <nav class="flex-1 mt-6">
            <ul class="space-y-2">
                <li>
                    <a href="/" class="block py-2 px-6 hover:bg-red-700 rounded  ">Dashboard</a>
                </li>
                <li>
                    <a href="/donors" class="block py-2 px-6 hover:bg-red-700 rounded ">Donors</a>
                </li>
                <li>
                    <a href="/donors/search" class="block py-2 px-6 hover:bg-red-700 rounded ">search Donor</a>
                </li>
                
                
            </ul>
        </nav>
        <div class="p-6 border-t border-red-500">
            <form action="{{ route('logout') }}" method="POST">
                @csrf
                <button type="submit" class="w-full bg-red-800 hover:bg-red-900 py-2 rounded text-white font-semibold">Logout</button>
            </form>
        </div>
    </aside>