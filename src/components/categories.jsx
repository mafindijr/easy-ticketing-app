import React from 'react'
import { MicVocal, Lectern } from 'lucide-react'
import { FaRegHandshake } from "react-icons/fa6";
import { TbBallFootball } from "react-icons/tb";
import { BiSolidPalette } from "react-icons/bi";
import { PiHandsPrayingThin, PiFlowerLotusThin, PiMaskSad } from "react-icons/pi";



export default function Categories() {

        const eventsCategory = [
            {
                id: 1,
                svgIcon: <MicVocal size={32} />,
                title: 'Music & Concerts'
            },
            {
                id: 2,
                svgIcon: <PiMaskSad size={32} />,
                title: 'Cultural & Traditional Festival'
            },
            {
                id: 3,
                svgIcon: <Lectern size={32} />,
                title: 'Corporate & Professional Events'
            },
            {
                id: 4,
                svgIcon: <FaRegHandshake size={32} />,
                title: 'Trade Shows & Expos'
            },
            {
                id: 5,
                svgIcon: <PiHandsPrayingThin size={32} />,
                title: 'Religios & and Community Gatherings'
            },
            {
                id: 6,
                svgIcon: <PiFlowerLotusThin size={32} />,
                title: 'Wellness & Lifestyle Events'
            },
            {
                id: 7,
                svgIcon: <TbBallFootball size={32} />,
                title: 'Sports & Outdoor Events'
            },
            {
                id:  8,
                svgIcon: <BiSolidPalette size={32} />,
                title: 'Art, Fashion & Creative Events'
            },
        ];

        function handleClick (e) {
            e.preventDefault();
            alert('this query clicked events');
        }

  return (
    <div className='font-montserrat text-[14px] flex flex-row gap-4 items-center justify-around pl-[129px] pr-[129px] my-4'>
        
        {eventsCategory.map(category => (
            <div
                key={category.id}
                className='w-[170px] h-[130px] border border-gray-200 p-3 overflow-hidden text-[16px] leading-[22px] rounded-md flex flex-col items-center cursor-pointer' onClick={handleClick}
            >
               <span className='flex justify-center items-center mb-4 text-homeexplohover'>
                 {category.svgIcon}
               </span>
               <p className='text-center break-words whitespace-normal'>
                 {category.title}
               </p>
            </div>
        ))}

    </div>
  );
}
