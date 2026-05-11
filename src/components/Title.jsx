const Title = ({font, title , subtitle,}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full mt-10 mb-5">
        <h1 className={`text-4xl md:text-[40px] text-center ${font || "font-playfair"}`}>
            {title}
        </h1>
        <p className="text-sm md:text-base mt-2">{subtitle}</p>
    </div>
  )
}

export default Title