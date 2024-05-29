import TextInput from '@/Components/TextInput';
import FlightResultList from './FlightResultList';
import { ChangeEvent, useEffect, useState } from 'react';
import { Flight } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';

interface FlightSearchProps {
    flights: Flight[];
}


const FlightSearch: React.FC<FlightSearchProps> = ({ flights }) => {
    const [filteredData, setFilteredData] = useState<Flight[]>([]);
    const [flightData, setFlightData] = useState({
        origin: ''
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFlightData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFilter = () => {
        if (!Array.isArray(flights.data)) {
            console.error("flights is not an array" , flights.data);
            return;
        }
        let result = flights.data.filter((data) => {
            if(data &&
               data.origin &&
               data.origin.toLowerCase()
                   .includes(flightData.origin.trim().toLowerCase())
            ){
                return data;
            }
        });

        setFilteredData(result);
        console.log(result)
    }  
    
    // useEffect(() => {
    //     handleFilter();
    // }, []);
    

    return (
        <>
            <div className="space-x-2 flex items-center justify-between">
                <TextInput
                    id="origin"
                    name="origin"
                    value={flightData.origin}
                    className="mt-1 block w-full"
                    autoComplete="origin"
                    placeholder='origin'
                    isFocused={true}
                    onChange={handleInputChange}
                    required
                />
                {/* <p> to </p>
                <TextInput
                    id="destination"
                    name="destination"
                    className="mt-1 block w-full"
                    autoComplete="destination"
                    placeholder='destination'
                    isFocused={true}
                    required
                /> */}
            </div>
            <PrimaryButton className="ms-4" onClick={handleFilter}>
                Search
            </PrimaryButton>
            
        <FlightResultList flights={filteredData} /> 
        </>      

           
                
        
        
    );
}

export default FlightSearch
