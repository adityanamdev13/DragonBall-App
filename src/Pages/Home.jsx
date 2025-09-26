import React from "react";
import NavigateCard from "../components/NavigateCard";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="bg-[url(bg_comics.jpg)] bg-fixed pb-20 ">
        <div className="flex  items-center justify-between mx-10 pt-10 pb-10 ">
          <img
            src="mv.png"
            alt="heroImage"
            className="w-96"
          />
          <div className="relative ">
            <h1 className="text-9xl font-bold font-serif mr-20">Welcome </h1>
            <img
              src="https://en.dragon-ball-official.com/favicon.ico"
              alt="o"
              className="absolute w-22 bottom-2 right-[17.2rem]"
            />
          </div>
        </div>

        {/* main section */}
        <div className="bg-white border border-gray-300 px-14 py-8 grid grid-cols-4  mx-10 rounded-3xl shadow-2xl">
          {/* Card */}
          <NavigateCard title="The Characters" navTo="/characters" />
        </div>
      </div>
    </>
  );
};

export default Home;
