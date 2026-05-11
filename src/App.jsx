import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import RoomDetails from "./RoomDetails"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh]">
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/rooms/:id" element={<RoomDetails />}/>
        </Routes>
      </div>
      <Footer />
      
      
    </>
  )
}

export default App