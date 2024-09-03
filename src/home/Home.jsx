//import Card from "../Card/Card";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useEffect, useState } from "react";

function Home() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
         fetch('./projects.json')
         .then((response) => {
            if(!response.ok) throw Error(" An error occurred")
                return response.json()
         })
         .then((data) => {
            setProjects(data)
         })
         .catch((error) => {
            console.log("There was a problem with the JSON file:", error);
          });
    },[])

    console.log(projects);

    return (
        <div className="bg-neutral-950 w-vh min-h-screen ">
            <h1 className="text-white">Hello Portfolio</h1>
            <CardsContainer projects= {projects} />
            
        </div>
    );
  }
  
  export default Home;
  