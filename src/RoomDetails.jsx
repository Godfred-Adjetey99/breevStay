import { useState } from "react";
import { useParams } from "react-router-dom"
import { featuredRooms } from "./contants";
import { useEffect } from "react";
import { RiUserLocationFill } from "@remixicon/react";
import { RiUserLocationLine } from "@remixicon/react";


const RoomDetails = () => {
  const {id} = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = featuredRooms.find((room) => room.id === id);
    room && setRoom(room);
    room && setMainImage(room.image);
  }, [id]);
  return room && (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
        <h1 className="text-3xl md:text-4xl font-playfair">{room?.name} <span className="font-inner text-sm">(Single Bed)</span></h1>
        <p className="font-inner text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full">discount on {room?.name} when it a long-term stay</p>
      </div>

      <div className="flex items-center gap-2 mt-4 text-gray-500">
        
        <a href="https://maps.app.goo.gl/NX5n7vjBGt2sJYTp7">Nungua Coco Beach, Opposite Blackmama Resort </a><RiUserLocationFill />
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

    <div>
    </div>

    <div className="flex flex-col lg:flex-row md:justify-between mt-10">
        <div className="flex flex-col ">
          <h1 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h1>
          
          <div className="flex flex-wrap items-center mt-3 mb-2 gap-4">
            {room?.facilityIcons.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <p className="text-xl">{item.name}</p>
                
              </div>
            ))}
          </div>
        </div>
          {room.priceCents && <p className="text-gray-900 text-md font-medium mt-2 text-2xl">${(room.priceCents / 100).toFixed(2)} <span className="text-lg">/Night</span></p>}
    </div>

            <div className="mt-25 space-y-4 mb-5">
              {room.roomCommonData.map((item,index) => (
                <div key={index} className="flex flex-start gap-2" >
                  <img src={item.icon} alt={item.title} className="w-6.5" />
                  <div>
                    <p className="text-base">{item.title}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>

                </div>
              ))}
            </div>

            <div>
              <p className="max-w-3xl border-y border-gray-300 ny-15 py-10 text-gray-500">{room?.description2}</p>
            </div>

            <div className="flex flex-col justify-center itmes-center my-10  w-full">
              <h1 className="text-3xl font-playfair text-center">Google Map Loction</h1>
              <div className="flex my-5 justify-center items-center">
                <span className="mr-2"><RiUserLocationFill/></span><a href="https://maps.app.goo.gl/NX5n7vjBGt2sJYTp7"> Nungua Coco Beach, Opposite Blackmama Resort </a>
                
              </div>
              <div className="flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.35825740686576!2d-0.09106637436764563!3d5.5852956244977685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sgh!4v1778637177325!5m2!1sen!2sgh" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
              

              

            </div>
    </div>

    

    
  )
}

export default RoomDetails