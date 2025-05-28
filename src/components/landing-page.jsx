

export default function LandingPage() {
  return (
    <header className="bg-[url(./public/easy-image.jpg)] h-dvh bg-no-repeat bg-center overflow-scroll flex justify-center items-center relative object-contain object-bottom">

        <nav className="bg-gray-100 fixed left-0 right-0 top-0 flex justify-items-center items-center px-8 top-0 justify-between  ">
            <div id="title" className="flex-1 text-homeexplohover font-bold">Easy Ticketing</div>
            <div id='logi-sign-box' className="flex justify-between ">
              <div>
                <p>
                 <a href="#">Log in</a>
                  |
                 <a href="#">Sign up</a>
                 </p>
              </div>

              <div>
              <button className="w-30 h-8 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-100">Create Events</button>
              </div>

            </div>
        </nav>

         <div className="w-full inline-flex items-center justify-center absolute top-14 bg-gray-100 px-4 ">
      
          <input type="search" className="flex-1 bg-gray-300 outline-1 outline-gray-100 rounded-sm mb-2 mt-2 py-2 px-4 font-sm inline-flex "  name="search" placeholder="Search for concerts, tech meetup or more" />
          
          <button className="bg-gray-300 border-1 border-gray-100 w-20 px-4 py-2 mt-2 mb-2">Lagos</button>
          <button className="bg-gray-300 border-1 border-gray-100 w-20 px-4 py-2 mt-2 mb-2">Paid</button>
          
          </div>

        <div className="bg-gray-800 opacity-40 text-white w-2xl">

            <h1 className="font-bold">Discover. Book. Attend <span className="text-addeventbtn font-bold">Seamlessy</span></h1>

            <h2 className="font-bold">Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</h2>

            <button>Explore Events</button>
            <button>Host an Event</button>
        </div>
    </header>
  )
}
