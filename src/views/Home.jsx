// import Card from "../components/Cards";
import Categories from '../components/categories';
import Layout from '../layout/layout';
import TopEvents from "../components/TopEvent";
import UpcomingEvents from "../components/UpcomingEvent";



export default function Home() {



  return (
    
      <Layout>

        <h1 className='font-poppins text-2xl font-bold my-4 ml-30'>Explore top categories</h1>

        <Categories />

        
          <TopEvents />
          <UpcomingEvents />

          {/* <h1 className='ml-30'>Top Events</h1>
        <div className='grid grid-cols-4 gap-4 w-full px-30'>
          <Card />c
          <Card />
          <Card />
          <Card />
        </div> */}

        <div className='flex justify-center align-middle p-4'>
          <button className='border border-gray-800 font-montserrat w-[380px] h-[60px] text-[14px] leading-[24px] rounded-sm cursor-pointer'>See More</button>
        </div>
                
      </Layout>
  )
}







