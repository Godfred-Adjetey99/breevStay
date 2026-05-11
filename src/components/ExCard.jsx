import { RiStarHalfFill } from "@remixicon/react"




const ExCard = () => {
  return (
    <div className="flex items-center gap-4 shadow-md rounded-md px-2 py-1 mb-10 ">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="person" className="w-16 h-16 rounded-full object-cover" />
            <div className="flex flex-col gap-1">
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-600">"Amazing experience! The rooms were clean and the staff was friendly."</p>
              <p className="text-sm text-gray-600 ">Rating:  <span className="text-yellow-500"><RiStarHalfFill /></span> 4.5</p>
            </div>
          </div>
  )
}

export default ExCard