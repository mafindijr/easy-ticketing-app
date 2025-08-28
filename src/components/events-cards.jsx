import React from 'react'
import { 
    CalendarDays,
    Clock,
    MapPin,
    Ticket,
 } from 'lucide-react'

export default function OrganizersDashboardEventsCards() {
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
                  <p className='inline-flex gap-1 items-center'>
                    <span><CalendarDays className='w-[18px] h-[20px]' /></span>
                    <span>Sept 5, 2025</span>
                  </p>
                  <p className='inline-flex gap-1 items-center'>
                    <span><Clock className='w-[18px] h-[20px]' /></span>
                    <span>10:00 AM - 12:30 PM</span>
                  </p>
                </div>
                <div>
                  <p className='inline-flex gap-1 items-center'>
                    <span><MapPin className='w-[18px] h-[20px]' /></span>
                    <span>Oniline (Zoom)</span>
                  </p>
                </div>
                <div className='inline-flex gap-2'>
                  <p className='inline-flex gap-1 items-center'>
                    <span><Ticket className='w-[18px] h-[20px]' /></span>
                    <span>Paid Ticket</span>
                  </p>
                  <p className='inline-flex gap-1'>
                    <span>icon</span>
                    <span>#5000</span>
                  </p>
                </div>
                <div className='inline-flex gap-8 mt-4 text-[16px] fonts-montserrat font-[600] leading-[100%] text-homeexplore'>
                  <span className='cursor-pointer'>Edit</span>
                  <span className='cursor-pointer'>View</span>
                  <span>
                    <span className='cursor-pointer'>Downloard Attendees CSV</span>
                    <span className='cursor-pointer'>Downloard icon</span>
                  </span>
                </div>
              </div>
              </div>
              <div>
                <span>Upcoming</span>
              </div>
            </div>
    </>
  )
}
