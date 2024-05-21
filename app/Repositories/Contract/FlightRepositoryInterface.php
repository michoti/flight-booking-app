<?php 

namespace App\Repositories\Contracts;

interface FlightRepositoryInterface
{
    public function getAllFlights();
    public function findFlightById($id);
    public function searchFlight(string $param, int $amount);
}