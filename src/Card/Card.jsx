/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types

import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Card({ name, description, technologies, image, github, web }) {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-700 rounded-md m-2 p-5 border-2 border-fuchsia-800 hover:shadow-[0_10px_15px_rgb(192,38,211)] transition duration-300 hover:scale-105">
      <h2 className="text-white self-center text-4xl lg:text-5xl">{name}</h2>

      <div className="m-2 p-2 flex-2">
        <img src={image} className="object-contain w-full h-60 rounded-md"></img>
      </div>

      <div className="m-2 p-2 flex-1">
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

      <div className="w-full flex flex-col justify-center items-stretch lg:flex-row lg:justify-center m-4 p-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white w-full lg:w-32 text-neutral-900 text-2xl rounded-md lg:rounded-3xl justify-evenly items-center hover:bg-fuchsia-400 p-2 m-2"
        >
          Code
          <FaGithub className="text-2xl" />
        </a>

        <a
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white text-neutral-900 w-full lg:w-32 text-2xl rounded-md lg:rounded-3xl justify-evenly items-center hover:bg-fuchsia-400 p-2 m-2"
        >
          Preview
          <CiLink className="text-4xl" />
        </a>
      </div>
    </div>
  );
}

export default Card;
