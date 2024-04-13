// Hooks
import useWindowDimensions from "../../custom_hooks/useWindowDimensions";

// Components
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Map from "../../components/contact/Map";
import Card from "../../components/contact/Card";
const Contact = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 650

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navigation />
      <div className="w-screen h-screen flex flex-col justify-center">
        <Map />
        <Card isMobile={isMobile} />
        
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
