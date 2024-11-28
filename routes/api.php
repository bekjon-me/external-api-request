<?php

use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

Route::get('get-weather-data', [WeatherController::class, 'getWeatherData']);
