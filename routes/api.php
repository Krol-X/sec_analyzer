<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\SecurityController;

// Profiles
Route::apiResource('profiles', ProfileController::class);

// Portfolios
Route::apiResource('portfolios', PortfolioController::class);

// Securities
Route::apiResource('securities', SecurityController::class);
