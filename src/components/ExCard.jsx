




const ExCard = (item) => {
  return (
    <div className="flex items-center gap-4 shadow-md rounded-md px-2 py-1 mb-10 ">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex flex-col gap-1">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-600">"{item.review}"</p>
              
            </div>
          </div>
  )
}

export default ExCard