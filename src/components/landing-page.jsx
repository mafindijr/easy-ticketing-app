import React, { useState } from "react";





export default function LandingPage() {
  // Move hooks and handlers here, before return
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleTicketType = (type) => {
    // handle ticket type selection here
    setDropdownOpen(false);
  };

  return (
    <header className="relative  overflow-scroll flex justify-center items-center">

      <nav className="bg-gray-50 fixed left-0 right-0 top-0 flex px-2 py-2 items-center px-10 top-0 justify-between z-10">
        <div id="title" className="flex-1 text-homeexplohover font-md font-bold">Easy Ticketing</div>
        <div id='logi-sign-box' className="flex gap-2 items-center">
          <div className="font-sm font-bold">
          <p>
           <a href="#" className="p-1 font-sm">Log in</a>
            |
           <a href="#" className="p-1 font-sm">Sign up</a>
           </p>
          </div>

          <div>
          <button className="px-4 py-1 mr-3 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-100">Create Events</button>
          </div>

        </div>
      </nav>

       <div id="search-bar" className="right-0 left-0 inline-flex  absolute top-12 bg-gray-50 px-10 z-10">
      
        <input
  type="search"
  className="flex-1 h-9 border-1 bg-gray-100 border-gray-200 rounded-l-full w-3xl mb-2 mt-2 px-4 font-sm shadow-inset-sm inline-flex"
  name="search"
  placeholder="Search for concerts, tech meetup or more"
/>

<button className="bg-gray-100 hover:bg-gray-100 border-1 border-gray-200 cursor-pointer w-20 h-9 px-4 mb-2 mt-2">Lagos</button>
<button className="bg-gray-100 hover:bg-gray-100 border-1 border-gray-200 cursor-pointer w-20 h-9 px-4 mb-2 mt-2">Paid</button>
<div className="relative">
  <button
    id="search-btn"
    className="bg-gray-100 hover:bg-gray-100 border-1 border-gray-200 cursor-pointer h-9 px-4 mb-2 mt-2 flex items-center gap-2 w-40"
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
<button className="bg-homeexplore hover:bg-homeexplohover hover:bg-gray-100 border-1 border-gray-200 cursor-pointer rounded-r-full w-9 h-9 mb-2 mt-2 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
</button>
        
        </div>

        <div
  id="hero-sect"
  className="relative w-full max-w-5xl h-[24rem] rounded-2xl mx-auto mt-32 flex flex-col items-center justify-center bg-[url(/easy-image.jpg)] bg-no-repeat bg-center shadow-lg"
  style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }} // px-10 equivalent for left/right
>

  {/* Dark blue transparent overlay */}
  <div className="absolute inset-0 bg-[rgba(13,71,161,0.6)] pointer-events-none z-0 rounded-2xl"></div>

  <div
    id="content"
    className="relative z-10 w-full max-w-xl px-8 pt-10 pb-6 rounded-md flex flex-col items-start justify-center"
  >
    <h1 className="font-bold text-gray-50 px-4 text-center text-3xl w-full">
      Discover. Book. Attend
    </h1>
    <h1 className="text-addeventbtn font-bold px-4 text-center text-3xl w-full">Seamlessy</h1>

    <p
      className="text-gray-50 text-[0.7rem] text-center w-full whitespace-nowrap px-4 mb-2"
    >
      Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.
    </p>

    <div className="flex flex-row items-center justify-center mt-4 px-4 w-full">
      <button className="px-4 mr-4 py-1 rounded-sm text-base font-semibold cursor-pointer bg-homeexplore hover:bg-homeexplohover text-gray-100">
        Explore Events
      </button>
      <button className="px-4 py-1 rounded-sm text-base font-semibold cursor-pointer border-2 border-gray-100 hover:bg-gray-100 hover:text-homeexplohover hover:border-homeexplohover text-gray-100">
        Host an Event
      </button>
    </div>
  </div>
</div>

    </header>
    )
  }
