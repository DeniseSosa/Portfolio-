

// eslint-disable-next-line react/prop-types
function Card({name, description, technologies}) {
    return (
        <div className="w-2/5 h-2/5 rounded-md border-2 border-black flex">
            <h1>{name}</h1>  
            <h1>{description}</h1>  
            <h1>{technologies}</h1>  
        </div>
    );
  }
  
  export default Card;