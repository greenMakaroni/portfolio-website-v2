import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Card = () => {
  return (
    <div className="
    flex 
    justify-center 
    flex-col 
    opacity-0 
    animate-elementIn 
    py-[50px] 
    absolute 
    right-[50px] 
    top-[100px] 
    bg-white 
    z-20 
    w-[35%] 
    shadow-[0px_5px_35px_5px_rgba(0,0,0,0.8)] 
    rounded-2xl">
    <h1>

    </h1>
      <h1 className="m-[25px] font-['Kanit']">
        <span className="mx-[25px]">
            <PhoneIcon />
        </span>
        +44 (0) 745 949 3215
      </h1>
      <h1 className="m-[25px] font-['Kanit']">
        <span className="mx-[25px]">
            <EmailIcon />
        </span>
        mrtn.dawid@gmail.com
      </h1>
      <h1 className="m-[25px] font-['Kanit']">
        <span className="mx-[25px]">
            <LocationOnIcon />
        </span>
        Leicester, UK
      </h1>
    </div>
  )
}

export default Card
