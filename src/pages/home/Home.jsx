// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Footer from "../../components/footer/Footer.jsx";

// Hooks
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
