import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './button';
import { Input } from './input';
import { ChevronDown } from 'lucide-react';


export default function CreateEventForm() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState("Ticket Type");

    const { register, handleSubmit, formState: {errors}, reset  } = useForm();

    const tickets = [
         "General Admission" ,
         "VIP",
         "Student"
    ];

    const updateValue = (value) => {
            setSelectValue(value);
            setIsOpen(false);
    }

     // Set initial select value based on tickets prop
    //   useEffect(() => {
    //     if (!tickets || tickets.length === 0) {
    //       setSelectValue("");
    //     }
    //   }, [tickets]);
    // const [imageError, setImageError] = useState(false);
    

    const onSubmit = (data) => {

        console.log("event created successfully", data);
    }

  return (
    <>
        <div>
            <div>
                <span>icon</span>
                <span>Back to Events</span>
            </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <h4>Create Event</h4>
                </div>
                <div>
                    <span>Basic Info</span>
                    <div className='block border-1 border-[#cccccc] rounded-[8px] p-[32px] gap-[16px]'>
                        <div id='coverImage'>
                            <div>
                                <div><h4>upload Cover Image</h4></div>
                                <div>
                                    <Button>
                                        <span>icon</span>
                                        <span>Upload image</span>
                                    </Button>
                                    <Button>Remove</Button>
                                </div>
                                <div>
                                    <p>
                                        Click to browse, or drag and drop a file here, png*,jpeg* files under 10MB, 730 x 300px
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">
                                    Event Title*
                                    <Input type='text' />
                                </label>
                                <label htmlFor="">
                                    Event Category*

                                      {/* {tickets && tickets.length > 0 && ( */}
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
                                                <div
                                                className="absolute z-10 w-full bg-white border border-slate-300 mt-1 rounded-md shadow-lg max-h-60 overflow-auto"
                                                role="listbox"
                                                aria-labelledby="ticket-type-label"
                                                >
                                                {tickets.map((ticket, index) => (
                                                    <div 
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
                                                    </div>
                                                ))}
                                                </div>
                                            )}
                                            </div>
                                         </div>
                                         </div>
                                        {/* )} */}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <span>Date and Location</span>
                <div></div>
              </div>
                <div>
                   <span>Set Ticketing Price</span>
                  <div></div>
               </div>
            </div>
            <Button>Create Event</Button>
         </form>
        </div>
    </>
  )
}
