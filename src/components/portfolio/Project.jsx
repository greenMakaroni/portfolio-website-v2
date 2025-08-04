import { useRef, useState } from "react";
import useOnScreen from "../../custom_hooks/useOnScreen.jsx";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";
import { ImArrowRight } from "react-icons/im";

const Project = ({ title, description, link, date, icons, buttonText }) => {
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
          ? `w-screen h-[40vh] my-4 duration-300 border border-[#8a0000] flex flex-col items-center justify-center `
          : `bg-white duration-300 w-[24.6vw] border border-[#8a0000] flex flex-col ${
              hovered && "bg-gradient-to-br from-[#751e1e] to-[#d24c4c]"
            }`
      } pt-11 px-6 hover:cursor-pointer opacity-0 relative flex flex-col items-start ${
        isVisible && "animate-parIn"
      }`}
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <p
              className={`duration-150 font-['Courier_Prime'] text-[13px] font-thin ${
                hovered ? "text-white" : "text-red-900"
              } `}
            >
              {" "}
              {date}{" "}
            </p>
            {hovered && (
              <p
                className={`ml-6 animate-[0.8s_pulse_infinite] duration-150 font-['Courier_Prime'] text-[13px] font-thin ${
                  hovered ? "text-white" : "text-red-900"
                } `}
              >
                {" "}
                {buttonText}{" "}
              </p>
            )}
          </div>
          <h1
            className={`${
              hovered ? "text-white" : "text-[#8a0000]"
            }  flex flex-row items-center duration-150 text-xl font-['Kanit'] font-bold mb-[15px]`}
          >
            {title}{" "}
            <ImArrowRight
              className={`${
                hovered && "animate-arrowBounce"
              } ml-4 h-[22px] w-[22px] duration-150`}
            />
          </h1>
          <p
            className={`${
              hovered ? "text-white" : "text-black"
            }  mt-4 duration-150  mr-[30px] p-0 font-['Courier_Prime'] text-[12px] font-extralight tracking-wider`}
          >
            {" "}
            {description}{" "}
          </p>
        </div>
        <div
          className={`${
            hovered ? "text-white" : "text-red-800"
          } mt-6 flex flex-row items-center my-4 flex-wrap w-full`}
        >
          {icons.map((e) => {
            return e;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
