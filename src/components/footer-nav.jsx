import React from 'react'
import {Facebook, Linkedin} from 'lucide-react'
import { BsTwitterX  } from "react-icons/bs";
import { Login } from "./auth/login";

export default function FooterNav() {

        const navLinks = [
        { name: "About", href: "#" },
        { name: "Terms & policies", href: "#" },
        { name: "Contact us", href: "#" },
        ];

  return (
    <>
        <div className=' bg-[#0D47A1] flex justify-between pb-[36px] pt-[19px] pr-[131px] pl-[131px] py-4'>

        <div className='flex items-center gap-4  relative'>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex gap-2 items-center text-white'>
            <span className='inline-flex items-center font-pacifico text-[28.57px] leading-[100%] font-[400]'>EasyTickets</span>
            <span className='inline-flex items-center'>
              <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4644 2.23804V4.61899M16.4644 9.38089V11.7618M16.4644 16.5238V18.9047M4.55966 2.23804H21.2263C21.8578 2.23804 22.4634 2.48889 22.9099 2.9354C23.3564 3.38192 23.6073 3.98752 23.6073 4.61899V8.19042C22.9758 8.19042 22.3702 8.44127 21.9237 8.88778C21.4772 9.3343 21.2263 9.9399 21.2263 10.5714C21.2263 11.2028 21.4772 11.8084 21.9237 12.255C22.3702 12.7015 22.9758 12.9523 23.6073 12.9523V16.5238C23.6073 17.1552 23.3564 17.7608 22.9099 18.2073C22.4634 18.6539 21.8578 18.9047 21.2263 18.9047H4.55966C3.9282 18.9047 3.32259 18.6539 2.87608 18.2073C2.42956 17.7608 2.17871 17.1552 2.17871 16.5238V12.9523C2.81018 12.9523 3.41578 12.7015 3.8623 12.255C4.30881 11.8084 4.55966 11.2028 4.55966 10.5714C4.55966 9.9399 4.30881 9.3343 3.8623 8.88778C3.41578 8.44127 2.81018 8.19042 2.17871 8.19042V4.61899C2.17871 3.98752 2.42956 3.38192 2.87608 2.9354C3.32259 2.48889 3.9282 2.23804 4.55966 2.23804Z" stroke="white" strokeWidth="2.67857" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
           </div>

            <div className='flex items-center gap-4 text-white font-bold'>
              <div><a href="#"><Linkedin className='h-[27px] w-[27px]' /></a></div>
              <div className='border-2 p-1 rounded-full'><a href="#"><Facebook className='h-[27px] w-[27px]' /></a></div>
              <div className='border-2p-2 text-xl rounded-full'><a href=""><BsTwitterX className='h-[27px] w-[27px]' /></a></div>
            </div>
          </div>
        </div>

        <div className='inline-flex items-start gap-8 text-white text-[14px] leading-[22px] font-montserrat font-[400]'>

         {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>

        <div className='text-white text-[16px] leading-[26px] text-center font-montserrat font-[400]'>
          &copy; 2025 EasyTicket. All right reserved.
        </div>
      </div>
    </>
  )
}
