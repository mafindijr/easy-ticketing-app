import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function NavigationIcon() {

  return (
    <div className='flex gap-4'>

        <button className='bg-gray-100 rounded-full p-2'>
            <ChevronLeft size={30}/>
        </button>

        <button className='bg-gray-200 rounded-full p-2'>
          <ChevronRight size={30}/>
        </button>
    </div>
  );
}
