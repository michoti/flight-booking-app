import { Link, Head, usePage } from '@inertiajs/react';
import { Flight, PageProps } from '@/types';
import { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

interface Props {
    flights: Flight[];
}

const FlightPage: React.FC<Props> = () => {
    const { flights } = usePage<Props>().props;
    //  const [query, setQuery] = useState('');
    //  const [flights, setFlights] = useState<Flight[]>([]);
    return (
        <>
        <GuestLayout>
            <Head title="Home" />
            <div className="">
                Flights Booking Main Page


                {/* Flight Cards */}
                {flights.data.map((flight: Flight) => (
                    <li key={flight.id}>
                        {flight.flightNumber}: {flight.origin} to {flight.destination} ({flight.departureTime} - {flight.arrivalTime})
                    </li>
                ))}
                {/* Flight Cards */}

                {/* Footer */}
                
                {/* Footer */}
           
                
            </div>

        </GuestLayout>

        </>
    );
}

export default FlightPage;
