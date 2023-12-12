
import Partners from "../components/home/Partners";
import Testimonals from "../components/home/Testimonals";
import Welcome from "../components/home/Welcome";
import Working from "../components/home/Working";

const Home = () => {
  return (
    <div className="w-full">
      <Welcome />
      <Working />
      <Testimonals />
      <Partners />
      
    </div>
  );
};

export default Home;
