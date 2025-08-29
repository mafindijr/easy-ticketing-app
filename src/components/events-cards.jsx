import React from 'react'
import { 
    CalendarDays,
    Clock,
    MapPin,
    Ticket,
    Banknote,
    Download
 } from 'lucide-react'

export default function OrganizersDashboardEventsCards() {

            const eventCards = [
                {},
            ]

  return (
    <>
        <div className="inline-flex justify-between border-1 border-[#cccccc] rounded-[8px] gap-[24px] p-[32px]">
              <div className="inline-flex gap-4">
              <div className="w-[280px] h-[210px] roundeed-[14.80px] overflow-hidden">
                <img src="./tech.jpg" alt="event-image" className="rounded-[14.80px] object-cover" />
              </div>
              <div className="flex flex-col gap-2 text-[20px] font-montserrat font-[500] leading-full">
                <div><h4 className="text-[20px] leading-[30px] font-bold font-montserrat mb-2">Tech for Beginners - Online Bootcamp</h4></div>
                <div className='inline-flex gap-2'>
                  <p className='inline-flex gap-2 items-center'>
                    <span><CalendarDays className='w-[18px] h-[20px]' /></span>
                    <span>Sept 5, 2025</span>
                  </p>
                  <p className='inline-flex gap-2 items-center'>
                    <span><Clock className='w-[18px] h-[20px]' /></span>
                    <span>10:00 AM - 12:30 PM</span>
                  </p>
                </div>
                <div>
                  <p className='inline-flex gap-2 items-center'>
                    <span><MapPin className='w-[18px] h-[20px]' /></span>
                    <span>Oniline (Zoom)</span>
                  </p>
                </div>
                <div className='inline-flex gap-2'>
                  <p className='inline-flex gap-2 items-center'>
                    <span><Ticket className='w-[18px] h-[20px]' /></span>
                    <span>Paid Ticket</span>
                  </p>
                  <p className='inline-flex gap-2 items-center'>
                    <span><Banknote className='w-[18px] h-[20px]' /></span>
                    <span>#5000</span>
                  </p>
                </div>
                <div className='inline-flex gap-8 mt-4 text-[16px] fonts-montserrat font-[600] leading-[100%] text-homeexplore items-center'>
                  <span className='cursor-pointer'>Edit</span>
                  <span className='cursor-pointer'>View</span>
                  <span className='inline-flex gap-1 items-center cursor-pointer'>
                    <span>Downloard Attendees CSV</span>
                    <span><Download className='text-black w-[18px] h-[20px] ' /></span>
                  </span>
                </div>
              </div>
              </div>
              <div className="font-montserrat font-[500] text-[14px] leading-[100%]">
                <span className='w-[92px] h-[25px] rounded-[32px] border-1 border-[#007b8a] bg-[#e0f7fa] text-[#007b8a] py-[4px] px-[8px]'>Upcoming</span>
              </div>
            </div>
    </>
  )
}
