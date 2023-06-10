// pages
import Landing from "./pages/landing_page/Landing"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import Error from "./pages/error/Error";

// router
import { 
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
  
])

export default router