import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiApollographql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";

const projects = [
  {
    title: "ESM Management",
    description:
      "Developed a next-generation software suite to optimize inkroom operations for print industry clients. ",
    link: "https://github.com/greenMakaroni/react-commercejs-storefront",
    buttonText: "Inspect Code",
    date: "September 2024",
    icons: [
      <FaReact className={`mr-7 w-[30px] h-[30px]`} />,
      <BiLogoSpringBoot className={`mr-7 w-[30px] h-[30px]`} />,
      <BiLogoPostgresql className={`mr-7 w-[30px] h-[30px]`} />,
      <FaJava className={`mr-7 w-[35px] h-[35px]`} />,
    ],
  },
  {
    title: "My Notes",
    description: "Full stack web application for creating and managing notes. ",
    link: "https://github.com/greenMakaroni/myNotes",
    buttonText: "Inspect Code",
    date: "November 2023",
    icons: [
      <SiMysql className={`mr-7 w-[35px] h-[35px] `} />,
      <SiPhp className={`mr-7 w-[33px] h-[33px]`} />,
      <FaLaravel className={`mr-7 w-[25px] h-[25px] `} />,
      <RiTailwindCssFill className={`mr-7 w-[30px] h-[30px] `} />,
    ],
  },
  {
    title: "Interactive Rating",
    description:
      "Interactive rating component challenge found on www.frontendmentor.io",
    link: "https://greenmakaroni.github.io/Interactive-rating-component/",
    buttonText: "View Online",
    date: "August 2023",
    icons: [
      <FaReact className={`mr-7 w-[30px] h-[30px]`} />,
      <RiTailwindCssFill className={`mr-7 w-[30px] h-[30px] `} />,
    ],
  },
  {
    title: "Project Management",
    description: "Full stack application to manage projects and clients. ",
    link: "https://github.com/greenMakaroni/project-management-app.git",
    buttonText: "Inspect Code",
    date: "July 2022",
    icons: [
      <FaReact className={`mr-7 w-[30px] h-[30px]`} />,
      <SiExpress className={`mr-7 w-[30px] h-[30px]`} />,
      <SiMongodb className={`mr-7 w-[25px] h-[25px]`} />,
      <GrGraphQl className={`mr-7 w-[28px] h-[28px]`} />,
    ],
  },
  {
    title: "Java Module Chooser",
    description: `MVC desktop application written in Java for choosing optional modules for the final year at the university. `,
    link: "https://github.com/greenMakaroni/Module-Chooser-GUI",
    buttonText: "Inspect Code",
    date: "December 2021",
    icons: [<FaJava className={`mr-7 w-[35px] h-[35px]`} />],
  },
  {
    title: "E-commerce Store",
    description:
      "eCommerce storefront written in React, utilizing commerce.js API for back end functionality.",
    link: "https://github.com/greenMakaroni/react-commercejs-storefront",
    buttonText: "Inspect Code",
    date: "August 2021",
    icons: [
      <FaReact className={`mr-7 w-[30px] h-[30px]`} />,
      <FaStripe className={`mr-7 w-[40px] h-[40px]`} />,
      <SiMui className={`mr-7 w-[25px] h-[25px]`} />,
    ],
  },
];

export { projects };
