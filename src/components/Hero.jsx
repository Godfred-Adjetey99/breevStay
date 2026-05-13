import { HeroSection } from "../contants/index"

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative ">
    {HeroSection.map((item) => (
      <div key={item.title} className="w-full h-full relative">
        <img src={item.images[0].value} alt={item.images[0].name} className="w-full h-full object-cover " loading="lazy" />
        <div className="absolute top-50 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white bg-gray-700 opacity-75 py-6 px-15 lg:px-8 max-w-7xl rounded-md">
          <p className=" mb-4  ">The Unlimited <span className="font-playfair font-bold text-3xl">{item.title}</span> Experience</p>
          <h1 className="font-playfair text-xl md:text-5xl md:text-[56px] md-leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">{item.descriptionh1}</h1>
          <p className="max-w-130 mt-2 text-sm md:text-base sm:text-2xl">{item.descriptionp}</p>
          <div className="flex justify-center items-center">
             <a href="/#contact"><button className="mt-6 px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-300 transition duration-300">Book Now</button></a>
          </div>
         
        </div>
        
      </div>
      
    ))}
    </section>
  )
}

export default Hero