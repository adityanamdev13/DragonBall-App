import React from "react";
import NavigateCard from "../components/NavigateCard";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between mx-5 md:mx-10 pt-10 pb-10 space-y-6 md:space-y-0">
          <img src="mv.webp" alt="heroImage" className="w-64 md:w-80 lg:w-96" />
          <div>
            <div className="relative text-center md:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold font-serif md:mr-20">
                Welcome
              </h1>
              <img
                src="https://en.dragon-ball-official.com/favicon.ico"
                alt="o"
                className="hidden md:block absolute w-8 sm:w-10 lg:w-16 md:bottom-5 right-1/2 md:right-[18.2rem] translate-x-1/2 md:translate-x-0"
              />
            </div>
            <p className="relative md:text-left text-center md:px-10 md:text-xl font-semibold before:content-['“'] after:content-['”']">
              Where every Kamehameha echoes with passion. <br />
              Dive into the universe of Goku, Vegeta, and beyond!
            </p>
          </div>
        </div>

        <div
          className="bg-white border border-gray-300 px-6 sm:px-10 lg:px-14 py-8 
          grid grid-cols-1   lg:grid-cols-4 gap-6 
          mx-5 md:mx-10 rounded-3xl shadow-2xl 
          place-items-center"
        >
          <div className="hidden md:block col-span-2 bg-black  rounded-xl shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">
              Explore the Dragon Ball Universe
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              From legendary warriors like{" "}
              <span className="font-semibold">Goku</span> and{" "}
              <span className="font-semibold">Vegeta</span> to iconic worlds like{" "}
              <span className="font-semibold">Planet Namek</span> and{" "}
              <span className="font-semibold">Earth</span>, dive into the adventures
              that shaped the Dragon Ball saga.
            </p>
            <a
              href="/characters"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
              Start Exploring →
            </a>
          </div>

          <NavigateCard
            title="The Characters"
            navTo="/characters"
            src="pngegg.webp"
          />
          <NavigateCard title="The Planets" navTo="/planets" src="123.webp" />
        </div>
      </div>
    </>
  );
};

export default Home;
