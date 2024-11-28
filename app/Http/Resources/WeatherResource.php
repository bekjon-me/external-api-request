<?php

namespace App\Http\Resources;

use App\Helpers\TemperatureHelper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class WeatherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
          'lon' => $this['coord']['lon'],
          'lat' => $this['coord']['lat'],
          'weather' => $this['weather'][0]['main'],
          'temperature' => TemperatureHelper::fahrenheitToCelsius($this['main']['temp']),
          'humidity' => $this['main']['humidity'],
          'city' => $this['name']
        ];
    }
}
