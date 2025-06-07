import React from 'react'
import Card from './Cards';

export default function EventSection({ title, events, layout = 'grid' }) {

  if(!events || events.lenght === 0) return null;

  return (
    <section>
      <h1>{ title }</h1>

      {
        layout === 'carousel' ? (
          <swiper>
            {events.map(event => (<Card />))}
          </swiper>
        ) : (
          <div>
            
          </div>
        )
      }


    </section>
  );

}
