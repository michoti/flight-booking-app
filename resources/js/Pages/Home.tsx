import { Head, usePage } from '@inertiajs/react';
import { Flight } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import FlightSearch from './Flights/FlightSearch';

interface FlightPageProps {
    flights: Flight[];
}

const FlightPage: React.FC<FlightPageProps> = ({ flights }) => {
    return (
        <>
        <GuestLayout>
            <Head title="Home" />
            <div className="">
                Flights Booking Main Page

                <FlightSearch flights={flights} />


                {/* Flight Cards */}
                {/* {flights.map((flight: Flight) => (
                    <li key={flight.id}>
                        {flight.flightNumber}: {flight.origin} to {flight.destination} ({flight.departureTime} - {flight.arrivalTime})
                    </li>
                ))} */}
                {/* Flight Cards */}
           
                
            </div>

        </GuestLayout>

        </>
    );
}

export default FlightPage;
