


export default function LandingPage() {
  return (
    <header className="relative bg-[url(/easy-image.jpg)] h-dvh bg-no-repeat bg-center overflow-scroll flex justify-center items-center object-contain object-bottom">
      {/* Dark blue transparent overlay */}
      <div className="absolute inset-0 bg-[rgba(41,62,112,0.7)] pointer-events-none z-0"></div>

      <nav className="bg-gray-100 fixed left-0 right-0 top-0 flex px-2 py-2 items-center px-8 top-0 justify-between z-10">
            <div id="title" className="flex-1 text-homeexplohover font-bold">Easy Ticketing</div>
            <div id='logi-sign-box' className="flex gap-2 items-center">
              <div className="font-sm font-bold">
                <p>
                 <a href="#" className="p-1 font-sm">Log in</a>
                  |
                 <a href="#" className="p-1 font-sm">Sign up</a>
                 </p>
              </div>

              <div>
              <button className="px-4 py-1 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-100">Create Events</button>
              </div>

            </div>
        </nav>

         <div className="right-0 left-0 inline-flex  absolute top-12 bg-gray-100 px-8 z-10">
      
          <input type="search" className="flex-1 bg-gray-200 border-none rounded-sm mb-2 mt-2 py-2 px-4 font-sm inline-flex "  name="search" placeholder="Search for concerts, tech meetup or more" />
          
          <button className="bg-gray-200 border-1 border-gray-100 cursor-pointer w-20 px-4 py-2 mt-2 mb-2">Lagos</button>
          <button className="bg-gray-200 border-1 border-gray-100 cursor-pointer w-20 px-4 py-2 mt-2 mb-2">Paid</button>
          
          </div>

        <div
        id="content"
        className="relative z-10 bg-[rgba(15,23,42,0.7)] text-gray-100 w-120 px-8 pt-10 pb-6 rounded-md shadow-lg"
      >

            <h1 className="font-bold px-4">Discover. Book. Attend <span className="text-addeventbtn font-bold">Seamlessy</span><br />

            Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</h1>

            <button className="px-4  m-2 mt-4 py-1 rounded-sm text-base font-semibold cursor-pointer  bg-homeexplore hover:bg-homeexplohover text-gray-100">Explore Events</button>
            <button className="px-4 m-2 py-1 rounded-sm text-base font-semibold cursor-pointer  border-2 border-gray-100 hover:bg-gray-100 hover:text-homeexplohover hover:border-homeexplohover text-gray-100">Host an Event</button>
        </div>
    </header>
  )
}
