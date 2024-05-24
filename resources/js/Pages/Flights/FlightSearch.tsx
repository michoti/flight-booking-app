import TextInput from '@/Components/TextInput';
import FlightResultList from './FlightResultList';
import { ChangeEvent, useState } from 'react';
import { Flight } from '@/types';

interface FlightSearchProps {
    flights: Flight[];
}


const FlightSearch: React.FC<FlightSearchProps> = ({ flights }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState({
        origin: ''
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFilter = () => {
        let result = flights.filter((data) => {
            if(data &&
               data.origin 
            ){
                return data;
            }
        });
    }  
    
    // useEffect(() => {
    //     handleFilter();
    // }, [data]);
    

    return (
        <>
            <div className="space-x-2 flex items-center justify-between">
                <TextInput
                    id="origin"
                    name="origin"
                    value={data.origin}
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
            {/* <PrimaryButton className="ms-4">
                Search
            </PrimaryButton> */}
            
        <FlightResultList flights={filteredData} /> 
        </>      

           
                
        
        
    );
}

export default FlightSearch
