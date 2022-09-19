<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('criar-cliente', 'App\Http\Controllers\ClienteController@store');
Route::get('listar-clientes', 'App\Http\Controllers\ClienteController@index');

Route::post('criar-produto', 'App\Http\Controllers\ProdutoController@store');
Route::get('listar-produtos', 'App\Http\Controllers\ProdutoController@index');

Route::post('criar-pedido-venda', 'App\Http\Controllers\VendaController@store');