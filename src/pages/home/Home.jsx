// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Scene from "../../components/home/Scene.jsx";
// Hooks
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex w-[100vw] h-[100vh] bg-black">
        <Scene />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
