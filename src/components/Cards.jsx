import { useState, useCallback } from "react";
import UseModal from "./UseModal";
import { ChevronDown, Calendar, MapPin, DollarSign, Users, Phone } from "lucide-react";

function Card({ name, date, location, price, image, organizers, tickets, contact, showBookButton }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Ticket Type");
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Memoized function to update dropdown value
  const updateValue = useCallback((value) => {
    setSelectValue(value);
    setIsOpen(false);
  }, []);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
        className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 cursor-pointer hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
        tabIndex={0}
        role="button"
        aria-label={`View details for ${name}`}
      >
        <div className="relative w-full h-52 overflow-hidden">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500 font-montserrat text-sm">Image unavailable</span>
            </div>
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
          )}
        </div>
        <div className="flex-grow p-4">
          <h2 className="font-poppins text-xl font-semibold mb-2 line-clamp-2">{name}</h2>
          <div className="space-y-1">
            <p className="font-montserrat text-sm flex items-center gap-1">
              <Calendar size={16} className="text-homeexplore" />
              <span>{date}</span>
            </p>
            <p className="font-montserrat text-sm flex items-center gap-1">
              <MapPin size={16} className="text-homeexplore" />
              <span>{location}</span>
            </p>
            <p className="font-montserrat text-sm flex items-center gap-1">
              <DollarSign size={16} className="text-homeexplore" />
              <span>{price}</span>
            </p>
          </div>
        </div>

        {showBookButton && (
          <div className="px-4 pb-4">
            <button 
              className="font-poppins bg-homeexplore text-gray-50 px-4 py-2 rounded-sm w-full hover:bg-homeexplohover transition-colors duration-300"
              aria-label={`Book ${name} now`}
            >
              Book Now
            </button>
          </div>
        )}
      </div>

      <UseModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="max-h-[80vh] overflow-y-auto">
          <div className="relative h-[300px] rounded-md overflow-hidden mb-4">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 font-montserrat">Image unavailable</span>
              </div>
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl">{name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-montserrat flex items-center gap-2">
                  <Calendar className="text-homeexplore" />
                  <span><span className="font-bold">Date:</span> {date}</span>
                </p>
                <p className="font-montserrat flex items-center gap-2">
                  <MapPin className="text-homeexplore" />
                  <span><span className="font-bold">Location:</span> {location}</span>
                </p>
                <p className="font-montserrat flex items-center gap-2">
                  <DollarSign className="text-homeexplore" />
                  <span><span className="font-bold">Price:</span> {price}</span>
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="font-montserrat flex items-center gap-2">
                  <Users className="text-homeexplore" />
                  <span><span className="font-bold">Organizers:</span> {organizers}</span>
                </p>
                <p className="font-montserrat flex items-center gap-2">
                  <Phone className="text-homeexplore" />
                  <span><span className="font-bold">Contact:</span> {contact}</span>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="ticket-type" className="block font-montserrat font-bold mb-2">Select Ticket Type</label>
              <div className="relative">
                <div 
                  id="ticket-type"
                  className="border border-slate-300 rounded-md outline-none cursor-pointer transition w-full"
                  role="combobox"
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  aria-labelledby="ticket-type-label"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsOpen(!isOpen);
                    }
                  }}
                >
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-2 flex justify-between items-center"
                  >
                    <span id="ticket-type-label">{selectValue}</span>
                    <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>

                  {isOpen && (
                    <ul 
                      className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-auto"
                      role="listbox"
                      aria-labelledby="ticket-type-label"
                    >
                      <li
                        className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
                        onClick={() => updateValue(tickets.type1)}
                        role="option"
                        aria-selected={selectValue === tickets.type1}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            updateValue(tickets.type1);
                          }
                        }}
                      >
                        {tickets.type1}
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
                        onClick={() => updateValue(tickets.type2)}
                        role="option"
                        aria-selected={selectValue === tickets.type2}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            updateValue(tickets.type2);
                          }
                        }}
                      >
                        {tickets.type2}
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
                        onClick={() => updateValue(tickets.type3)}
                        role="option"
                        aria-selected={selectValue === tickets.type3}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            updateValue(tickets.type3);
                          }
                        }}
                      >
                        {tickets.type3}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <button 
              className="font-poppins bg-homeexplore hover:bg-homeexplohover text-gray-50 mt-6 px-6 py-3 rounded-md w-full transition-colors duration-300 font-semibold"
              aria-label={`Book ${name} now`}
            >
              Book Now
            </button>
          </div>
        </div>
      </UseModal>
    </>
  );
}

export default Card;