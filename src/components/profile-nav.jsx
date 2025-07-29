import React from 'react'

export default function ProfileNav() {
  return (
    <div>
          <header className="flex justify-between items-center h-18 px-30 font-montserrat font-bold fixed top-0 left-0 right-0 z-12">
        <div className="flex-1">
        <a href="#">Home</a>
        </div>
        <div>
          <ul className="flex gap-12 ">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Organizer Dashbord</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}
