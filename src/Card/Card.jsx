/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Card({ name, description, technologies }) {
  return (
    <div className="rounded-md m-2 p-5 border-2 border-fuchsia-800 hover:shadow-[0_10px_15px_rgb(192,38,211)] transition duration-300 hover:scale-105">
      <h2 className="text-white text-center text-4xl lg:text-5xl">{name}</h2>
      <img src="/pixelcut-export.png"></img>
      <h3 className="text-white text-center text-2xl lg:text-3xl">
        Description: {description}
      </h3>
      <h3 className="text-white text-center text-2xl lg:text-3xl">
        Technologies: 
        {technologies?.map((t, index) => (
          <span key={index}>
            {t}
            {index < technologies.length - 1 && ", "}
          </span>
        ))}
      </h3>
    </div>
  );
}

export default Card;
