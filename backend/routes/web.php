<?php

use App\Http\Controllers\admin\DonarsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
 Route::middleware('auth')->group(function () {


     Route::get('/', [DonarsController::class, 'index'])->name('donors.index');
 Route::get('/donors/create', [DonarsController::class, 'create'])->name('donors.create');
Route::get('/donors/show/{id}', [DonarsController::class, 'show'])->name('donors.show');
 Route::get('/donors/delete/{id}', [DonarsController::class, 'destroy'])->name('donors.destroy');
 Route::get('/donors/{id}/approve', [DonarsController::class, 'approve'])->name('donors.approve');

 });



//  Route::get('/donors/search', [DonarsController::class, 'search'])->name('api.donors.search');


require __DIR__.'/auth.php';
