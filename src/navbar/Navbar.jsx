import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className="bg-fuchsia-900 sticky top-0 scroll-smooth">
      <div className="flex flex-col lg:flex-row p-2">
        <div className="flex justify-between">
          <button onClick={toggleMobileNav} className="lg:hidden">
            <CiMenuBurger className="lg:hidden size-10 p-2 m-2 hover:border-b-2 hover:border-fuchsia-400" style={{ color: "white" }} />
          </button>
          <a href="#about" className="hover:border-fuchsia-400">
            <img
              className="object-contain h-16 w-auto"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726249621/Portfolio_images/Logo_Monograma_Minimalista_Rosa_onwjkh.png"
              alt="Logo"
            />
          </a>
        </div>

        <nav className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:justify-between `}>
          <ul className="w-3/6 mx-auto flex flex-col lg:flex-row lg:justify-between">
            <li className="text-center text-slate-50 font-medium text-xl m-0.5 p-2 hover:border-b-2 hover:border-fuchsia-400">
              <a href="#about">About</a>
            </li>
            <li className=" text-center text-slate-50 font-medium text-xl m-0.5 p-2 hover:border-b-2 hover:border-fuchsia-400">
              <a href="#technologies">Technologies</a>
            </li>
            <li className="text-center text-slate-50 font-medium text-xl m-0.5 p-2 hover:border-b-2 hover:border-fuchsia-400">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-center text-slate-50 font-medium text-xl m-0.5 p-2 hover:border-b-2 hover:border-fuchsia-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
