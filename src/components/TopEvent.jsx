// import Slider from "react-slick";
import Card from "./Cards";
import events from "../components/javascript/events";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function TopEvents() {
  const topEvents = events.filter((event) => event.type === "top");

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//   };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Top Events</h2>
      {/* <Slider {...settings}> */}
        {topEvents.map((event, idx) => (
          <Card key={idx} {...event} showBookButton={true} />
        ))}
      {/* </Slider> */}
    </div>
  );
}

export default TopEvents;