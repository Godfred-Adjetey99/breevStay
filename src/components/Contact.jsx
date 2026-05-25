import Title from "./Title"
import { ContactInfo } from "../contants"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center px-10 bg-gray-50 w-full" id="contact">
      <Title title="Contact" subtitle="For More Information Call or Email" />
      <div className="flex flex-wrap pt-7 pb-30">
        {ContactInfo.map((item) => (
      <div className="flex justify-center items-center">
          <img src={item.icon} alt={item.iconName} />
          
          <p className="font-semibold text-lg pl-3 pr-2 text-center"> {item.name}:</p>
          <Link to={item.link} target="_blank" >
          <p className="text-lg font-playfair text-center pl-2">{item.value}</p>
          </Link>
          
          
        </div>
      ))}
      <div className="mt-15 lg:ml-100">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.35825740686576!2d-0.09106637436764563!3d5.5852956244977685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sgh!4v1778637177325!5m2!1sen!2sgh" width="400" height="300" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </section>
  )
}

export default Contact