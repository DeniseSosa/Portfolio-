function Contact() {
  return (
    <div className="">
      <h2 className="text-white text-center text-3xl">Contact 📩</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-2">
          <div className="flex flex-col justify-center">
            <button className="text-white text-center text-3xl bg-fuchsia-900 p-4 m-1.5 rounded-md">
              Download Resume
            </button>

            <button className="text-white text-center text-3xl bg-fuchsia-900  p-4 m-1.5 rounded-md">
              Descargar CV
            </button>
          </div>
        </div>

        <div className="col-span-1 row-span-2">
          <img className="" src="/ro_mejorada.png"></img>
        </div>

        <div className="col-span-2 row-span-1">
          <div className="flex justify-center">
            <img
              className="size-1/6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
            <img
              className="size-1/6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            />
            <img className="size-1/6" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
