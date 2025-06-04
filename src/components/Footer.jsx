import {Facebook, Linkedin, Twitter} from 'lucide-react'

export default function Footer() {
  return (
    <>
    <div className='bg-[#eeeeee] flex justify-center items-center h-[400px] py-8'>
      <div className='flex justify-center items-center w-[869px] h-[248px]'>

        <div className='h-[248px] w-[380px] flex flex-col gap-4'>
          <div>   
              <h1 className='text-4xl font-bold'>Host Your Next </h1>
              <h1 className="text-4xl font-bold ">Big Event!</h1>
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
          <a href="#">About EasyTicketing</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>

        <div className='text-gray-50'>
          @ 2025 EasyTicket. All right reserved
        </div>

        <div className='flex items-center justify-center gap-2 text-gray-50'>
          <a href="#" className=''>Follow us</a> 
          <a href="#"><Linkedin size={24} className='text-gray-50' /></a>
          <a href="#"><Facebook size={24} className='text-gray-50' /></a>
          <a href=""><Twitter size={24} className='text-gray-50' /></a>
        </div>
      </div>

    </>
  )
}
