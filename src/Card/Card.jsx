/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types

import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Card({ name, description, technologies, image, github, web }) {

  return (
    <div className=" bg-neutral-700 rounded-md m-2 p-5 border-2 border-fuchsia-800 hover:shadow-[0_10px_15px_rgb(192,38,211)] transition duration-300 hover:scale-105">
      <h2 className="text-white text-center text-4xl lg:text-5xl">{name}</h2>
      <div className="m-2 p-2">
        <img src={image} className="object-fit rounded-md"></img>
      </div>
      <div className="m-2 p-2">
        <h3 className="text-white text-start text-2xl lg:text-3xl m-2 p-2">
          Description: {description}
        </h3>
        <h3 className="text-white text-start text-2xl lg:text-3xl m-2 p-2">
          Technologies:{" "}
          {technologies?.map((t, index) => (
            <span key={index}>
              {t}
              {index < technologies.length - 1 && ", "}
            </span>
          ))}
        </h3>
      </div>
      <div className="flex justify-between m-4 p-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white w-32 text-neutral-900 text-2xl rounded-3xl justify-evenly items-center hover:bg-fuchsia-400 p-2"
        >
          Code
          <FaGithub className="text-2xl" />
        </a>
        <a
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white text-neutral-900 w-32 text-2xl rounded-3xl justify-evenly items-center hover:bg-fuchsia-400 p-2"
        >
          Preview
          <CiLink className="text-4xl" />
        </a>
      </div>
    </div>
  );
}

export default Card;
