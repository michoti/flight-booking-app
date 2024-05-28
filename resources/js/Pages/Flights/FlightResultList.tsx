import { Flight } from '@/types';

interface SearchResultProps {
    flights: Flight[];
}

const FlightResultList: React.FC<SearchResultProps> = ({ flights }) => {
    return (
        <>
            Result List 
            {JSON.stringify(flights)}

        </>
    );
}

export default FlightResultList;
