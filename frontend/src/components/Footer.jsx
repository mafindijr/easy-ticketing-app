import { Login } from "./auth/login";
import FooterNav from './footer-nav';

export default function Footer() {




  return (
    <section>
    <div className='bg-[#eeeeee] flex justify-center items-center h-[400px] py-8'>
      <div className='flex justify-center items-center w-[869px] h-[248px]'>

        <div className='h-[248px] w-[380px] flex flex-col gap-4'>
          <div>   
              <h1 className='font-poppins text-5xl font-bold'>Host Your Next </h1>
              <h1 className="font-poppins text-5xl font-bold ">Big Event!</h1>
          </div>
          <div className='pt-4'>
             <button className='font-montserrat px-4 py-1 h-10 rounded-sm text-base font-semibold cursor-pointer  bg-addeventbtn text-gray-50'>Create Event Now</button>
          </div>
        </div>

        <div className="rounded-md overflow-hidden w-[380px] h-[248px]">
          <img src="./easyT-footer.jpg" alt="temporary"/>
        </div>

      </div>


    </div>

      <FooterNav />

    </section>
  )
}
