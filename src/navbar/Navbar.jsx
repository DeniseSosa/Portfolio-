import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="bg-fuchsia-900 w-full sticky top-0">
      <div className="flex flex-col lg:flex-row justify-around">

        <div className=" p-1">
        <CiMenuBurger />
          <a
          href="#about">
          <img
          className="object-contain h-16 w-auto"
          src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726249621/Portfolio_images/Logo_Monograma_Minimalista_Rosa_onwjkh.png"></img>
          </a>
        </div>
        <div className="p-5  text-center">
          <a href="#about"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            About
          </a>
        </div>
        <div className="p-5 text-center">
          <a href="#technologies"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Technologies
          </a>
        </div>
        <div className="p-5 text-center ">
          <a href="#projects"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Projects
          </a>
        </div>
        <div className="p-5 text-center">
          <a href="#contact"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
