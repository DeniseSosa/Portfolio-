import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isBannerCoder, setIsBannerCoder] = useState(false);
  const [isBannerDesigner, setIsBannerDesigner] = useState(false);

  const onClickLeft = () => {
    setIsBannerCoder(true);
    setIsBannerDesigner(false);
    setShowIntro(false);
  };

  const onClickRight = () => {
    setIsBannerDesigner(true);
    setIsBannerCoder(false);
    setShowIntro(false);
  };

  const onClickBack = () => {
    setShowIntro(true)
    setIsBannerDesigner(false);
    setIsBannerCoder(false);
    
  };

  return (
    <div className="bg-fuchsia-100 dark:bg-neutral-900 lg:min-h-screen w-full mx-auto scroll-smooth">
      {showIntro && (
        <div className="flex flex-col justify-center items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 w-11/12 mx-auto">
          <div className="row-span-1 col-span-full">
            <h1 className="text-slate-900 dark:text-slate-50 text-xl md:text-3xl lg:text-4xl text-center p-4 font-bold">
              I´m Denise Rocio Sosa 
            </h1>
            <p className="font-bold text-slate-900 dark:text-slate-50 text-xl md:text-3xl lg:text-4xl text-center ">Fullstack Developer & UX/UI student💜</p>
          </div>
          <div className="hidden lg:grid col-span-1 row-span-3 self-center m-3">
            <h2 className="text-center text-slate-900 dark:text-slate-50 text-3xl lg:text-4xl p-4 font-bold">
              Coder
            </h2>
            <h3 className="text-center text-slate-900 dark:text-slate-50 text-2xl lg:text-3xl p-2 font-bold">
              Fullstack Developer
            </h3>
            <p className="text-center text-slate-900 dark:text-slate-50 text-xl lg:text-2xl p-2">
              I’ve been focused in Javascript, React Js, Node JS and Express Js
            </p>
          </div>

          <div className="grid grid-cols-2 col-span-full md:col-span-2 row-span-3">
            <button
              name="coder"
              onClick={onClickLeft}
              className="justify-self-end transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]"
            >
              <img
                className="object-scale-down h-auto w-36 lg:w-56"
                src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153532/Portfolio_images/otra_mitad_y2xbxc.png"
              />
            </button>
            <button
              name="designer"
              onClick={onClickRight}
              className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]"
            >
              <img
                className="object-scale-down h-auto w-36 lg:w-56"
                src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153405/Portfolio_images/mitad_epeir8.png"
              />
            </button>
          </div>

          <div className=" hidden lg:grid col-span-1 row-span-3 self-center m-3">
            <h2 className="text-center text-slate-900 dark:text-slate-50 text-3xl lg:text-4xl p-4 font-bold">
              Designer
            </h2>
            <h3 className="text-center text-slate-900 dark:text-slate-50 text-2xl lg:text-3xl p-2 font-bold">
              UX/UI Designer
            </h3>
            <p className="text-center text-slate-900 dark:text-slate-50 text-xl lg:text-2xl p-2">
              Recently discovered that I’m into User Research, prototypes and
              mockups with Figma and usability testing
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center m-3 md:col-span-full lg:row-span-1 lg:col-start-2 lg:col-end-4">
            <h2 className="text-center text-slate-900 dark:text-slate-50 text-3xl lg:text-4xl p-4 font-bold">
              Tourism Managment Degree
            </h2>
            <p className="text-center text-slate-900 dark:text-slate-50 text-2xl lg:text-3xl p-2">
              My degree in Tourism Management has guided me into becoming a
              highly adaptable, empathetic, and well-organized professional
            </p>
          </div>
        </div>
      )}

      <div className={`${isBannerCoder ? "banner-coder" : "hidden"}`}>
        <h2 className="text-center text-slate-900 dark:text-slate-50 text-3xl lg:text-5xl font-bold">
          “The coder side”{" "}
        </h2>
        <div className="flex">
          <button 
            onClick={onClickBack} 
            style={{color:"white"}}
            className="hidden lg:block w-30 h-30 bg-fuchsia-900 m-4 p-4 rounded-md transition duration-300 hover:scale-110 hover:bg-fuchsia-400"
          >
            <IoMdArrowRoundBack />
          </button>
          <h3 className="text-slate-900 dark:text-slate-50 text-base sm:text-xl lg:text-3xl leading-snug w-11/12 lg:w-2/6 mx-auto p-4 text-start justify-self-center self-center font-bold">
            Started in IT in 2023 without knowing anything about programming, a
            friend had taught me my first steps and I was immediately captivated
            by this world. It fascinated me, and I quickly became passionate
            about it
          </h3>

          <button
            onClick={onClickBack}
            className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]"
          >
            <img
              className="w-full max-w-xs lg:max-w-md object-contain"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153532/Portfolio_images/otra_mitad_y2xbxc.png"
            ></img>
          </button>
        </div>
      </div>

      <div className={`${isBannerDesigner ? "banner-designer" : "hidden"}`}>
        <h2 className="text-center text-slate-900 dark:text-slate-50 text-3xl lg:text-5xl font-bold">
          “The designer side”{" "}
        </h2>
        <div className="flex">
          <button
            onClick={onClickBack}
            className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]"
          >
            <img
              className="w-full max-w-xs lg:max-w-md object-contain"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153405/Portfolio_images/mitad_epeir8.png"
            ></img>
          </button>

          <h3 className="text-slate-900 dark:text-slate-50 text-base sm:text-xl lg:text-3xl leading-snug w-11/12 lg:w-2/6 mx-auto text-end p-4 justify-self-center self-center font-bold">
            This journey has just begun... I've always loved drawing,
            decorating, designing my own clothes, and nurturing my creative
            side, but it wasn't until 2024 that I started studying UX/UI design
            and I instantly fell in love with it, as it stimulates my creative
            side and allows me to fully leverage my empathy in designing
            user-centered experiences
          </h3>
          <button
            onClick={onClickBack}
            className="hidden lg:block w-30 h-30 bg-fuchsia-900 m-4 p-4 rounded-md transition duration-300 hover:scale-110 hover:bg-fuchsia-400"
          >
            <IoMdArrowRoundForward 
            style={{color:"white"}} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
