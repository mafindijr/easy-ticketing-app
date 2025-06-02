import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-300 block'>
      <div className='flex gap-4 justify-center items-center '>

        <div>
          <h1 className=''>Host Your Next Event!</h1>
          <button>Create Event Now</button>
        </div>

        <div>
          <img src="./easy-image.jpg" alt="temporary" />
        </div>

      </div>

      <div>
        <div>
          About easy Ticketing
          contact us
          privacy policy
          terms of use
        </div>
        <div>
          @ 2025 EasyTicket. All right reserved
        </div>
        <div>
          follow us 
          linkin
          facebook
          x
        </div>
      </div>

    </div>
  )
}
