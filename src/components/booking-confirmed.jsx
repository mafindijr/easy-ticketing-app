import React from 'react'

export default function BookingConfirmed() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <div>
            <span>icon</span>
        </div>
        <div>
            <h3 className='font-montserrat text-[24px] leading-[34px] font-[700] font=bold'>Booking Confirmed!</h3>
        </div>
        <div>
            <p className='font-montserrat text-[18px] leading-[28px] font-[400] '>You've succesfully booked a ticket for:</p>
        </div>
    
          <div className='flex flex-col border-1 border-[#cccccc] p-[24px] rounded-[8px] font-montserrat font-[400] text-[14px] leading-[22px]'>
           
            <div>
                <p>
                    <span className='font-[700]'>Event: </span>
                    Lagos Fashion Week 2025
                </p>
            </div>
            <div>
                <p>
                    <span>Date: </span>
                    Saturday, July 27- 6:00pm
                </p>
            </div>
            <div>
                <p>
                    <span>Location: </span>
                    Landmark Centre, Lagos
                </p>
            </div>
            <div>
                <p>
                    <span>Ticket Type: </span>
                    General Adnission
                </p>
            </div>
            <div>
                <p>
                    <span>Price: </span>
                    #20,000
                </p>
            </div>
            <div>
                <p>
                    <span>Ticket Code: </span>
                    ETK-1829384
                </p>
            </div>
            
          </div>
    
            <div className='flex flex-col gap-[8px] items-center justify-center text-center'>
    
                <Button type='submit' className='font-montserrat mt-2 text-[16px] font-bold bg-homeexplore rounded-[8px] w-[376px] py-[16px] px-[32px] text-white'>
                    Done
                </Button>
                <p className='font-montserrat font-[400] text-[18px] leading-[22px]'>View My Tickects</p>
            </div>
       </div>
  )
}
