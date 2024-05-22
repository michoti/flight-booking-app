import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Flight(flights : any) {

    return (
        <>
            <Head title="Home" />
            <div className="bg-indigo-600 text-white">
                Flights Booking Main Page
                {flights.map( flight => (
                    <div key={flight.id}>test</div>
                ))}
            </div>
        </>
    );
}
