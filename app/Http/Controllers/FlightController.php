<?php

namespace App\Http\Controllers;

use App\Repositories\Contracts\FlightRepositoryInterface;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    protected $flightRepository;

    public function __construct(FlightRepositoryInterface $flightRepository)
    {
        $this->flightRepository = $flightRepository;
    }

    public function index()
    {
        $flights = $this->flightRepository->getAllFlights();
        return view('flights.index', compact('flights'));
    }

    public function show($id)
    {
        $flight = $this->flightRepository->findFlightById($id);
        return view('flights.show', compact('flight'));
    }

    public function search(Request $request)
    {
        $criteria = $request->only(['destination']);
        $flights = $this->flightRepository->searchFlight($criteria, 5);
        return view('flights.search', compact('flights'));
    }
}
