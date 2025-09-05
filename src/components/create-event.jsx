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
        // img.onload = () => {
        //     if (img.width !== 730 || img.height !== 300) {
        //         setCoverError('Image dimensions must be 730 x 300px.');
        //         setCoverImage(null);
        //     } else {
        //         setCoverImage(URL.createObjectURL(file));
        //     }
        // };
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
                    <h2>Create Event</h2>
                </div>
                <div>
                    <span>Basic Info</span>
                    <div className='w-[802px] h-[742px] flex flex-col border-1 border-[#cccccc] rounded-[8px] p-[32px] gap-[16px]'>
                        {/* Cover image preview holder */}
                        <div id="coverImage" className="w-[730px] h-[300px] relative mt-4 flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded">
                            <div className='w-[464px] h-[170px] rounded-[8px] flex flex-col items-center p-[16px] pt-[32px] pl-[32px] gap-[16px] absolute bg-white'>
                                <div>
                                    <h4 
                                    className='font-montserrat font-[600] text-[18px] text-center leading-[100%]'
                                    >Upload Cover Image</h4>
                                </div>

                            <div className="inline-flex gap-[10px]">


                                <label
                                    type="button"
                                     className="w-[172px] h-[40px] leading-[100%] gap-[10px] bg-homeexplore text-[16px] font-montserrat font-semibold rounded-[8px] px-[8px] py-[12px] gap-2 cursor-pointer inline-flex items-center text-white"
                                     style={{boxShadow: " 0px 4px 6px rgba(2, 2, 2, 0.40)"}}
                                    // onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    <svg className="ml-2 mb-1 font-bold" width="20" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5L5.41 6.41L8 3.83V14H10V3.83L12.58 6.41L14 5L9 0M2 18V10H0V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V10H16V18H2Z" fill="white"/>
                                    </svg>

                                    <span className='w-[116px] h-[20px]'>Upload image</span>
                                    <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    className='hidden'
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                />
                                </label>

                                 <Button 
                                 type="button"
                                 className="w-[92px] h-[40px] leading-[100%] cursor-pointer text-[16px] text-[#000000] font-montserrat font-semibold rounded-[8px] px-[8px] py-[12px]"
                                 style={{boxShadow: " 0px 4px 6px rgba(2, 2, 2, 0.25)"}}
                                 onClick={handleRemoveImage}>Remove</Button>
                            </div>

                            <div>
                                <p className='text-[14px] text-[#999999] text-center font-montserrat font-[400] leading-[22px]'>
                                    Click to browse, or drag and drop a file here, png*,jpeg* files under 10MB, 730 x 300px
                                </p>
                            </div>
                        </div>

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
                        
                            <div className='grid grid-cols-2 gap-8'>
                                <label>
                                    Event Title*
                                    <Input 
                                    type='text'
                                    placeholder='Event Title' 
                                    />
                                </label>
                                <label>
                                    Event Category*

                                      {/* {tickets && tickets.length > 0 && ( */}
                                        <div className="mt-4 text-[#6B7280] text-base font-montserrat 
                                         rounded-[4px] bg-[#ebebeb] focus:ring-[#93abdb]">
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
