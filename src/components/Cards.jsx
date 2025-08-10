import { useState, useCallback, useEffect } from "react";
import UseModal from "./UseModal";
import PaymentPage from "./payment-page";
import { 
  ChevronDown,
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Phone,
  ArrowLeft  

} from "lucide-react";

function Card({ name, date, location, price, image, description, organizers, tickets, contact, showBookButton }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [selectValue, setSelectValue] = useState("Ticket Type");
  
  // Set initial select value based on tickets prop
  useEffect(() => {
    if (!tickets || tickets.length === 0) {
      setSelectValue("");
    }
  }, [tickets]);
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
        onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
        className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 cursor-pointer hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
        tabIndex={0}
        role="button"
        aria-label={`View details for ${name}`}
        onClick={(e) => {
          // Only open modal if not clicking the Book Now button
          if (e.target.closest('button') === null) {
            setModalOpen(true);
          }
        }}
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
              className="font-poppins bg-homeexplore cursor-pointer text-gray-50 px-4 py-2 rounded-sm w-full hover:bg-homeexplohover transition-colors duration-300"
              aria-label={`Book ${name} now`}
              onClick={(e) => {
                e.stopPropagation(); 
                setOpenPayment(true);
                setModalOpen(false); 
              }}
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
          <div>
            <h2 className="font-montserrat font-bold text-[32px] ">{name}</h2>
            <p className="font-montserrat text-[18px]"><span className="font-bold">Date:</span> {date}</p>
            <p className="font-montserrat"><span className="font-bold">Location:</span> {location}</p>
            <p className="font-montserrat"><span className="font-bold">Price:</span> {price}</p>
            {organizers && (
              <p className="font-montserrat">
                <span className="font-bold">Organizers:</span>
                <span className="flex items-center gap-1 mt-1">
                  <Users size={16} className="text-homeexplore" />
                  {organizers}
                </span>
              </p>
            )}
            {contact && (
              <p className="font-montserrat text-[18px] font-[600] leading-[28px]">
                <span className="font-semibold">Contact:</span>
                <span className="flex items-center gap-1 mt-1">
                  <Phone size={16} className="text-homeexplore" />
                  {contact}
                </span>
              </p>
            )}
            {tickets && tickets.length > 0 && (
              <div className="mt-4">
                <p className="font-montserrat font-bold mb-2">Select Ticket Type:</p>
                <div className="relative">
                  <div 
                    className="inline-block border border-slate-300 outline-none cursor-pointer transition w-full rounded-md"
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-labelledby="ticket-type-label"
                  >
                    <div 
                      onClick={() => setIsOpen(!isOpen)} 
                      className="px-4 py-2 flex justify-between items-center hover:bg-gray-50"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setIsOpen(!isOpen);
                        }
                      }}
                      tabIndex={0}
                    >
                      <span>{ selectValue }</span>
                      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <ChevronDown size={20}/>
                      </div>
                    </div>
                    
                    {isOpen && (
                      <ul 
                        className="absolute z-10 w-full bg-white border border-slate-300 mt-1 rounded-md shadow-lg max-h-60 overflow-auto"
                        role="listbox"
                        aria-labelledby="ticket-type-label"
                      >
                        {tickets.map((ticket, index) => (
                          <li 
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-montserrat"
                            onClick={() => updateValue(ticket)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                updateValue(ticket);
                              }
                            }}
                            role="option"
                            aria-selected={selectValue === ticket}
                            tabIndex={0}
                          >
                            {ticket}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}

            <button 
              className="font-poppins bg-homeexplore hover:bg-homeexplohover cursor-pointer text-gray-50 mt-6 px-6 py-3 rounded-md w-full transition-colors duration-300 font-semibold"
              aria-label={`Book ${name} now`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                // Add booking logic here
                console.log(`Booking ${name} with ticket type: ${selectValue}`);
                setOpenPayment(true);
                setModalOpen(false);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </UseModal>

      <UseModal isOpen={openPayment} onClose={() => setOpenPayment(false)} className="w-[480px] h-[634] relative">
        <div className="absolute top-20 left-90">
          <p className="inline-flex gap-1 cursor-pointer font-montserrat font-[400] text-[14px] leading-[22px]">
            <span className="inline-flex items-center justify-center"><ArrowLeft size={18} /> </span>
            Back to Ticket Selection
          </p>
        </div>
        <PaymentPage name={name} />
      </UseModal>
    </>
  );
}

export default Card;