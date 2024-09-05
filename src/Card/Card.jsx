

// eslint-disable-next-line react/prop-types
function Card({name, description, technologies}) {
    return (
        <div className="rounded-md border-2 border-black bg-fuchsia-200 m-2.5 p-5 max-h-1/5 max-w-1/5">
            <h1>{name}</h1>
            <img src=""></img>
            <h1>{description}</h1>  
            <h1>{technologies}</h1>  
        </div>
    );
  }
  
  export default Card;