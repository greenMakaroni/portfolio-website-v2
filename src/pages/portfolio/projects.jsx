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

const projects = [
  {
    title: "My notes",
    description:
      "Full stack web application for creating and managing notes. It's a CRUD application created as a solution to a technical interview for a company that ghosted me afterwards, leaving me with $1 bill for running EC2 instance on AWS.",
    link: "https://github.com/greenMakaroni/myNotes",
    buttonText: "Inspect Code",
    date: "November 2023",
    icons: [
      <SiMysql className={`mr-5 w-[35px] h-[35px] `} />,
      <SiPhp className={`mr-5 w-[33px] h-[33px]`} />,
      <FaLaravel className={`mr-5 w-[25px] h-[25px] `} />,
      <RiTailwindCssFill className={`mr-5 w-[25px] h-[25px] `} />,
    ],
  },
  {
    title: "Interactive rating component",
    description:
      "This is my solution to the Interactive rating component challenge found on www.frontendmentor.io The challenge was to build the component based on the design provided by the website, using technology of choice.",
    link: "https://greenmakaroni.github.io/Interactive-rating-component/",
    buttonText: "View Online",
    date: "August 2023",
    icons: [
      <FaReact className={`mr-5 w-[25px] h-[25px]`} />,
      <RiTailwindCssFill className={`mr-5 w-[25px] h-[25px] `} />,
    ],
  },
  {
    title: "Project management app",
    description:
      "Full stack application to manage projects and clients. Track the status of projects, store project data and associated clients in a MongoDB database. This project served me as a GraphQL learning sandbox, it was a pleasure to abandon it.",
    link: "https://github.com/greenMakaroni/project-management-app.git",
    buttonText: "Inspect Code",
    date: "July 2022",
    icons: [
      <FaReact className={`mr-5 w-[25px] h-[25px]`} />,
      <FaBootstrap className={`mr-5 w-[28px] h-[28px]`} />,
      <SiExpress className={`mr-5 w-[22px] h-[22px]`} />,
      <SiMongodb className={`mr-5 w-[22px] h-[22px]`} />,
      <GrGraphQl className={`mr-5 w-[25px] h-[25px]`} />,
      <SiApollographql className={`mr-5 w-[22px] h-[22px]`} />,
    ],
  },
  {
    title: "Java module chooser",
    description: `MVC desktop application written in Java for choosing optional modules for the final year at the university. GUI created using javafx library. `,
    link: "https://github.com/greenMakaroni/Module-Chooser-GUI",
    buttonText: "Inspect Code",
    date: "December 2021",
    icons: [<FaJava className={`mr-5 w-[35px] h-[35px]`} />],
  },
  {
    title: "E-commerce store",
    description:
      "eCommerce storefront written in React, utilizing commerce.js API for back end functionality, and stripe for processing of payments. Storefront built using Material-UI components library.",
    link: "https://github.com/greenMakaroni/react-commercejs-storefront",
    buttonText: "Inspect Code",
    date: "August 2021",
    icons: [
      <FaReact className={`mr-5 w-[25px] h-[25px]`} />,
      <FaStripe className={`mr-5 w-[35px] h-[35px]`} />,
      <SiMui className={`mr-5 w-[25px] h-[25px]`} />,
    ],
  },
];

export { projects };
