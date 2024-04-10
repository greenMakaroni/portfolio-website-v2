import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useOnScreen from "../../../custom_hooks/useOnScreen";

const Year = ( {pars, index} ) => {
  const year = useRef()

  const [open, setOpen] = useState(false);
  const isYearVisible = useOnScreen(year);

  useEffect(() => {
    !isYearVisible && setOpen(false)
  }, [isYearVisible])

  function handleClick() {
    setOpen((prev) => {
      return !prev
    })
  }
  return (
    <div ref={year} onClick={() => { handleClick() } } className={`${isYearVisible && "animate-elementIn"} ${!open && "bg-journeyButtonBg bg-right bg-no-repeat bg-contain bg-[length:120px_165px]"} w-[80%] duration-300 shadow-[0px_4px_15px_5px_rgba(138,0,0,0.5)] hover:shadow-[0px_5px_30px_7px_rgba(138,0,0,1)] cursor-pointer my-[7vh] flex flex-col text-black bg-white p-[25px] border-b-2 rounded-tl-[35px] rounded-br-[35px]`}>
      <div className={`${open && "mb-[25px] "} flex flex-row items-center`}>
        <h1 className={`mr-[35px] text-2xl font-['Kanit'] font-bold text-[#8a0000]`}>
          Year {index}
        </h1>
        <KeyboardArrowDownIcon />
      </div>

      {open && pars.map((par, index) => {
        return (
          <p key={index} className={`text-[13px] font-['Courier_Prime'] font-thin mb-[35px]`}>
            {par.par}
          </p>
        );
      })}
    </div>
  );
};

export default Year;
