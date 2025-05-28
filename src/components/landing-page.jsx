

export default function LandingPage() {
  return (
    <header className="bg-[url(./public/easy-image.jpg)] w-dvw h-dvh bg-no-repeat bg-center bg-cover">

        <nav className="bg-gray-100 flex px-4 top-0 justify-between">
            <div id="title" className="">Easy Ticketing</div>
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

        <div className="">

            <h1>Discover. Book. Attend <span>Seamlessy</span></h1>

            <p>Find and book tickets for amazing local & vitual events with ease. No hassle. Just fun.</p>

            <button>Explore Events</button>
            <button>Host an Event</button>
        </div>
    </header>
  )
}
