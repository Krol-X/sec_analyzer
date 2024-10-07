<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\BillingsController;
use App\Http\Controllers\SecuritiesController;

Route::apiResource('api/profiles', ProfilesController::class);
Route::apiResource('api/billings', BillingsController::class);
Route::apiResource('api/securities', SecuritiesController::class);
