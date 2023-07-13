import "./banner.css"
import useOnScreen from "../../../custom_hooks/useOnScreen"
import { useRef } from "react"

const Banner = () => {

  const banner = useRef()
  const isVisible = useOnScreen(banner)

  return (
    <div ref={banner} className="banner-main">

      {
      isVisible &&
        <>
          <h1 className="name"> Dawid Markieton </h1>
          <p className="title"> BSc. Software engineering</p>
        </>
        }


    </div>
  )
}

export default Banner