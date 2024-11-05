// Hooks
import useWindowDimensions from "../../custom_hooks/useWindowDimensions";

// Components
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Map from "../../components/contact/Map";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navigation />
      <div className="w-screen h-screen flex flex-row justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Link
            to="https://www.linkedin.com/in/dawid-markieton-96a353325/"
            target="_blank"
            className="py-1 px-11 flex flex-row justify-center items-center shadow-lg shadow-gray-500  hover:bg-gradient-to-br hover:from-[#8a0000] hover:to-[#ffbebe] hover:text-white duration-150"
          >
            <FaLinkedin className="w-[40px] h-[40px] m-4" />
            My LinkedIn Profile
          </Link>
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
