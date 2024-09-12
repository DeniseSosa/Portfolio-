
function Navbar() {
  return (
    <nav className="bg-fuchsia-900 w-full sticky top-0">
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="p-5">
          <a 
          className="text-slate-50 font-medium text-2xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Fullstack Developer & UX/UI Designer
          </a>
        </div>
        <div className="p-5 ">
          <a href="#about"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            About
          </a>
        </div>
        <div className="p-5 ">
          <a href="#technologies"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Technologies
          </a>
        </div>
        <div className="p-5 ">
          <a href="#projects"
          className="text-slate-50 font-medium text-xl m-0.5 p-2 rounded-xl hover:border-b-2 hover:border-fuchsia-400">
            Projects
          </a>
        </div>
        <div className="p-5 ">
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
