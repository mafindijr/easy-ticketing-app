


export default function Card () {

    return (
        <div className="max-w-xs  border border-gray-700 rounded-xl shadow-md overflow-hidden bg-gray-800">
          <img
            src={events.thumb}
            alt="Grilled Chicken Salad"
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">{events.name}</h2>
            <p>
                {events.date}
            </p>
            <p className="text-gray-300">
              {events.location}
            </p>
            <p>
                {events.price}
            </p>
          </div>

          <div>
            <button>Book Now</button>
          </div>
        </div>
    );
}