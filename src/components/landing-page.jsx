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
      <header className="relative flex justify-center items-center">

        <nav className="bg-gray-50 fixed left-0 right-0 top-0 flex pr-30 pl-30 px-2 py-2 items-center px-10 top-0 justify-between z-12">
          <div id="title" className="font-poppins flex-1 text-homeexplohover font-md font-bold">EasyTicketing</div>
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
              <button className="font-poppins px-4 py-1 h-10 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-50">Create Events</button>
            </div>

          </div>
        </nav>

        {/* search bar component*/}

        <SearchForm />

        <div className="w-full pr-30 pl-30 items-center justify-center">

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
