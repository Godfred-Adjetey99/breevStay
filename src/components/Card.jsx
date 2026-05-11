import { Link } from "react-router-dom"


const Card = ({ room }) => {
  return (
    <Link to={`/rooms/${room.id}`}>
    <div div class="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-70">
        <img class="rounded-md max-h-40 w-full object-cover" src={room.image} alt={room.name} />
        <p class="text-gray-900 text-xl font-semibold ml-2 mt-4">
            {room.name}
        </p>
        <p class="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
            {room.description}
        </p>
        <div className="flex justify-between items-center">
        <button type="button" class="bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-5 py-2 font-medium rounded-md text-white text-sm">
            Read More
        </button>
        <p class="text-gray-900 text-md font-semibold mr-2 text-left">
            ${room.price / 100} per night
        </p>
        </div>
    </div>
    </Link>
  )
}

export default Card