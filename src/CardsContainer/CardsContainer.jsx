// import { useEffect, useState } from "react";

import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
function CardsContainer({projects}) {
    return (
        <div className="flex wrap-wrap justify-center bg-fuchsia-200">
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
    );
  }
  
  export default CardsContainer;
  