import { useState } from 'react';

import { UseModal as Modal} from './UseModal';

function Card(props) {

    const cardItems = [];

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className='mb-4 mt-4'>
        
          
        <div onClick={()=> {setModalOpen(true)}} className="max-w-xs  border border-gray-100 rounded-sm overflow-hidden bg-gray-50">
          <img
            src="./easy-image.jpg"
            alt=""
            className="w-full h-52 object-cover"
          />
          <div className="mb-4 p-4">
            <h2 className="text-xl font-semibold mb-2 ">name</h2>
            <p>
                date
            </p>
            <p className="">
              location
            </p>
            <p>
                price
            </p>
          </div>

          <div>
            <button className="bg-homeexplore text-gray-50 ml-4 mb-4 px-4 py-1 rounded-sm">Book Now</button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
           <div>
            <div><img src="" alt="" /></div>
            <div>
              <h2>name</h2>
              <p>date</p>
              <p>location</p>
              <p>price</p>
            </div>
           </div>
        </Modal>

        </div>
    );
}

export default Card;


