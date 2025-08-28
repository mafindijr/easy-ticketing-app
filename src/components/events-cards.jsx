import React from 'react'

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
                <div>
                  <p>
                    <span>icon</span>
                    <span>Sept 5, 2025</span>
                  </p>
                  <p>
                    <span>icon</span>
                    <span>10:00 AM - 12:30 PM</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>icon</span>
                    <span>Oniline (Zoom)</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>icon</span>
                    <span>Paid Ticket</span>
                  </p>
                  <p>
                    <span>icon</span>
                    <span>#5000</span>
                  </p>
                </div>
                <div>
                  <span>Edit</span>
                  <span>View</span>
                  <span>
                    <span>Downloard Attendees CSV</span>
                    <span>Downloard icon</span>
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
