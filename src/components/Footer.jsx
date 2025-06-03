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

      <div className='bg-homeexplohover flex justify-between pr-30 pl-30 mt-4'>

        <div className='flex flex-col items-start'>
          <a href="#">About EasyTicketing</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>

        <div>
          @ 2025 EasyTicket. All right reserved
        </div>

        <div className='flex flex-col items-start'>
          <a href="#">follow us</a> 
          <a href="#">linkin</a>
          <a href="#">facebook</a>
          <a href="">x</a>
        </div>
      </div>

    </div>
  )
}
