import EmailIcon from "@mui/icons-material/Email";

const Card = ( { isMobile } ) => {
  return (
    <div
      className={`${isMobile ? " flex justify-center flex-col opacity-0 animate-elementIn py-[50px] bg-white z-20 shadow-[0px_5px_35px_5px_rgba(138,0,0,0.8)]" : "flex justify-center flex-col opacity-0 animate-elementIn py-[50px] absolute right-[50px] bg-white z-10 shadow-[0px_5px_35px_5px_rgba(138,0,0,0.8)]"} `}
    >
    <div className="flex flex-col w-[100%] h-[100%] py-[25px] px-[75px]">
    <h1 className="mb-[25px] font-['Kanit'] text-4xl bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text font-bold">
        Get In Touch
      </h1>
      <h1 className="my-[10px] font-['Kanit']">
        <span className="mr-[15px]">
          <EmailIcon sx={{ fontSize: 22 }} />
        </span>
        mrtn.dawid@gmail.com
      </h1>
    </div>

    </div>
  );
};

export default Card;
