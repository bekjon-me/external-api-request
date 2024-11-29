<?php

namespace App\Services;

use App\DTO\WeatherDTO;
use App\Http\Resources\WeatherResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WeatherService
{
  public function __construct()
  {
  }

  public function getWeather(WeatherDTO $weather): JsonResponse|WeatherResource
  {
      $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
        'q' => $weather->city_name,
        'appid' => config('services.weather.app_id'),
      ]);

      if($response->successful()) {{
        return new WeatherResource($response->json());
      }}

      return response()->json([
        'message' => 'It seems that city not found',
      ], $response->status());
  }
}
