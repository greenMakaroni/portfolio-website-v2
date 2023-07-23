// pages
import Home from "./pages/home/Home"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import Education from "./pages/education/Education"
import Error from "./pages/error/Error"

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