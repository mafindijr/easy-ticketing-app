import { useState } from "react";
import UseModal from "./UseModal";
import React from "react";

function Card({ name, date, location, price, image, showBookButton }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Ticket Type");

  // const handleSelcetOption = (e) => {
  //       e.preventDefault();
  //       setIsOpen(false)
  // }
        

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 cursor-pointer"
      >
        <img src={image} alt={name} className="w-full h-52 object-cover" />
        <div className="mb-4 p-4">
          <h2 className="font-poppins text-xl font-semibold mb-2">{name}</h2>
          <p className="font-montserrat">{date}</p>
          <p className="font-montserrat">{location}</p>
          <p className="font-montserrat">{price}</p>
        </div>
        {/* Only show Book Now button if showBookButton is true */}
        {showBookButton && (
          <div>
            <button className="font-poppins bg-homeexplore text-gray-50 ml-4 mb-4 px-4 py-1 rounded-sm">
              Book Now
            </button>
          </div>
        )}
      </div>

      <UseModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="">
          <div className="h-[300px] rounded-md overflow-hidden mb-1">
            <img src={image} alt={name} />
          </div>
          <div>
            <h2 className="font-montserrat font-bold text-[32px] ">{name}</h2>
            <p className="font-montserrat text-[18px]"><span className="font-bold">Date:</span> {date}</p>
            <p className="font-montserrat"><span className="font-bold">Location:</span> {location}</p>
            <p className="font-montserrat"><span className="font-bold">Price:</span> {price}</p>
            <p>
            <div className="inline-block border border-slate-300 outline-none cursor-pointer transition">
              <div onClick={() => setIsOpen(!isOpen)} className="leading-8">{ selectValue }</div>
              {isOpen && (
              <div>
                <ul className="flex flex-col divide-y">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              </div>
              )}
            </div>
            </p>
            <p className="font-montserrat"><span className="font-bold">Oganizers:</span> NECTAR Nation</p>
            {/* Show Book Now button in modal for top events */}
             
              <button className="font-poppins bg-homeexplore text-gray-50 mt-4 px-4 py-1 rounded-sm">
                Book Now
              </button>
            
          </div>
        </div>
      </UseModal>
    </>
  );
}

export default Card;


