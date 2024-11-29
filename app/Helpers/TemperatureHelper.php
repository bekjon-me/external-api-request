<?php

namespace App\Helpers;

class TemperatureHelper
{
  public static function kelvinToCelsius(float $kelvin): float
  {
    return round($kelvin - 273.15, 2);
  }
}
