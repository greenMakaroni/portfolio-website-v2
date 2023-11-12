// code splitting components
import { lazy } from 'react'

// pages
const Home = lazy(() => import("./pages/home/Home"))
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"))
const Contact = lazy(() => import("./pages/contact/Contact"))
const Education = lazy(() => import("./pages/education/Education"))
const Error = lazy(() => import("./pages/error/Error"))

// router
import { 
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/education",
    element: <Education />,
    errorElement: <Error />
  } 
])

export default router