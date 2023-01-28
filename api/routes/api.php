<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\AuthController::class, 'login'])->name('api.login');
Route::post('register', [App\Http\Controllers\AuthController::class, 'register'])->name('api.register');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('logout', [App\Http\Controllers\AuthController::class, 'logout'])->name('api.logout');
    Route::get('pessoas', [App\Http\Controllers\PessoaController::class, 'index'])->name('api.pessoas');
    Route::get('pessoas/{pessoa}', [App\Http\Controllers\PessoaController::class, 'show'])->name('api.pessoas.show');
    Route::post('pessoas', [App\Http\Controllers\PessoaController::class, 'store'])->name('api.pessoas.store');
    Route::put('pessoas/{pessoa}', [App\Http\Controllers\PessoaController::class, 'update'])->name('api.pessoas.update');
    Route::delete('pessoas/{pessoa}', [App\Http\Controllers\PessoaController::class, 'destroy'])->name('api.pessoas.destroy');
});