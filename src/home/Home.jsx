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
    <div className="bg-neutral-900 min-h-screen w-full">
      <h1 className="text-white">Hello Portfolio 💜</h1>
      <div className="grid grid-cols-2 gap-2">
        <button className="justify-self-end transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
          <img src="https://res.cloudinary.com/dcjdkojad/image/upload/v1725990806/Portfolio_images/otra_mitad_y2xbxc.png" />
        </button>
        <button className="justify-self-start transition duration-300 ease-in-out filter hover:drop-shadow-[0_10px_15px_rgb(192,38,211)]">
          <img src="https://res.cloudinary.com/dcjdkojad/image/upload/v1725990813/Portfolio_images/mitad_epeir8.png" />
        </button>
      </div>
      <Technologies />
      <CardsContainer projects={projects} />
      <Contact />
    </div>
  );
}

export default Home;
