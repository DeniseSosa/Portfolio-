const About = () =>{
    return(
        <div className="bg-neutral-900 min-h-screen w-full mx-auto scroll-smooth">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 w-11/12 mx-auto">
          <div className="row-span-1 col-span-full">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl text-center p-4">
              I´m Denise Rocio Sosa 💜
            </h1>
          </div>
          <div className="col-span-1 row-span-3 self-center m-3">
            <h2 className="text-center text-white text-3xl lg:text-4xl p-4">Coder</h2>
            <h3 className="text-center text-white text-2xl lg:text-3xl p-2">Fullstack Developer</h3>
            <h4 className="text-center text-white text-xl lg:text-2xl p-2">
              I’ve been focused in Javascript, React Js, Node JS and Express Js
            </h4>
          </div>
    
          <div className="grid grid-cols-2 col-span-full md:col-span-2 row-span-3">
            <button className="justify-self-end transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
              <img 
              className="w-24 h-auto md:w-36 lg:w-56"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153532/Portfolio_images/otra_mitad_y2xbxc.png" />
            </button>
            <button className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
              <img 
              className="w-24 h-auto md:w-36 lg:w-56"
              src="https://res.cloudinary.com/dcjdkojad/image/upload/v1726153405/Portfolio_images/mitad_epeir8.png" />
            </button>
          </div>
    
          <div className="col-span-1 row-span-3 self-center m-3">
            <h2 className="text-center text-white text-3xl lg:text-4xl p-4">Designer</h2>
            <h3 className="text-center text-white text-2xl lg:text-3xl p-2">UX/UI Designer</h3>
            <h4 className="text-center text-white text-xl lg:text-2xl p-2">
              Recently discovered that I’m into User Research, prototypes and mockups with Figma and usability testing
            </h4>
          </div>
    
          <div className="m-3 row-span-1 col-start-2 col-end-4">
          <h2 className="text-center text-white text-3xl lg:text-4xl p-4">Tourism Managment Degree</h2>
            <h3 className="text-center text-white text-2xl lg:text-3xl p-2">My degree in Tourism Management has guided me into becoming a highly adaptable, empathetic, and well-organized professional</h3>
          </div>
        </div>
        </div>
    )
}
export default About