function Navbar() {
  return (
    <nav className="bg-fuchsia-900">
      <div className="flex justify-around w-vh">
     <div className="p-5">
        <a className="text-slate-50 font-medium text-2xl hover:bg-fuchsia-800 m-0.5 p-4 rounded-xl">Fullstack Developer & UX/UI Designer</a>
      </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-4 rounded-xl">About</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-4 rounded-xl">Technologies</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-4 rounded-xl">Projects</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-4 rounded-xl">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
