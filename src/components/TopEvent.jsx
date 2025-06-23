import Card from "./Cards";
import events from "../components/javascript/events";
import NavigationIcon from "./Navigation-icon";
import { useRef } from "react";

function TopEvents() {
  const topEvents = events.filter((event) => event.type === "top");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full pr-30 pl-30 my-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-poppins text-2xl font-bold mb-4">Top Events</h2>
        </div>
        <div>
          <NavigationIcon onLeft={scrollLeft} onRight={scrollRight} />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 py-4 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {topEvents.map((event, idx) => (
          <div
            key={idx}
            className="min-w-[250px] max-w-[250px] flex-shrink-0 scroll-snap-align-start"
          >
            <Card {...event} showBookButton={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopEvents;