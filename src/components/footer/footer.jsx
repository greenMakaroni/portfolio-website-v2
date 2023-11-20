import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const Footer = () => {
  return (
    <div className="flex flex-col w-[100vw] bg-black z-50">
      <h1 className="font-['Kanit'] font-bold text-white text-center text-[25px] pt-[75px] pb-[20px]">
        <span className="mr-[10px]">
          <AutoAwesomeOutlinedIcon sx={{ fontSize: 40, color: "white"}} />
        </span>
        Dawid Markieton </h1>
      <div className="w-[100%] flex flex-row justify-center items-center pb-[75px]">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dawid-markieton-1948391b8/">
          <LinkedInIcon sx={{ fontSize: 30, color: "white"}} />
        </a>
        <a className="mx-[40px]" target="_blank" rel="noreferrer" href="https://github.com/greenMakaroni">
          <GitHubIcon sx={{ fontSize: 30, color: "white"}} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dawid.markieton.3">
          <FacebookIcon sx={{ fontSize: 30, color: "white"}} />
        </a>
      </div>
    </div>
  )
}

export default Footer