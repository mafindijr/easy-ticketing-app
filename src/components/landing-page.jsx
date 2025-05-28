

export default function LandingPage() {
  return (
    <header className="bg-[url(./public/easy-image.jpg)] h-dvh bg-no-repeat bg-center overflow-scroll flex justify-center items-center relative object-contain object-bottom">

        <nav className="bg-gray-100 fixed left-0 right-0 top-0 flex px-2 py-2 items-center px-8 top-0 justify-between ">
            <div id="title" className="flex-1 text-homeexplohover font-bold">Easy Ticketing</div>
            <div id='logi-sign-box' className="flex gap-2 items-center">
              <div className="font-sm font-bold">
                <p>
                 <a href="#">Log in</a>
                  |
                 <a href="#">Sign up</a>
                 </p>
              </div>

              <div>
              <button className="px-4 py-1 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-100">Create Events</button>
              </div>

            </div>
        </nav>

         <div className="w-full inline-flex items-center justify-center absolute top-12 bg-gray-100 px-8 ">
      
          <input type="search" className="flex-1 bg-gray-300 outline-1 outline-gray-100 rounded-sm mb-2 mt-2 py-2 px-4 font-sm inline-flex "  name="search" placeholder="Search for concerts, tech meetup or more" />
          
          <button className="bg-gray-300 border-1 border-gray-100 cursor-pointer w-20 px-4 py-2 mt-2 mb-2">Lagos</button>
          <button className="bg-gray-300 border-1 border-gray-100 cursor-pointer w-20 px-4 py-2 mt-2 mb-2">Paid</button>
          
          </div>

        <div className="bg-gray-800 text-white w-120 px-8 py-10">

            <h1 className="font-bold">Discover. Book. Attend <span className="text-addeventbtn font-bold">Seamlessy</span><br />

            Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</h1>

            <button>Explore Events</button>
            <button className="px-4 py-1 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-100">Host an Event</button>
        </div>
    </header>
  )
}
