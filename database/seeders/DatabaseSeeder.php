<?php

namespace Database\Seeders;

use App\Models\Airline;
use App\Models\Booking;
use App\Models\Flight;
use App\Models\FlightSchedule;
use App\Models\Seat;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = User::factory(10)->create();

        Airline::factory(5)->create();

        // Create 15 flights
        $flights = Flight::factory()->count(15)->create();
        
        $bookings = Booking::factory(10)->recycle([$users, $flights])->create();
        
        Seat::factory(10)->recycle([ $flights, $bookings ])->create();


        FlightSchedule::factory()->count(10)->create();

    }
}
