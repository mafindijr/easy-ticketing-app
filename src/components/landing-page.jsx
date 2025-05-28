

export default function LandingPage() {
  return (
    <header className="bg-[url(./public/easy-image.jpg)] bg-cover h-dvh bg-no-repeat bg-center overflow-scroll">

        <nav className="bg-gray-100 flex justify-items-center items-center px-4 top-0 justify-between h-14 ">
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
              <button className="w-40 h-8 rounded-sm text-base font-bold bg-addeventbtn text-gray-100">Create Events</button>
              </div>
            </div>
        </nav>

         <div id='searc-bar'>
          <div>
          <input type="search" name="search" placeholder="Search for concerts, tech meetup or more" />
          </div>

          <div>
          <button>Lagos</button>
          <button>Paid</button>
          </div>
          </div>

        <div className="bg-gray-800 opacity-25 text-white w-2xl">

            <h1>Discover. Book. Attend <span className="text-addeventbtn">Seamlessy</span></h1>

            <p>Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</p>

            <button>Explore Events</button>
            <button>Host an Event</button>
        </div>
    </header>
  )
}
