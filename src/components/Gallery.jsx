import { featuredRooms } from "../contants"
import Card from "./Card"



const Gallery = () => {
  return (
    <section className=" flex justify-center items-center max-w-7xl mx-auto border-b" id="gallery">
      <div className="flex py-10 flex-col items-center justify-center gap-10"> 
        <h1 className="font-playfair text-3xl font-bold">Featured Rooms</h1>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-3 mx-6 ">
          {featuredRooms.map((room,index) => (
            <Card key={room.id} index={index} room={room}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery 