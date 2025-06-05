import React from 'react'
import { MicVocal } from 'lucide-react'

export default function Categories() {

        const eventsCategory = [
            {
                id: 1,
                svgIcon: <MicVocal />,
                title: 'Music & Concerts'
            },
            {
                id: 2,
                svgIcon: ``,
                title: 'Cultural & Traditional Festival'
            },
            {
                id: 3,
                svgIcon: ``,
                title: 'Corporate & Professional Events'
            },
            {
                id: 4,
                svgIcon: ``,
                title: 'Trade Shows & Expos'
            },
            {
                id: 5,
                svgIcon: ``,
                title: 'Religios & and Community Gatherings'
            },
            {
                id: 6,
                svgIcon: ``,
                title: 'Wellness & Lifestyle Events'
            },
            {
                id: 7,
                svgIcon: ``,
                title: 'Sports & Outdoor Events'
            },
            {
                id:  8,
                svgIcon: ``,
                title: 'Art, Fashion & Creative Events'
            },
        ];

  return (
    <div className='flex flex-row gap-4 items-center justify-around pl-30 pr-30 my-4'>
        
        {eventsCategory.map(category => (
            <div key={category.id} className='w-[137px] h-[118px] border border-gray-200 p-[8px] overflow-hidden text-[16px] leading-[22px] rounded-md'>
               <span className='flex justify-center items-center mb-4 text-homeexplohover'>
                 {category.svgIcon}
               </span>
               <p>{category.title}</p>
            </div>
            
        ))}

    </div>
  );
}
