import { useState, useRef, useEffect } from "react";

//Components
import Par from "./Par";

// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Hooks
import useOnScreen from "../../../custom_hooks/useOnScreen";

const Year = ({headerRef, pars, index, isMobile }) => {
  const year = useRef();

  const [open, setOpen] = useState(false);
  const isYearVisible = useOnScreen(year);

  useEffect(() => {
    !isYearVisible && setOpen(false);
  }, [isYearVisible]);

  function handleClick() {
    if(open) {
      headerRef.current.scrollIntoView({ behavior: 'instant'})
    }
    setOpen((prev) => {
      return !prev;
    });
  }

  return (
    <div
      ref={year}
      onClick={() => {
        handleClick();
      }}
      className={`${!isMobile && "w-[80%]"} ${
        isYearVisible && "animate-elementIn"
      } ${
        !open &&
        "bg-journeyButtonBg bg-right bg-no-repeat bg-[length:120px_165px]"
      } duration-300 shadow-[-5px_4px_7px_3px_rgba(138,0,0,0.5)] hover:shadow-[-5px_4px_10px_5px_rgba(138,0,0,1)] cursor-pointer my-[5vh] flex flex-col text-black bg-white py-[15px] px-[25px] rounded-bl-[25px]`}
    >
      <div className={`${open && "mb-[25px] "} flex flex-row items-center`}>
        <h1
          className={`mr-[35px] text-2xl font-['Kanit'] font-bold text-[#8a0000]`}
        >
          Chapter {index}
        </h1>
        <KeyboardArrowDownIcon />
      </div>

      {open &&
        pars.map((par, index) => {
          return (
              <Par key={index} paragraph={par} index={index} />
          );
        })}
    </div>
  );
};

export default Year;
