// import { useEffect, useState } from "react";

import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
function CardsContainer({projects}) {
    return (
        <div className="w-11/12 mx-auto">
        <h2 className="text-white text-center text-4xl lg:text-5xl m-12">Projects 🎉</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 p-2 m-2">
            {
                // eslint-disable-next-line react/prop-types
                projects.map((p) => {
                    return (
                    <Card
                        key= {p.id}
                        name={p.name}
                        description={p.description}
                        technologies={p.technologies}
                    />)
                
                })
            }
        </div>
        </div>
    );
  }
  
  export default CardsContainer;
  