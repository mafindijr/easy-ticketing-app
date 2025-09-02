import Card from './Cards';
import events from "../components/javascript/events";
import { IoLocationSharp } from "react-icons/io5";

function UpcomingEvents() {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");

  return (
    <section className="w-full pr-[129px] pl-[129px] my-8">
      <div className='inline-flex items-center gap-4'>
          <h2 className="font-poppins text-2xl font-bold mb-4">Upcoming Events</h2>
          <a href="#" className='font-montserrat text-homeexplohover inline-flex gap-1 items-center border-b-2 border-homeexplohover font-bold'> <IoLocationSharp size={15} /> Lagos </a>
      </div>

      <div className='grid grid-cols-4 gap-4 py-4'>
          {upcomingEvents.map((event, idx) => (
            <Card key={idx} {...event} showBookButton={true} />
          ))} 
      </div>
      
    </section>
  );
}

export default UpcomingEvents;