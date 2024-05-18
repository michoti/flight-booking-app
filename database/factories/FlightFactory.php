<?php

namespace Database\Factories;

use App\Models\Airline;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Flight>
 */
class FlightFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'airline_id' => Airline::factory(),
            'flight_number' => strtoupper($this->faker->bothify('??###')),
            'origin' => $this->faker->city,
            'destination' => $this->faker->city,
            'departure_time' => $this->faker->dateTimeBetween('+1 days', '+1 weeks'),
            'arrival_time' => $this->faker->dateTimeBetween('+1 weeks', '+2 weeks'),
            'price' => $this->faker->randomFloat(2, 50, 1000),
        ];
    }
}
