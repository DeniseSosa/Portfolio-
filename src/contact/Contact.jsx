function Contact() {
  return (
    <div className="max-h-fit bg-neutral-900 py-10">
      <h2 className="text-white text-center text-4xl lg:text-5xl m-4 lg:mb-8 p-2">Contact 📩</h2>

      <div className="grid grid-cols-3 gap-4 max-h-fit px-4 lg:px-20">

        <div className="col-span-3 lg:col-span-1 flex flex-col items-center justify-center">
          <div className="w-full lg:w-3/4">
            <button className="w-full text-white text-center text-xl lg:text-2xl bg-fuchsia-700 hover:bg-fuchsia-800 p-4 m-3 rounded-md transition duration-300">
              Download Resume
            </button>

            <button className="w-full text-white text-center text-xl lg:text-2xl bg-fuchsia-700 hover:bg-fuchsia-800 p-4 m-3 rounded-md transition duration-300">
              Descargar CV
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <img className="w-10 h-10 bg-white m-2 rounded-md transition duration-300 hover:scale-110" src="/mail.svg" alt="Email" />
            <img className="w-10 h-10 bg-white m-2 rounded-md transition duration-300 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
            <img className="w-10 h-10 bg-white m-2 rounded-md transition duration-300 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </div>
        </div>

        <div className="hidden lg:flex col-span-2 justify-center items-center">
          <div className="w-3/4 h-full flex justify-center items-center">
            <img className="w-full h-auto object-cover" src="https://res.cloudinary.com/dcjdkojad/image/upload/c_pad,w_1041,h_1041,ar_1:1,e_improve/v1725990755/Portfolio_images/ro_mejorada_sqrz2w.png" alt="Portfolio" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;

