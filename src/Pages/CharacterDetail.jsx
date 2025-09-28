import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams} from "react-router-dom";
import {
  FaFire,
  FaBolt,

  FaStar,
  FaShieldAlt,

  FaMale,
} from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import Spinner from "../components/Spinner"

const CharacterDetail = () => {
  const { id } = useParams();
const navigate= useNavigate();

  const {
    data: character,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      if (!res.ok) throw new Error("Failed to fetch character");
      return res.json();
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-red-500 p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center max-w-md shadow-2xl">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="w-7 h-7 text-red-300" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-red-100">Couldn’t load character details. Try again later.</p>
        </div>
      </div>
    );
  }

  const {
    name,
    ki,
    maxKi,
    race,
    gender,
    description,
    image,
    affiliation,
    originPlanet,
    transformations = [],
  } = character;

  const formatKi = (val) => (val ? parseInt(val).toLocaleString() : "Unknown");

  return (
    <div className="min-h-screen pt-10 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="bg-white border border-gray-300 rounded-3xl shadow p-8 mb-5">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Character Image */}
            <div className="relative group">
              <img
                src={image}
                alt={name}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-contain border-4 border-yellow-300 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Character Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-2">
                {name}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <img src="https://en.dragon-ball-official.com/favicon.ico" alt="dragonball" className="w-6" />
                <span className="text-lg font-medium text-gray-700">
                  {affiliation}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {[
            { label: "Current Ki", value: formatKi(ki), icon: <FaFire />, color: "from-red-500 to-orange-500" },
            { label: "Maximum Ki", value: formatKi(maxKi), icon: <FaBolt />, color: "from-yellow-500 to-orange-400" },
            { label: "Race", value: race, icon: <GiBodyHeight />, color: "from-purple-500 to-pink-500" },
            { label: "Gender", value: gender, icon: <FaMale />, color: "from-blue-500 to-purple-500" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 flex  gap-6 items-center  hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <div className="text-white text-xl">{stat.icon}</div>
              </div>
             <div>
               <h3 className="text-gray-700 font-semibold ">{stat.label}</h3>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
             </div>
            </div>  
          ))}
        </div>

        {/* Origin Planet */}
        {originPlanet && (
          <div className="bg-white border border-gray-300 rounded-3xl shadow-xl p-8 mb-4">
            <div className="flex items-center gap-3 mb-6">

              <h2 className="text-2xl font-bold text-gray-900">Origin Planet</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
              onClick={() => {
                    navigate(`/planet/${originPlanet.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                src={originPlanet.image}
                alt={originPlanet.name}
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-md cursor-pointer"
              />
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{originPlanet.name}</h3>
                <p className="text-gray-600">{originPlanet.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Transformations */}
        {transformations.length > 0 && (
          <div className="bg-white border border-gray-300 rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Transformations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {transformations.map((t) => (
                <div
                  key={t.id}
                  className="bg-gray-50 border border-gray-300 rounded-xl shadow hover:shadow-lg p-6 transition-transform hover:scale-105"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-32 object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {t.name}
                  </h3>
                  <p className="text-center text-sm text-gray-600">
                    <FaFire className="inline w-4 h-4 text-orange-500 mr-1" />
                    Ki: {formatKi(t.ki)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
