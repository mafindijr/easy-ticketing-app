import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function NavigationIcon({ onLeft, onRight }) {
  return (
    <div className='flex gap-4'>
      <button
        className='bg-gray-100 hover:bg-gray-200 rounded-full p-1'
        onClick={onLeft}
        type="button"
      >
        <ChevronLeft size={30}/>
      </button>
      <button
        className='bg-gray-100 hover:bg-gray-200 rounded-full p-1'
        onClick={onRight}
        type="button"
      >
        <ChevronRight size={30}/>
      </button>
    </div>
  );
}
