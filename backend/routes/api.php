<?php

use App\Http\Controllers\admin\DonarsController;
 use Illuminate\Support\Facades\Route;

 

// POST route for donor search
Route::GET('/donors/search', [DonarsController::class, 'search']);
 Route::post('/donors', [DonarsController::class, 'store'])->name('donors.store');


//  FL2t5i5Qe6kVxy7