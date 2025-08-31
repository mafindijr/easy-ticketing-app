import EmptyDashboadState from "../components/empty-dashboad";
import OrganizersDashboardEventsCards from "../components/events-cards";
import DashboardLayout from "../layout/dashboard-layout"
import { Ticket } from "lucide-react";

export default function Dashboard() {


  return (
    <div className="flex flex-col gap-8 mx-[130px] justify-center mt-20">
        <div>
          <h2 className="text-[32px] leading-[44px] font-montserrat font-bold ">Dashboard</h2>
        </div>
        <div className="grid grid-cols-2 gap-[24px] w-full">
          <div className="flex flex-col rounded-[8px] border-1 border-[#cccccc] p-[24px] gap-[19px]">
            <h4 className="flex items-center gap-[16px] font-montserrat font-[700] text-[20px] text-[#999999] leading-[30px]">
              <span><Ticket className="text-homeexplore font-bold" size={40}/></span>
              Total Tickets Sold
            </h4>
            <p className="text-[64px] font-montserrat font-bold leading-[100%]">0</p>
          </div>
          <div className="flex flex-col rounded-[8px] border-1 border-[#cccccc] p-[24px] gap-[19px]">
            <h4 className="flex items-center gap-[16px] font-montserrat font-[700] text-[20px] text-[#999999] leading-[30px]">
              <span>
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 2.00536e-07C37.0092 -0.000319158 37.9811 0.380813 38.7211 1.06699C39.4611 1.75318 39.9143 2.69369 39.99 3.7L40 4V24C40.0003 25.0092 39.6192 25.9811 38.933 26.7211C38.2468 27.4611 37.3063 27.9143 36.3 27.99L36 28H4C2.99085 28.0003 2.01887 27.6192 1.2789 26.933C0.538941 26.2468 0.0856868 25.3063 0.0100004 24.3L2.00536e-07 24V4C-0.000319158 2.99085 0.380813 2.01887 1.06699 1.2789C1.75318 0.538941 2.69369 0.0856868 3.7 0.0100004L4 2.00536e-07H36ZM30.006 4H9.994L10 4.25C10 5.0051 9.85127 5.75281 9.56231 6.45043C9.27334 7.14805 8.8498 7.78193 8.31586 8.31586C7.78193 8.8498 7.14805 9.27334 6.45043 9.56231C5.75281 9.85127 5.0051 10 4.25 10L4 9.994V18.006L4.25 18C5.77499 18 7.23753 18.6058 8.31586 19.6841C9.3942 20.7625 10 22.225 10 23.75L9.994 24H30.006L30 23.75C30 22.2835 30.5603 20.8725 31.5664 19.8055C32.5724 18.7385 33.9481 18.0962 35.412 18.01L35.876 18.002L36 18.006V9.994L35.75 10C34.2835 9.99999 32.8725 9.43966 31.8055 8.43364C30.7385 7.42762 30.0962 6.05194 30.01 4.588L30 4.124L30.006 4ZM35.75 22C35.4991 22 35.2511 22.054 35.0228 22.1583C34.7946 22.2625 34.5914 22.4147 34.4272 22.6044C34.2629 22.7941 34.1413 23.0169 34.0707 23.2577C34.0001 23.4985 33.9822 23.7516 34.018 24H36V22.018C35.9171 22.0068 35.8336 22.0008 35.75 22ZM4.25 22C4.16637 22.0008 4.08288 22.0068 4 22.018V24H5.982C6.01785 23.7516 5.99986 23.4985 5.92927 23.2577C5.85867 23.0169 5.73711 22.7941 5.57284 22.6044C5.40857 22.4147 5.20542 22.2625 4.97718 22.1583C4.74894 22.054 4.50094 22 4.25 22ZM20 6C22.1217 6 24.1566 6.84285 25.6569 8.34315C27.1571 9.84344 28 11.8783 28 14C28 16.1217 27.1571 18.1566 25.6569 19.6569C24.1566 21.1571 22.1217 22 20 22C17.8783 22 15.8434 21.1571 14.3431 19.6569C12.8429 18.1566 12 16.1217 12 14C12 11.8783 12.8429 9.84344 14.3431 8.34315C15.8434 6.84285 17.8783 6 20 6ZM20 10C18.9391 10 17.9217 10.4214 17.1716 11.1716C16.4214 11.9217 16 12.9391 16 14C16 15.0609 16.4214 16.0783 17.1716 16.8284C17.9217 17.5786 18.9391 18 20 18C21.0609 18 22.0783 17.5786 22.8284 16.8284C23.5786 16.0783 24 15.0609 24 14C24 12.9391 23.5786 11.9217 22.8284 11.1716C22.0783 10.4214 21.0609 10 20 10ZM5.982 4H4V5.982C4.24836 6.01785 4.50153 5.99986 4.74233 5.92927C4.98313 5.85867 5.20593 5.73711 5.39563 5.57284C5.58532 5.40857 5.73746 5.20542 5.84174 4.97718C5.94602 4.74894 5.99999 4.50094 6 4.25L5.996 4.124L5.982 4ZM36 4H34.018C33.9822 4.24836 34.0001 4.50153 34.0707 4.74233C34.1413 4.98313 34.2629 5.20593 34.4272 5.39563C34.5914 5.58532 34.7946 5.73746 35.0228 5.84174C35.2511 5.94602 35.4991 5.99999 35.75 6L35.876 5.996L36 5.98V4Z" fill="#1A73E8"/>
                    </svg>
              </span>
              Total Revenue
            </h4>
            <p className="text-[64px] font-montserrat font-bold leading-[100%]">
              0
            </p>
          </div>
        </div>
      <div>
          <div>
            <h3 className="text-[24px] leading-[34px] font-montserrat font-bold">Your Events</h3>
          </div>
          <div className="grid grid-cols-1 gap-[24px] py-[32px]">
            {/* <EmptyDashboadState /> */}
            <OrganizersDashboardEventsCards />
          </div>
      </div>
    </div>
  )
}
