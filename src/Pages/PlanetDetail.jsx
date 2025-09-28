import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaUsers,
  FaSkull,
  FaShieldAlt,
  FaFire,
  FaBolt,
  FaMale,
} from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoPlanetSharp } from "react-icons/io5";
import Spinner from "../components/Spinner";

const PlanetDetail = () => {
  const { id } = useParams();
  const navigate= useNavigate();

  const {
    data: planet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["planet", id],
    queryFn: async () => {
      const res = await fetch(`https://dragonball-api.com/api/planets/${id}`);
      if (!res.ok) throw new Error("Failed to fetch planet");
      return res.json();
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-red-500 p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center max-w-md shadow-2xl">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="w-7 h-7 text-red-300" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-red-100">
            Couldn't load planet details. Try again later.
          </p>
        </div>
      </div>
    );
  }

  const { name, isDestroyed, description, image, characters = [] } = planet;

  const formatKi = (val) =>
    val ? parseInt(val.replace(/\./g, "")).toLocaleString() : "Unknown";

  return (
    <div className="min-h-screen pt-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white border border-gray-300 rounded-3xl shadow p-8 mb-5">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Planet Image */}
            <div className="relative group">
              <img
                src={image}
                alt={name}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-blue-300 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Planet Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-2">
                {name}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <IoPlanetSharp className="w-6 h-6 text-blue-600" />
                <span
                  className={`text-lg font-medium px-3 py-1 rounded-full ${
                    isDestroyed
                      ? "bg-red-100 text-red-700 border border-red-200"
                      : "bg-green-100 text-green-700 border border-green-200"
                  }`}
                >
                  {isDestroyed ? "Destroyed" : "Active"}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Planet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {[
            {
              label: "Status",
              value: isDestroyed ? "Destroyed" : "Active",
              icon: isDestroyed ? <FaSkull /> : <FaGlobeAmericas />,
              color: isDestroyed
                ? "from-red-500 to-red-600"
                : "from-green-500 to-blue-500",
            },
            {
              label: "Total Characters",
              value: characters.length,
              icon: <FaUsers />,
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Planet Type",
              value: "Inhabited World",
              icon: <IoPlanetSharp />,
              color: "from-blue-500 to-indigo-500",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 flex gap-6 items-center hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <div className="text-white text-xl">{stat.icon}</div>
              </div>
              <div>
                <h3 className="text-gray-700 font-semibold">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Characters from this Planet */}
        {characters.length > 0 && (
          <div className="bg-white border border-gray-300 rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <FaUsers className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Characters from {name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {characters.map((character) => (
                <div
                  onClick={() => {
                    navigate(`/character/${character.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  key={character.id}
                  className="bg-gray-50 border border-gray-300 rounded-xl shadow hover:shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-32 object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {character.name}
                  </h3>

                  {/* Character Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1">
                        <GiBodyHeight className="w-4 h-4" />
                        Race:
                      </span>
                      <span className="font-medium text-gray-800">
                        {character.race}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1">
                        <FaMale className="w-4 h-4" />
                        Gender:
                      </span>
                      <span className="font-medium text-gray-800">
                        {character.gender}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1">
                        <FaFire className="w-4 h-4 text-orange-500" />
                        Ki:
                      </span>
                      <span className="font-medium text-gray-800">
                        {formatKi(character.ki)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1">
                        <FaBolt className="w-4 h-4 text-yellow-500" />
                        Max Ki:
                      </span>
                      <span className="font-medium text-gray-800">
                        {formatKi(character.maxKi)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200">
                      {character.affiliation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Characters Message */}
        {characters.length === 0 && (
          <div className="bg-white border border-gray-300 rounded-3xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              No Known Characters
            </h2>
            <p className="text-gray-600">
              No characters from this planet have been documented yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetDetail;
