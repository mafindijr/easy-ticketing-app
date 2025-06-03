
import React from 'react'

export default function Categories() {

        const eventsCategory = [
            {
                svgIcon: ``,
                title: 'Music & Concerts'
            },
            {
                svgIcon: ``,
                title: 'Cultural & Traditional Festival'
            },
            {
                svgIcon: ``,
                title: 'Corporate & Professional Events'
            },
            {
                svgIcon: ``,
                title: 'Trade Shows & Expos'
            },
            {
                svgIcon: ``,
                title: 'Religios & and Community Gatherings'
            },
            {
                svgIcon: ``,
                title: 'Wellness & Lifestyle Events'
            },
            {
                svgIcon: ``,
                title: 'Sports & Outdoor Events'
            },
            {
                svgIcon: ``,
                title: 'Art, Fashion & Creative Events'
            },
        ];

  return (
    <div className='flex flex-row gap-4 items-center justify-around pl-30 pr-30 my-4'>
        
        {eventsCategory.map(category => (
            <div className='w-40 h-25 border pt-4 pb-4 overflow-hidden text-center text-sm rounded-xl'>
               <span className='mb-4'>svgIcon</span>
               <p>{category.title}</p> 
            </div>
            
        ))}

    </div>
  );
}
