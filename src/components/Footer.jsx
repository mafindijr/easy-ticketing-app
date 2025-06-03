import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-300 block'>
      <div className='flex gap-4 justify-center items-center '>

        <div>
          <h1 className='text-4xl mb-5'>Host Your Next Event!</h1>
          <button className='px-4 py-1 mt-2 h-10 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-50'>Create Event Now</button>
        </div>

        <div>
          <img src="./easy-image.jpg" alt="temporary" className='w-80 mt-20' />
        </div>

      </div>

      <div className='bg-homeexplohover flex justify-between items-center p-8 mt-4'>

        <div className='inline-block'>
          <span><a href="#">About EasyTicketing</a></span>
          <span><a href="#">Contact Us</a></span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>

        <div id='nav' className="flex flex-col items-center">
          <span>@ 2025 EasyTicket. All right reserved</span>
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
