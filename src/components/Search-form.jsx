import { useState } from 'react';
import { useForm } from "react-hook-form";



export default function SearchForm ({ search, setSearch, handleSearch }) {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const [ticketDropdownOpen, setTicketDropdownOpen] = useState(false);
    const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

    const handleTicketType = (type) => {
        // handle ticket type selection here
        setTicketDropdownOpen(false);
    };
    const handleStateSelect = (state) => {
        // handle state selection here
        setStateDropdownOpen(false);
    };
    const handleCategorySelect = (category) => {
        // handle category selection here
        setCategoryDropdownOpen(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='font-montserrat text-[14px]'>
            <div id="search-bar" 
            className="right-0 left-0 inline-flex pr-30 pl-30  absolute top-17  px-10 z-10"
            >
                <input
                type="search"
                className="flex-1 h-9 border-1 bg-gray-100 border-gray-200 rounded-l-full w-3xl mb-2 mt-2 py-[24px] px-[18px] outline-none font-sm inline-flex"
                name="search"
                register={register}
                placeholder="Search for concerts, tech meetup or more"
                style={{ boxShadow: ' 1px 4px 8px rgba(0,0,0,0.12)' }}
                />

                {/* State Dropdown */}
                <div className="relative">
                    <button
                        className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer w-24 h-9 px-4 mb-2 mt-2 flex items-center justify-center gap-2 py-[24px] px-[18px]"
                        type="button"
                        style={{ boxShadow: ' 1px 4px 8px rgba(0,0,0,0.12)' }}
                        onClick={e => {
                            e.preventDefault();
                            setStateDropdownOpen(open => !open);
                        }}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${stateDropdownOpen ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="flex-1 text-center whitespace-nowrap">State</span>
                    </button>
                    {stateDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleStateSelect('Lagos')}>Lagos</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleStateSelect('Abuja')}>Abuja</button>
                            {/* Add more states as needed */}
                        </div>
                    )}
                </div>

                {/* Category Dropdown */}
                <div className="relative">
                    <button
                        className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer w-28 h-9 px-4 mb-2 mt-2 flex items-center justify-center gap-2 py-[24px] px-[18px]"
                        type="button"
                        style={{ boxShadow: ' 1px 4px 8px rgba(0,0,0,0.12)' }}
                        onClick={e => {
                            e.preventDefault();
                            setCategoryDropdownOpen(open => !open);
                        }}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${categoryDropdownOpen ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="flex-1 text-center whitespace-nowrap">Category</span>
                    </button>
                    {categoryDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect('Concert')}>Concert</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect('Tech Meetup')}>Tech Meetup</button>
                            {/* Add more categories as needed */}
                        </div>
                    )}
                </div>

                {/* Ticket Type Dropdown */}
                <div className="relative">
                    <button
                        id="search-btn"
                        className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer h-9 px-4 mb-2 mt-2 flex items-center justify-center gap-2 w-40 py-[24px] px-[18px]"
                        onClick={e => {
                            e.preventDefault();
                            setTicketDropdownOpen(open => !open);
                        }}
                        type="button"
                        style={{ boxShadow: ' 1px 4px 8px rgba(0,0,0,0.12)' }}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${ticketDropdownOpen ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="flex-1 text-center whitespace-nowrap">Ticket Type</span>
                    </button>
                    {ticketDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleTicketType('Free')}>Free</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleTicketType('Paid')}>Paid</button>
                        </div>
                    )}
                </div>

                <button className="bg-homeexplore hover:bg-homeexplohover  cursor-pointer rounded-r-full w-9 h-9 mb-2 mt-2 flex items-center justify-center h-[50px]"
                style={{ boxShadow: ' 1px 4px 8px rgba(0,0,0,0.12)' }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
                    
            </div>
         </form>
        );
}

