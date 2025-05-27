

export default function LandingPage() {
  return (
    <div>

        <header className="bg-gray-100 flex px-4 top-0 justify-between">
            <div id="title" className="">Easy Ticketing</div>
            <div id='searc-bar'><input type="search" name="search" placeholder="Search for concerts, tech meetup or more" /></div>
            <div id='logi-sign-box' className="flex justify-between ">
              <div>
                <p>
                 <a href="#">Log in</a>
                  |
                 <a href="#">Sign up</a>
                 </p>
              </div>
              <div>
              <button>Create Events</button>
              </div>
            </div>
        </header>

        <div className="">

            <h1>Discover. Book. Attend <span>Seamlessy</span></h1>

            <p>Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</p>

            <button>Explore Events</button>
            <button>Host an Event</button>
        </div>
    </div>
  )
}
