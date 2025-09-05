import { useRef, useEffect, useState, useCallback } from "react";
import Card from "./Cards";
import events from "../components/javascript/events";
import NavigationIcon from "./Navigation-icon";

function TopEvents() {
  const [topEvents, setTopEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  // Load events with error handling
  useEffect(() => {
    try {
      const filteredEvents = events.filter(event => event.type === "top");
      setTopEvents(filteredEvents);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to load events");
      setIsLoading(false);
    }
  }, []);

  // Memoized scroll function to prevent unnecessary re-renders
  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 400, behavior: "smooth" });
    }
  }, []);

  // Handle keyboard navigation for accessibility
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") scroll(-1);
    if (e.key === "ArrowRight") scroll(1);
  }, [scroll]);

  return (
    <section 
      className="w-full pl-[129px] pr-[129px] px-4 sm:px-6 md:px-8 my-8" 
      aria-labelledby="top-events-heading"
    >
      <div className="flex justify-between items-center">
        <h2 
          id="top-events-heading" 
          className="font-poppins text-xl sm:text-2xl font-bold mb-4"
        >
          Top Events
        </h2>
        {topEvents.length > 0 && (
          <NavigationIcon 
            onLeft={() => scroll(-1)} 
            onRight={() => scroll(1)} 
          />
        )}
      </div>

      {isLoading && (
        <div className="flex justify-center py-8">
          <p className="font-montserrat">Loading events...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center py-8">
          <p className="font-montserrat text-red-500">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div
          ref={scrollRef}
          className="flex gap-4 py-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
          tabIndex={0}
          role="region"
          aria-label="Scrollable top events"
          onKeyDown={handleKeyDown}
        >
          {topEvents.length === 0 ? (
            <p className="font-montserrat py-4">No top events available at the moment.</p>
          ) : (
            topEvents.map((event) => (
              <div
                key={event.id || event.name}
                className="min-w-[250px] max-w-[250px] flex-shrink-0 scroll-snap-align-start"
              >
                <Card {...event} showBookButton={false} />
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default TopEvents;