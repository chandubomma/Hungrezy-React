import pexels from "../assets/pexelsAsset.png";
import uliana from "../assets/ulianaAsset.png";
import jonathan from "../assets/jonathanAsset.png";

const Home = () => {
  return (
    <div className="w-full">
      <div className="lg:px-48 min-[100px]:px-16 pt-16 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[42%] mb-8 md:mb-0">
          <h2 className="text-orange-500/90 font-semibold text-2xl min-[1100px]:text-4xl py-4">
            WELCOME TO HUNGREZY
          </h2>
          <p
            className="text-3xl min-[1100px]:text-5xl font-medium"
            style={{ lineHeight: "1.2" }}
          >
            Giving your Hunger a new Option
          </p>
          <p className="mt-4 text-gray-600 font-normal text-base md:text-lg">
            Explore a world of delicious options at Hungrezy. Our menu is
            crafted with love and passion to satisfy your cravings. Whether
            you&apos;re in the mood for savory dishes or sweet treats,
            we&apos;ve got you covered.
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <img
            src={pexels}
            alt="pexels"
            className="min-[1100px]:w-96 w-72 max-[766px]:max-w-[18rem]"
          />
          <img
            src={jonathan}
            alt="jonathon"
            className="w-1/2 md:w-40 absolute -left-[2rem] -top-2.5 max-w-[15rem] md:max-w-full"
          />
          <img
            src={uliana}
            alt="pexels"
            className="w-1/2 md:w-40 absolute -left-[2rem] -bottom-2 max-w-[15rem] md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
