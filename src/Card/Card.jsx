/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Card({ name, description, technologies,image }) {
  return (
    <div className=" bg-neutral-800 rounded-md m-2 p-5 border-2 border-fuchsia-800 hover:shadow-[0_10px_15px_rgb(192,38,211)] transition duration-300 hover:scale-105">
      <h2 className="text-white text-center text-4xl lg:text-5xl">{name}</h2>
      <div className="m-2 p-2">
      <img src={image} className="object-fit rounded-md"></img>
      </div>
      <div className="m-2 p-2">
      <h3 className="text-white text-start text-2xl lg:text-3xl m-2 p-2">
        Description: {description}
      </h3>
      <h3 className="text-white text-start text-2xl lg:text-3xl m-2 p-2">
        Technologies: {technologies?.map((t, index) => (
          <span key={index}>
            {t}
            {index < technologies.length - 1 && ", "}
          </span>
        ))}
      </h3>
      </div>
    </div>
  );
}

export default Card;
