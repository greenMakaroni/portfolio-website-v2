import { useRef, useState } from "react";
import useOnScreen from "../../custom_hooks/useOnScreen.jsx";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";
import { ImArrowRight } from "react-icons/im";

const Project = ({ title, description, link, date }) => {
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
          ? `bg-gradient-to-br from-[#ff7a7a]  to-[#8a0000] w-screen  duration-300 border border-[#8a0000] flex flex-col items-center justify-center `
          : ` duration-300 w-[32vw] border border-[#8a0000] flex flex-col items-center justify-center  ${
              hovered && "bg-gradient-to-br  from-[#ff7a7a]  to-[#8a0000]"
            }`
      } py-[55px] px-8 hover:cursor-pointer opacity-0 relative mt-[8vh] mb-[25vh] flex flex-col items-start ${
        isVisible && "animate-elementIn"
      }`}
    >
      <div className="flex flex-col">
        <p
          className={`duration-150 font-['Courier_Prime'] text-[13px] font-thin ${
            hovered ? "text-white" : "text-red-800"
          } `}
        >
          {" "}
          {date}{" "}
        </p>
        <h1
          className={`${hovered ? "text-white" : "text-[#8a0000]"} ${
            isMobile && "text-white"
          } flex flex-row items-center duration-150 text-xl font-['Kanit'] font-bold`}
        >
          {title}{" "}
          <ImArrowRight
            className={`${
              hovered ? "ml-6" : "ml-2"
            } h-[20px] w-[20px] duration-150`}
          />
        </h1>
        <p
          className={`${hovered ? "text-white" : "text-black"} ${
            isMobile && "text-white"
          } mt-4 duration-150  mr-[30px] p-0 font-['Courier_Prime'] text-[11px] font-extralight tracking-wider`}
        >
          {" "}
          {description}{" "}
        </p>
      </div>
    </div>
  );
};

export default Project;
