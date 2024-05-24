import { useEffect, FormEventHandler } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function FlightSearch() {
    const { data, setData, post, processing, reset } = useForm({
        origin: '',
        destination: '',
    });

    useEffect(() => {
        return () => {
            reset('origin', 'destination');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();        

        post(route('flight.search'), {data: JSON.stringify(data, null, 2)});
    };

    return (

            <form onSubmit={submit}>
                <div className='flex items-center'>

                    <div className="space-x-2 flex items-center justify-between">
                        <TextInput
                        id="origin"
                        name="origin"
                        value={data.origin}
                        className="mt-1 block w-full"
                        autoComplete="origin"
                        placeholder='origin'
                        isFocused={true}
                        onChange={(e) => setData('origin', e.target.value)}
                        required
                        />
                        <p> to </p>
                        <TextInput
                            id="destination"
                            name="destination"
                            value={data.destination}
                            className="mt-1 block w-full"
                            autoComplete="destination"
                            placeholder='destination'
                            isFocused={true}
                            onChange={(e) => setData('destination', e.target.value)}
                            required
                        />
                    </div>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Search
                    </PrimaryButton>
                </div>                
                
            </form>
        
    );
}
