<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlightResource;
use App\Repositories\Concrete\FlightRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlightController extends Controller
{
    protected $flightRepository;

    public function __construct(FlightRepository $flightRepository)
    {
        $this->flightRepository = $flightRepository;
    }

    public function index()
    {
        $flights = $this->flightRepository->getAllFlights();

        return Inertia::render('Home', [
            'flights' => FlightResource::collection($flights),
        ]);
    }

    public function show($id)
    {
        $flight = $this->flightRepository->findFlightById($id);
        return view('flights.show', compact('flight'));
    }

    public function search(Request $request)
    {
        $criteria = $request->only(['destination', 'origin', 'flight_number']);
        $flights = $this->flightRepository->searchFlight($criteria, 5);
        return response()->json($flights);
    }
}
