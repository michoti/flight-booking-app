<?php

use App\Http\Controllers\FlightController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/flights/search', [FlightController::class, 'search'])->name('flight.search');