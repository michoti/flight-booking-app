<?php 

namespace App\Repositories\Concrete;

use App\Models\Flight;
use App\Repositories\Contracts\FlightRepositoryInterface;

class FlightRepository implements FlightRepositoryInterface
{
    public function getAllFlights()
    {
        return Flight::with(['flight_number', 'origin', 'destination'])->get();
    }

    public function findFlightById($id)
    {
        return Flight::with(['flight_number', 'origin', 'destination'])->findOrFail($id);
    }

    public function searchFlight( $param, ? int $amount)
    {
        $amount ?? $amount = 10;

        return Flight::search($param)->paginate($amount);
    }
}
