//import Card from "../Card/Card";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import Technologies from "../technologies/Technologies";
import Contact from "../Contact/Contact";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => {
        if (!response.ok) throw Error(" An error occurred");
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log("There was a problem with the JSON file:", error);
      });
  }, []);

  console.log(projects);

  return (
    <div  className="bg-neutral-900 min-h-screen w-full scroll-smooth">
      <h1 className="text-white text-5xl lg:text-6xl text-center p-4"> I´m Denise Rocio Sosa 💜</h1>

      <div id="about"
      className="grid grid-cols-4 gap-2">

      <div className="col-span-1  self-center m-3">
      <h2 className=" text-white text-4xl lg:text-5xl p-4"> Coder</h2>
      <h3 className=" text-white text-3xl lg:text-4xl p-2">Fullstack Developer </h3>
      <h4 className=" text-white text-2xl lg:text-3xl p-2"> I´ve been focused in Javascript, React Js , Node JS and Express Js</h4>
        </div>

        <div className="grid grid-cols-2 col-span-2">
        <button className="justify-self-end transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
          <img src="https://res.cloudinary.com/dcjdkojad/image/upload/v1725990806/Portfolio_images/otra_mitad_y2xbxc.png" />
        </button>
        <button className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
          <img src="https://res.cloudinary.com/dcjdkojad/image/upload/v1725990813/Portfolio_images/mitad_epeir8.png" />
        </button>
        </div>

        <div className="col-span-1 self-center m-3 ">
      <h2 className=" text-white text-4xl lg:text-5xl p-4">Designer</h2>
      <h3 className=" text-white text-3xl lg:text-4xl p-2">UX/UI Designer</h3>
      <h4 className=" text-white text-2xl lg:text-3xl p-2">Recently discovered that I’m into User Research, prototypes and mockups with Figma and usability testing</h4>
        </div>



      </div>
      <div id="technologies"><Technologies /></div>
      <div id="projects"><CardsContainer projects={projects} /></div>
      <div id="contact"><Contact /></div>
      
      
      
    </div>
  );
}

export default Home;
