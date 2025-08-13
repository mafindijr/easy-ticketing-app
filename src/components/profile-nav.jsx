import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function ProfileNav() {

    const navs = [
      { to: "/dashboard", name: "Dashboard"},
      { to: "/tickets", name: "Tickets"},
      { to: "/profile", name: "Profile"}
    ]

  return (
    <div>
        <header 
        className="bg-white flex justify-between items-center h-18 px-30 font-montserrat font-bold fixed top-0 left-0 right-0 z-12"
        style={{boxShadow: '0px 0px 4px rgba(2, 2, 2, 0.15)' }}
        >
        <div className="">
         <div id="title" className="flex items-center text-center font-pacifico leading-normal font-[400] text-[32px] flex-1 text-addeventbtn font-bold">
            EasyTickets
            <span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center pt-2">
              <path d="M20 6.66675V9.33341M20 14.6667V17.3334M20 22.6667V25.3334M6.66667 6.66675H25.3333C26.0406 6.66675 26.7189 6.9477 27.219 7.4478C27.719 7.94789 28 8.62617 28 9.33341V13.3334C27.2928 13.3334 26.6145 13.6144 26.1144 14.1145C25.6143 14.6146 25.3333 15.2928 25.3333 16.0001C25.3333 16.7073 25.6143 17.3856 26.1144 17.8857C26.6145 18.3858 27.2928 18.6667 28 18.6667V22.6667C28 23.374 27.719 24.0523 27.219 24.5524C26.7189 25.0525 26.0406 25.3334 25.3333 25.3334H6.66667C5.95942 25.3334 5.28115 25.0525 4.78105 24.5524C4.28095 24.0523 4 23.374 4 22.6667V18.6667C4.70724 18.6667 5.38552 18.3858 5.88562 17.8857C6.38572 17.3856 6.66667 16.7073 6.66667 16.0001C6.66667 15.2928 6.38572 14.6146 5.88562 14.1145C5.38552 13.6144 4.70724 13.3334 4 13.3334V9.33341C4 8.62617 4.28095 7.94789 4.78105 7.4478C5.28115 6.9477 5.95942 6.66675 6.66667 6.66675Z" stroke="#FF6700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            </div>
        </div>
        <div className='flex gap-4 m-2'>
          {
            navs.map((nav, index ) => {
                return (
                    <NavLink to={nav.to} className={({ isActive }) => `leading-normal text-[16px] text-center  font-montserrat font-semibold p-2 cursor-pointer transition hover:text-homeexplore ${isActive? "text-homeexplore" : "" }`} key={index}>
                      { nav.name }
                    </NavLink>
                );
            })
          }
        </div>
        <div className='flex gap-8 text-[16px] font-montserrat font-bold '>
            <Link>
            <span>p img</span>
            <span>john doer</span>
            </Link>
            <Link>Log Out</Link>    
        </div>
      </header>
    </div>
  )
}
