import { Flight } from '@/types';

interface SearchResultProps {
    flights: Flight[];
}

const FlightResultList: React.FC<SearchResultProps> = ({ flights }) => {
    return (
        <>
            Result List 

        </>
    );
}

export default FlightResultList;
