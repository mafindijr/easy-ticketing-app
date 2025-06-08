import Card from './Cards';
import events from "../components/javascript/events";

function UpcomingEvents() {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");

  return (
    <div className="w-full pr-30 pl-30 my-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {upcomingEvents.map((event, idx) => (
          <Card key={idx} {...event} showBookButton={false} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;