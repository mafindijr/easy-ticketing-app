import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import EmptyState from '../components/empty-state';

export default function Tickets() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="p-8">
      <div className="mb-8 pt-10">
        <h1 className="text-[32px] leading-[44px] font-montserrat font-bold mb-6">My Tickets</h1>
        
        {/* Tab Navigation */}
        <div className="flex gap-4 items-cneter justify-center">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-4 font-montserrat font-semibold text-[16px] cursor-pointer transition-colors ${
              activeTab === 'all'
                ? 'text-homeexplore border-b-2 border-homeexplore'
                : 'text-[#4b5563] hover:text-homeexplore'
            }`}
          >
            All Tickets
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 font-montserrat font-semibold text-[16px] cursor-pointer transition-colors ${
              activeTab === 'upcoming'
                ? 'text-homeexplore border-b-2 border-homeexplore'
                : 'text-[#4b5563] hover:text-homeexplore'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pb-4 font-montserrat font-semibold text-[16px] cursor-pointer transition-colors ${
              activeTab === 'past'
                ? 'text-homeexplore border-b-2 border-homeexplore'
                : 'text-[#4b5563] hover:text-homeexplore'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'all' && <div 
        className='flex items-center justify-center'
        >
          <EmptyState /> 
        </div>}
        {activeTab === 'upcoming' && <div>Upcoming Tickets Content</div>}
        {activeTab === 'past' && <div>Past Tickets Content</div>}
      </div>
    </div>
  );
}
