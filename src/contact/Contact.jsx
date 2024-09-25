function Contact() {
  return (
    <div className="bg-fuchsia-100 dark:bg-neutral-900 max-h-fit py-10 w-11/12 mx-auto">
      <h2 className="text-slate-900 dark:text-slate-50 text-center text-4xl lg:text-5xl m-4 lg:mb-8 p-2 font-bold">
        Contact 📲
      </h2>
      <div className="grid grid-cols-3 gap-4 max-h-fit px-4 lg:px-20">
        <div className="col-span-3 lg:col-span-1 flex flex-col items-center justify-center">
          <div className="w-full lg:w-3/4">
            <a
              href="/CV_Sosa_Rocio_fullstack_Developer_english.pdf"
              download="CV-Sosa-Rocio.pdf"
            >
              <button className="w-full text-white text-center text-xl lg:text-2xl bg-fuchsia-700 hover:bg-fuchsia-800 p-4 m-3 rounded-md transition duration-300 hover:shadow-[0_10px_15px_rgb(192,38,211)]">
                Download Resume
              </button>
            </a>
            <a
              href="/CV_Sosa_Denise_Rocio_fullstack_Developer.pdf"
              download="CV-Sosa-Rocio.pdf"
            >
              <button className="w-full text-white text-center text-xl lg:text-2xl bg-fuchsia-700 hover:bg-fuchsia-800 p-4 m-3 rounded-md transition duration-300 hover:shadow-[0_10px_15px_rgb(192,38,211)]">
                Descargar CV
              </button>
            </a>
          </div>

          <div className="flex justify-center">
            <a
            className=""
              href="mailto:rocio.sosa94@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10 dark:bg-slate-50 m-2 rounded-md p-2 transition duration-300 hover:scale-110"
                src="/mail.svg"
                alt="Email"
              />
            </a>
            <a 
              href="https://github.com/DeniseSosa/DeniseSosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10 bg-slate-50 m-2 rounded-md transition duration-300 hover:scale-110"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/denise-rocio-sosa-bb82b0108/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10  m-2 rounded-md transition duration-300 hover:scale-110"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex col-span-2 justify-center items-center">
          <div className="w-3/4 h-full flex justify-center items-center">
            <img
              className="w-full h-auto object-cover"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/c_pad,w_1041,h_1041,ar_1:1,e_improve/v1725990755/Portfolio_images/ro_mejorada_sqrz2w.png"
              alt="Portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
