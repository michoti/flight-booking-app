<?php 

namespace App\Repositories\Contract;

interface FlightRepositoryInterface
{
    public function getAllFlights();
    public function findFlightById($id);
    public function searchFlight(string | array $param, int $amount);
}
