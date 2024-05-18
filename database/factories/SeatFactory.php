<?php

namespace Database\Factories;

use App\Models\Booking;
use App\Models\Flight;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seat>
 */
class SeatFactory extends Factory
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
            'seat_number' => $this->faker->unique()->bothify('##??'),
            'booking_id' => Booking::factory(),
            'class' => $this->faker->randomElement(['Economy', 'Business', 'First']),
            'is_available' => $this->faker->boolean(80),
        ];
    }
}
