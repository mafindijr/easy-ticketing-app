import {Facebook, Linkedin} from 'lucide-react'
import { BsTwitterX  } from "react-icons/bs";


export default function Footer() {

  const navLinks = [
  { name: "About EasyTicketing", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
];




  return (
    <>
    <div className='bg-[#eeeeee] flex justify-center items-center h-[400px] py-8'>
      <div className='flex justify-center items-center w-[869px] h-[248px]'>

        <div className='h-[248px] w-[380px] flex flex-col gap-4'>
          <div>   
              <h1 className='text-5xl font-bold'>Host Your Next </h1>
              <h1 className="text-5xl font-bold ">Big Event!</h1>
          </div>
          <div>
             <button className='px-4 py-1 h-10 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-50'>Create Event Now</button>
          </div>
        </div>

        <div className="rounded-md overflow-hidden w-[380px] h-[248px]">
          <img src="./easyT-footer.jpg" alt="temporary"/>
        </div>

      </div>


    </div>

      <div className='bg-[#0D47A1] flex justify-between pr-30 pl-30 py-4'>

        <div className='flex flex-col items-start text-gray-50'>

         {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>

        <div className='text-gray-50'>
          @ 2025 EasyTicket. All right reserved
        </div>

        <div className='flex items-center gap-4 text-gray-50 relative'>
          <div className='flex flex-col items-start'>
            <span className='mb-3'>Follow Us</span>
            <div className='flex items-center gap-4'>
              <div className='border-2 border-solid-gray-50 p-1 rounded-full'><a href="#"><Linkedin size={24} /></a></div>
              <div className='border-2 border-solid-gray-50 p-1 rounded-full'><a href="#"><Facebook size={24} /></a></div>
              <div className='border-2 border-solid-gray-50 p-2 text-xl rounded-full'><a href=""><BsTwitterX /></a></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
