import { useEffect } from "react";
import { useState } from "react";
import { Links } from "../contants";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "@remixicon/react";
import { RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 w-full flex items-center justify-between px-5 sm:px-15 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
      ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}
    `}>
      <h1 className={`text-2xl font-bold ${isScrolled ? "text-gray-600" : "text-black"} `}><Link to="/">BreevHomes</Link></h1>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {Links.map((link) => (
          <a key={link.name} href={link.link} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-black"}`}>
            {link.name}
            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <RiCloseLine />: <RiMenu3Line />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen bg-gray-300  opacity-75 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <RiCloseLine className="h-6 w-6" />
                  </button>
                  {Links.map((link, i) => (
                    <a key={i} href={link.link} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                  ))}

      </div>

    </nav>
  )
}

export default Navbar
