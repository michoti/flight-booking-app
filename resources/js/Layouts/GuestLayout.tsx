import { useState, PropsWithChildren, useEffect, FormEventHandler } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, useForm } from '@inertiajs/react';
import { Boxes, Search } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Authenticated({ children }: PropsWithChildren) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        searchterm: '',
    });

    useEffect(() => {
        return () => {
            reset('searchterm');
        };
    }, []);

    // const fetchData = (e) => {
    //     e.preventDefault();

    //     post(route('flight.search', value));
    // };

    // const handleChange = (value) => {      
    //     post(route('flight.search'));
    // };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <Boxes className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('flight.index')} active={route().current('flight.index')}>
                                    Explore
                                </NavLink>                                
                                <Dropdown>
                                    <Dropdown.Trigger>                                        
                                        <NavLink href='#' active={route().current('flight.index')} preserveState>
                                            Book
                                        </NavLink>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <form onSubmit={submit}>
                                             <div className="flex justify-between h-16 w-full">
                                                <TextInput
                                                    id="searchterm"
                                                    type="text"
                                                    name="searchterm"
                                                    value={data.searchterm}
                                                    className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) => handleChange(e.target.value)}
                                                />
                                                <PrimaryButton className="ms-4" disabled={processing}>
                                                    search
                                                </PrimaryButton>
                                             </div>                                             
                                        </form>
                                    </Dropdown.Content>
                                </Dropdown>
                                <NavLink href={route('flight.index')} active={route().current('flight.index')}>
                                    Where to fly
                                </NavLink>
                                <NavLink href={route('flight.index')} active={route().current('flight.index')}>
                                    Experience
                                </NavLink>
                                <NavLink href={route('flight.index')} active={route().current('flight.index')}>
                                    Loyalty program
                                </NavLink>
                                <NavLink href={route('flight.index')} active={route().current('flight.index')}>
                                    Help
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <Search />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <form onSubmit={submit}>
                                             <div className="flex justify-between h-16 w-full">
                                                <TextInput
                                                    id="searchterm"
                                                    type="text"
                                                    name="searchterm"
                                                    value={data.searchterm}
                                                    className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) => setData('searchterm', e.target.value)}
                                                />
                                                <PrimaryButton className="ms-4" disabled={processing}>
                                                    search
                                                </PrimaryButton>
                                             </div>                                             
                                        </form>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('flight.index')} active={route().current('flight.index')}>
                            Home
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                John Doe
                            </div>
                            <div className="font-medium text-sm text-gray-500">johndoe@example.com</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('flight.index')}>
                                Where to Fly 
                            </ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('flight.index')}>
                                Book
                            </ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('flight.index')}>
                                Help
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>      

            <main>{children}</main>
        </div>
    );
}
