<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlightResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray(Request $request) : array
    {
        return [
            'id' => $this->airline_id,
            'flightNumber' => $this->flight_number,
            'origin' => $this->origin,
            'destination' => $this->destination,
            'departureTime' => $this->departure_time,
            'arrivalTime' => $this->arrival_time,
            'price' => $this->price,
        ];
    }
}

