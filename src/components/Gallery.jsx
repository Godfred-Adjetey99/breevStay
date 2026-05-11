import { featuredRooms } from "../contants"
import Card from "./Card"
import Title from "./Title"



const Gallery = () => {
  return (
    <section className=" flex justify-center items-center mx-auto bg-gray-100 pb-20 " id="gallery">
      <div className="flex flex-col items-center justify-center gap-x-10"> 
        <Title title="Featured Rooms" subtitle=""/>
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