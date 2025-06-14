import Card from './Cards';
import events from "../components/javascript/events";
import { IoLocationSharp } from "react-icons/io5";

function UpcomingEvents() {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");

  return (
    <div className="w-full pr-30 pl-30 my-8">
      <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <a href="#"> <IoLocationSharp size={18} /> Lagos </a>
      </div>

      <div className='grid grid-cols-4 gap-4 py-4'>
          {upcomingEvents.map((event, idx) => (
            <Card key={idx} {...event} showBookButton={true} />
          ))} 
      </div>
      
    </div>
  );
}

export default UpcomingEvents;