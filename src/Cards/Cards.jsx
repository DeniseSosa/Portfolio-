import { useEffect, useState } from "react";

function Cards() {
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
        <div className="bg-neutral-100 w-3/4 flex justify-center">
            {
                projects.map((p,index) => {
                    return (
                        <section key= {index}>
                        <h1> Name:{p.name}</h1>
                        <p>Description:{p.description}</p>
                        <p>Technologies{p.technologies}</p>
                        </section>)
                
                })
            }
        </div>
    );
  }
  
  export default Cards;
  