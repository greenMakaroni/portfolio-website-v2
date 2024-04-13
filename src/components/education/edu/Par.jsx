import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../../custom_hooks/useOnScreen";

const Par = ({ paragraph, index }) => {
  const [seen, setSeen] = useState(false);
  const par = useRef();
  const isParVisible = useOnScreen(par, 1);

  useEffect(() => {
    isParVisible && setSeen(true)
  }, [isParVisible])
  return (
    <div ref={par}>
      {seen && 
        <p id={index} className={`animate-parIn opacity-0 mb-[25px] text-[13px] font-['Courier_Prime'] font-thin`}>
          {paragraph.par}
        </p>
      }
    </div>
  );
};

export default Par;
