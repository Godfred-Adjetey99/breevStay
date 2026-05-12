import Title from "./Title"
import { ContactInfo } from "../contants"

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center px-10 bg-gray-50 w-full" id="contact">
      <Title title="Contact" subtitle="" />
      <div className="flex flex-wrap pt-7 pb-30">
        {ContactInfo.map((item) => (
      <div className="flex justify-center items-center">
        <p className="font-semibold text-lg pl-3 pr-2 text-center"> {item.name}:</p>
        <p className="text-lg font-playfair text-center pl-2">{item.value}</p>
      </div>
    ))}
      </div>
    </section>
  )
}

export default Contact