// Components
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Map from "../../components/contact/Map";
import Card from "../../components/contact/Card";
const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navigation />
      <div className="w-screen h-screen flex flex-col">
        <Map />
         <Card />
        
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
