function Contact() {
  return (
    <div className="h-4/6">
      <h2 className="text-white text-center text-3xl m-2 p-2">Contact 📩</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">

        <div className=" col-span-3 lg:col-span-1 content-center">
          <div className="flex flex-col justify-center items-center">
            <button className="max-w-fit text-white text-center text-xl bg-fuchsia-900 p-4 m-1.5 rounded-md">
              Download Resume
            </button>

            <button className="max-w-fit text-white text-center text-xl bg-fuchsia-900  p-4 m-1.5 rounded-md">
              Descargar CV
            </button>
          </div>
        </div>

        <div className="hidden lg:block col-span-2 row-span-2">
          <img className="h-4/6 " src="https://res.cloudinary.com/dcjdkojad/image/upload/c_pad,w_1041,h_1041,ar_1:1,e_improve/v1725990755/Portfolio_images/ro_mejorada_sqrz2w.png"></img>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="flex justify-center">
            <img className="size-16 bg-white m-1.5 rounded-md" src="/mail.svg" alt="" />
            <img
              className="size-16 bg-white m-1.5 rounded-xl"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
            <img
              className="size-16 bg-white m-1.5 rounded-md"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
