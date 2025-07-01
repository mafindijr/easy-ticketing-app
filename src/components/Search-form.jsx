import React from 'react'
import { useState } from 'react';



export default function SearchForm ({ search, setSearch, handleSearch }) {


        const [dropdownOpen, setDropdownOpen] = useState(false);
        const handleTicketType = (type) => {
            // handle ticket type selection here
            setDropdownOpen(false);
        };


        return (
                <form className='font-montserrat text-[14px]'>

                <div id="search-bar" className="right-0 left-0 inline-flex pr-30 pl-30  absolute top-12 bg-gray-50 px-10 z-10">
                
            <input
            type="search"
            className="flex-1 h-9 border-1 bg-gray-100 border-gray-200 rounded-l-full w-3xl mb-2 mt-2 px-4 outline-none font-sm shadow-inset-sm inline-flex"
            name="search"
            placeholder="Search for concerts, tech meetup or more"
            />

            <button className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer w-20 h-9 px-4 mb-2 mt-2">Lagos</button>
            <button className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer w-20 h-9 px-4 mb-2 mt-2">Paid</button>
            <div className="relative">
            <button
                id="search-btn"
                className="bg-gray-100 hover:bg-gray-200 border-1 border-gray-200 cursor-pointer h-9 px-4 mb-2 mt-2 flex items-center gap-2 w-40"
                onClick={e => {
                e.preventDefault();
                setDropdownOpen((open) => !open);
                }}
                type="button"
            >
                {/* Accordion icon on the left */}
                <svg
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Ticket Type
            </button>
                {dropdownOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleTicketType('Free')}>Free</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleTicketType('Paid')}>Paid</button>
                </div>
                )}
                </div>
                <button className="bg-homeexplore hover:bg-homeexplohover  cursor-pointer rounded-r-full w-9 h-9 mb-2 mt-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
                    
            </div>
            </form>
        );
}
