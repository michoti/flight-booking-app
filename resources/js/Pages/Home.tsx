import { Head, usePage } from '@inertiajs/react';
import { Flight } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import FlightSearch from './Flights/FlightSearch';

interface Props {
    flights: Flight[];
}

const FlightPage: React.FC<Props> = () => {
    const { flights } = usePage<Props>().props;
    return (
        <>
        <GuestLayout>
            <Head title="Home" />
            <div className="">
                Flights Booking Main Page

                <FlightSearch />


                {/* Flight Cards */}
                {flights.data.map((flight: Flight) => (
                    <li key={flight.id}>
                        {flight.flightNumber}: {flight.origin} to {flight.destination} ({flight.departureTime} - {flight.arrivalTime})
                    </li>
                ))}
                {/* Flight Cards */}
           
                
            </div>

        </GuestLayout>

        </>
    );
}

export default FlightPage;
