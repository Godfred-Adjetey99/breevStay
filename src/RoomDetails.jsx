import { useState } from "react";
import { useParams } from "react-router-dom"
import { featuredRooms } from "./contants";
import { useEffect } from "react";


const RoomDetails = () => {
  const {id} = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = featuredRooms.find((room) => room.id === id);
    room && setRoom(room);
    room && setMainImage(room.image);
  }, []);
  return room && (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
        <h1 className="text-3xl md:text-4xl font-playfair">{room?.name} <span className="font-inner text-sm">(Single Bed)</span></h1>
        <p className="font-inner text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full">discount on {room?.name} when it a long-term stay</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
      <div className="lg:w-1/2 w-full">
        <img src={mainImage} alt={room?.name}
        className="w-full shadow-lg rounded-xl object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
        {room?.images.length > 1 && room.images.map((image,index) => (
          <img onClick={() => setMainImage(image.value)} key={index} src={image.value} alt={room?.name} 
          className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image.value && 'outline-3 outline-orange-500'}`} />  
        ))}
        
      </div>
    </div>
    </div>

    
  )
}

export default RoomDetails