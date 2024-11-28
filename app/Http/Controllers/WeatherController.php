<?php

namespace App\Http\Controllers;

use App\DTO\WeatherDTO;
use App\Http\Requests\GetWeatherRequest;
use App\Services\WeatherService;

class WeatherController extends Controller
{
    public function __construct(public WeatherService $weatherService)
    {

    }

    public function getWeatherData(GetWeatherRequest $request)
    {
      $weather = new WeatherDTO($request->validated()['city_name']);
      return  $this->weatherService->getWeather($weather);
    }
}
