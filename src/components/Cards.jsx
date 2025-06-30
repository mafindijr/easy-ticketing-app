import { useState } from "react";
import UseModal from "./UseModal";
import { ChevronDown } from "lucide-react"

function Card({ name, date, location, price, image, oganizers, tickets, contact, showBookButton }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Ticket Type");

  const updateValue = (value) => {
        setSelectValue(value);
        setIsOpen(false);
  }
        

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
            <div className="inline-block border border-slate-300 outline-none cursor-pointer transition w-70">
              <div onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 flex justify-between items-center">
                <span>{ selectValue }</span>
                <div className={isOpen? 'rotate-180 transition' : 'rotate-0'}>
                  {/* rotate icon here arrowdown */}
                  <ChevronDown size={30}/>
                
                </div>
                </div>
              {isOpen && (
              <div>
                <ul className="flex flex-col divide-y border-t border-slate-300">
                  <li className="px-2 py-1 hover:bg-slate-100 border-slate-300" onClick={() => updateValue("VIP")}>{tickets.type1}</li>
                  <li className="px-2 py-1 hover:bg-slate-100 border-slate-300" onClick={() => updateValue("Regular")}>{tickets.type2}</li>
                  <li className="px-2 py-1 hover:bg-slate-100 border-slate-300" onClick={() => updateValue("Children")}>{tickets.type3}</li>
                </ul>
              </div>
              )}
            </div>
            </p>
            <p className="font-montserrat"><span className="font-bold">Oganizers:</span> {oganizers}</p>
            <p className="font-montserrat"><span className="font-bold">Contact:</span> {contact}</p>
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


