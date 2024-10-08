<?php

use App\Http\Controllers\LinkController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/profiles', function () {
    return Inertia::render('Profiles');
})->middleware(['auth', 'verified'])->name('profiles');

Route::get('/billings', function () {
    return Inertia::render('Billings');
})->middleware(['auth', 'verified'])->name('billings');

Route::get('/test', function () {
    return Inertia::render('Test');
})->middleware(['auth', 'verified'])->name('test');

// Links
Route::get('/links', [LinkController::class, 'index'])->middleware(['auth', 'verified'])->name('links.index');
Route::post('/links', [LinkController::class, 'store'])->name('links.store');
Route::delete('/links/{link}', [LinkController::class, 'destroy'])->name('links.destroy');
