<?php

namespace Database\Factories;

use App\Models\Flight;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FlightSchedule>
 */
class FlightScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'flight_id' => Flight::factory(),
            'departure_time' => $this->faker->dateTimeBetween('+1 days', '+1 weeks'),
            'arrival_time' => $this->faker->dateTimeBetween('+1 weeks', '+2 weeks'),
        ];
    }
}
