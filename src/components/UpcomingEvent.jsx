import Card from './Cards';
import events from "../components/javascript/events";

function UpcomingEvents() {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");

  return (
    <div className="w-full pr-30 pl-30 my-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {upcomingEvents.map((event, idx) => (
          <Card key={idx} {...event} showBookButton={false} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;