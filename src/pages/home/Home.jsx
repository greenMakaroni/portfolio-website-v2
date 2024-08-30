// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Footer from "../../components/footer/footer.jsx";

// Hooks
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="z-50 h-screen w-screen overflow-y-auto overflow-x-hidden ">
        <div className=" h-screen w-screen">home</div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
