<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlightResource;
use App\Repositories\Concrete\FlightRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        // $request->only(['destination', 'origin']);

        $dataString = $request->input('data');
        Log::info($dataString);

        $data = json_decode($dataString, true);

        Log::info($data);

        $flights = $this->flightRepository->searchFlight($data, 5);

        return response()->json($flights);
    }
}
