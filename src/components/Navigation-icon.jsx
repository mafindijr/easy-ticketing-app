import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function NavigationIcon() {

  return (
    <div>

        <button className='bg-gray-100 rounded-full p-2'>
            <ChevronLeft size={30}/>
        </button>

        <button>
          <ChevronRight />
        </button>
    </div>
  );
}
