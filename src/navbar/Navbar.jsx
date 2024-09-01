function Navbar() {
  return (
    <nav className="bg-fuchsia-900">
      <div className="flex justify-around w-vh">
     <div className="p-5">
        <a className="text-slate-50 font-medium text-2xl hover:bg-fuchsia-800 m-0.5 p-1 rounded-md">Fullstack Developer & UX/UI Designer</a>
      </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-1 rounded-md">About</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-1 rounded-md">Technologies</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-1 rounded-md">Projects</a>
        </div>
        <div className="p-5 ">
          <a className="text-slate-50 font-medium text-xl hover:bg-fuchsia-800 m-0.5 p-0.5 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
