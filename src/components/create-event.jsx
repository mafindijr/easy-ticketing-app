import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './button';
import { Input } from './input';
import { ChevronDown } from 'lucide-react';


export default function CreateEventForm() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState("Ticket Type");
    const [coverImage, setCoverImage] = useState(null);
    const [coverError, setCoverError] = useState('');
    const fileInputRef = useRef();

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

    const handleImageUpload = (e) => {
        setCoverError('');
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!['image/png', 'image/jpeg'].includes(file.type)) {
            setCoverError('Only PNG and JPEG files are allowed.');
            setCoverImage(null);
            return;
        }
        // Validate file size (<10MB)
        if (file.size > 10 * 1024 * 1024) {
            setCoverError('File size must be less than 10MB.');
            setCoverImage(null);
            return;
        }
        // Validate dimensions
        const img = new window.Image();
        img.onload = () => {
            if (img.width !== 730 || img.height !== 300) {
                setCoverError('Image dimensions must be 730 x 300px.');
                setCoverImage(null);
            } else {
                setCoverImage(URL.createObjectURL(file));
            }
        };
        img.onerror = () => {
            setCoverError('Invalid image file.');
            setCoverImage(null);
        };
        img.src = URL.createObjectURL(file);
    };

    const handleRemoveImage = () => {
        setCoverImage(null);
        setCoverError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const onSubmit = (data) => {
        if (!coverImage) {
            setCoverError('Cover image is required.');
            return;
        }

        console.log("event created successfully", { ...data, coverImage });
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
                        {/* Upload button above preview */}
                        <div>
                            <Button
                                type="button"
                                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                            >
                                <span>icon</span>
                                <span>Upload image</span>
                            </Button>
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                            />
                            <Button type="button" onClick={handleRemoveImage}>Remove</Button>
                        </div>
                        {/* Cover image preview holder */}
                        <div id="coverImage" className="mt-4 flex items-center justify-center w-full h-[180px] bg-gray-100 border border-dashed border-gray-300 rounded">
                            {coverImage ? (
                                <img
                                    src={coverImage}
                                    alt="Cover Preview"
                                    className="object-cover w-[730px] h-[300px] rounded"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            ) : (
                                <span className="text-gray-400">No cover image selected</span>
                            )}
                        </div>
                        {coverError && (
                            <div className="text-red-500 text-sm mt-2">{coverError}</div>
                        )}
                        <div>
                            <p>
                                Click to browse, or drag and drop a file here, png*,jpeg* files under 10MB, 730 x 300px
                            </p>
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
            <Button>Create Event</Button>
         </form>
        </div>
    </>
  )
}
