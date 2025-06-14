import { useState } from "react";

import UseModal from "./UseModal";

function Card({ name, date, location, price, image, showBookButton }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 cursor-pointer"
      >
        <img src={image} alt={name} className="w-full h-52 object-cover" />
        <div className="mb-4 p-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p>{date}</p>
          <p>{location}</p>
          <p>{price}</p>
        </div>
        {/* Only show Book Now button if showBookButton is true */}
        {showBookButton && (
          <div>
            <button className="bg-homeexplore text-gray-50 ml-4 mb-4 px-4 py-1 rounded-sm">
              Book Now
            </button>
          </div>
        )}
      </div>

      <UseModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="pt-4 pr-2">
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <p>{price}</p>
            {/* Show Book Now button in modal for top events */}
             
              <button className="bg-homeexplore text-gray-50 mt-4 px-4 py-1 rounded-sm">
                Book Now
              </button>
            
          </div>
        </div>
      </UseModal>
    </>
  );
}

export default Card;


