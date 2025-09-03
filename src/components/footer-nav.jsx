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
    <div>
        <div className=' bg-[#0D47A1] flex justify-between pr-[131px] pl-[131px] py-4'>

        <div className='flex items-center gap-4  relative'>
          <div className='flex flex-col items-start'>
            <span className='mb-3'>Follow Us</span>
            <div className='flex items-center gap-4'>
              <div className='border-2 border-solid-gray-50 p-1 rounded-full'><a href="#"><Linkedin size={24} /></a></div>
              <div className='border-2 border-solid-gray-50 p-1 rounded-full'><a href="#"><Facebook size={24} /></a></div>
              <div className='border-2 border-solid-gray-50 p-2 text-xl rounded-full'><a href=""><BsTwitterX /></a></div>
            </div>
          </div>
        </div>

        <div className='inline-flex items-start gap-8 text-white text-[14px] leading-[22px] font-montserrat font-[400]'>

         {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>

        <div className='text-gray-50'>
          &copy; 2025 EasyTicket. All right reserved
        </div>
      </div>
    </div>
  )
}
