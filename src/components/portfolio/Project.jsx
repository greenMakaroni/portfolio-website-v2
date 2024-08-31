import { useRef, useState } from "react";
import useOnScreen from "../../custom_hooks/useOnScreen.jsx";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";
import { FaArrowRight } from "react-icons/fa";

const Project = ({ num, title, description, link, buttonText }) => {
  const { width } = useWindowDimensions();
  const [hovered, setHovered] = useState(false);
  const isMobile = width < 650;
  const project = useRef();
  const isVisible = useOnScreen(project);

  return (
    <div
      onClick={() => window.open(link, "_blank")}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      ref={project}
      className={`${
        isMobile
          ? `w-screen`
          : `shadow-lg shadow-red-950 hover:shadow-xl hover:shadow-red-800 duration-300 w-[32vw] border border-[#8a0000] flex flex-col items-center justify-center py-[55px] px-8  ${
              hovered ? "bg-gradient-to-br  from-[#ff7a7a]  to-[#8a0000]" : ""
            }`
      } hover:cursor-pointer opacity-0 relative mt-[8vh] mb-[15vh] flex flex-col items-start ${
        isVisible && "animate-elementIn"
      }`}
    >
      <div className="flex flex-col">
        <h1
          className={`${
            hovered ? "text-white" : "text-[#8a0000]"
          } flex flex-row items-center duration-300  mb-[20px] text-[18px] font-['Kanit'] font-bold`}
        >
          {title}{" "}
          <FaArrowRight
            className={`${
              hovered ? "ml-6" : "ml-2"
            } h-[25px] w-[25px] duration-150`}
          />
        </h1>
        <p
          className={`${
            hovered ? "text-white" : "text-black"
          } duration-300  mr-[30px] p-0 font-['Courier_Prime'] text-[11px] font-extralight tracking-wider`}
        >
          {" "}
          {description}{" "}
        </p>
      </div>
    </div>
  );
};

export default Project;
