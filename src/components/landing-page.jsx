import { useState } from "react";
import SearchForm from "./Search-form";
import { Button } from "./button";
import UseModal from "./UseModal";
import { SignUpCover } from "./auth/sign-up/sign-up-cover";
import { Login } from "./auth/login";


export default function LandingPage() {

  const [openSignUpCover, setOpenSignUpCover] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <header className="relative flex justify-center items-center mt-2">

        <nav className=" fixed left-0 right-0 top-0 flex pr-30 pl-30 px-2 py-2 items-center px-10 top-0 justify-between z-12">
          <div id="title" className="flex items-center text-center font-pacifico leading-normal font-[400] text-[32px] flex-1 text-addeventbtn font-md font-bold">
            EasyTickets
            <span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center pt-2">
              <path d="M20 6.66675V9.33341M20 14.6667V17.3334M20 22.6667V25.3334M6.66667 6.66675H25.3333C26.0406 6.66675 26.7189 6.9477 27.219 7.4478C27.719 7.94789 28 8.62617 28 9.33341V13.3334C27.2928 13.3334 26.6145 13.6144 26.1144 14.1145C25.6143 14.6146 25.3333 15.2928 25.3333 16.0001C25.3333 16.7073 25.6143 17.3856 26.1144 17.8857C26.6145 18.3858 27.2928 18.6667 28 18.6667V22.6667C28 23.374 27.719 24.0523 27.219 24.5524C26.7189 25.0525 26.0406 25.3334 25.3333 25.3334H6.66667C5.95942 25.3334 5.28115 25.0525 4.78105 24.5524C4.28095 24.0523 4 23.374 4 22.6667V18.6667C4.70724 18.6667 5.38552 18.3858 5.88562 17.8857C6.38572 17.3856 6.66667 16.7073 6.66667 16.0001C6.66667 15.2928 6.38572 14.6146 5.88562 14.1145C5.38552 13.6144 4.70724 13.3334 4 13.3334V9.33341C4 8.62617 4.28095 7.94789 4.78105 7.4478C5.28115 6.9477 5.95942 6.66675 6.66667 6.66675Z" stroke="#FF6700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            </div>
          <div id='logi-sign-box' className="flex gap-2 items-center">
            <div className="font-poppins font-sm font-bold">

              <Button className="font-bold px-4 font-poppins"
                onClick={() => setOpenLogin(true)}
              >
                Log In
              </Button>
              |
              <Button className="font-bold px-4 font-poppins"
                onClick={() => setOpenSignUpCover(true)}
              >
                Sign Up
              </Button>
            </div>

            <div>
              <button className="font-poppins pt-[16px] pb-[16px] pl-[32px] pr-[32px] rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-50">Create Events</button>
            </div>

          </div>
        </nav>

        {/* search bar component*/}

        <SearchForm />

        <div className="w-full mt-4 pr-30 pl-30 items-center justify-center">

          <div
            id="hero-sect"
            className="relative w-full  h-80 rounded-2xl mt-32 flex flex-col items-center justify-center bg-[url(/easy-image.png)] bg-no-repeat bg-center bg-cover shadow-lg"

          >

            {/* Dark blue transparent overlay */}
            <div className="absolute inset-0 bg-[rgba(13,71,161,0.6)] pointer-events-none z-0 rounded-2xl"></div>

            <div
              id="content"
              className="relative z-10 w-full max-w-xl px-8 pt-10 pb-6 rounded-md flex flex-col items-start justify-center"
            >
              <h1 className="font-poppins font-bold text-gray-50 px-4 text-center text-3xl w-full">
                Discover. Book. Attend
              </h1>
              <h1 className="font-poppins text-addeventbtn font-bold px-4 text-center text-3xl w-full">Seamlessy</h1>

              <p
                className="font-montserrat text-gray-50 text-[18px] text-center whitespace-nowrap mb-2"
              >
                Find and book tickets for amazing local & vitual events with ease. No <br />hassle. Just fun.
              </p>

              <div className="font-poppins flex flex-row items-center justify-center mt-4 px-4 w-full">
                <button className="px-4 mr-4 py-1 h-10 rounded-sm text-base font-semibold cursor-pointer bg-homeexplore hover:bg-homeexplohover text-gray-100">
                  Explore Events
                </button>
                <button className="px-4 py-1 h-10 rounded-sm text-base font-semibold cursor-pointer border-2 border-gray-100 hover:bg-gray-100 hover:text-homeexplohover hover:border-homeexplohover text-gray-100">
                  Host an Event
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>
      <UseModal isOpen={openSignUpCover} onClose={() => setOpenSignUpCover(false)}>
        <SignUpCover />
      </UseModal>
      <UseModal isOpen={openLogin} onClose={() => setOpenLogin(false)}>
        <Login />
      </UseModal>
    </>
  )
}
