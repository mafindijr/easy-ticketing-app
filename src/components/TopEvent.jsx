import Card from "./Cards";
import events from "../components/javascript/events";
import { NavigationIcon } from "./Navigation-icon";


function TopEvents() {
  const topEvents = events.filter((event) => event.type === "top");

  return (
    <div className="w-full pr-30 pl-30 my-8">
      <div>
          <div><h2 className="text-2xl font-bold mb-4">Top Events</h2></div>
          <div>
            <NavigationIcon />
          </div>
      </div>
      
      
      {/* {topEvents.map((event, idx) => (
          <Card key={idx} {...event} showBookButton={true} />
        ))} */}
    </div>
  );
}

export default TopEvents;