<?php

namespace App\Helpers;

class TemperatureHelper
{
  public static function fahrenheitToCelsius(float $fahrenheit): float
  {
    return round(($fahrenheit - 32) * 5 / 9, 2);
  }
}
