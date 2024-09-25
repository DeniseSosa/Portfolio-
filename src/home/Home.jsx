//import Card from "../Card/Card";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import Technologies from "../technologies/Technologies";
import Contact from "../contact/Contact";
import About from "../about/About";
import Footer from "../footer/Footer";

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
<div className="bg-fuchsia-100 dark:bg-neutral-900 text-slate-900 dark:text-slate-50 w-full mx-auto scroll-smooth">
  <div id="about">
    <About/>
  </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="projects">
        <CardsContainer projects={projects} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
  
}

export default Home;
