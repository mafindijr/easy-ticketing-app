import {useState} from 'react'


export default function Card (props) {

    return (
        <div className="max-w-xs  border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
          <img
            src=""
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
    );
}