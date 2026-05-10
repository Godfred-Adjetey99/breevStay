import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh]">
        <Routes>
          <Route  path="/" element={<Home />}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App