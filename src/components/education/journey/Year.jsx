import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Year = ( {pars, index} ) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => {
      return !prev
    })
  }
  return (
    <div onClick={() => { handleClick() } } className=" cursor-pointer my-[5vh] flex flex-col text-black bg-white opacity-90 p-[25px] border-l-2 border-b-2 border-dashed rounded-bl-2xl border-[#8a0000]">
      <div className="flex flex-row justify-between">
      <h1 className="my-[5vh] text-4xl font-['Kanit'] font-bold text-[#8a0000]">
        Year {index}
      </h1>
      <KeyboardArrowDownIcon />
      </div>

      {open && pars.map((par, index) => {
        return (
          <p key={index} className="text-[13px] font-['Courier_Prime'] font-thin mb-[35px]">
            {par.par}
          </p>
        );
      })}
    </div>
  );
};

export default Year;
