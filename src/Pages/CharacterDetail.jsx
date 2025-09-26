import React from 'react';
import { useParams } from 'react-router-dom';
import {  FaFire, FaMale, FaRocket } from 'react-icons/fa';
import { GiSaiyanSuit, GiBodyHeight } from 'react-icons/gi';
import { MdOutlineDescription, MdOutlineTransform } from 'react-icons/md';
import useDataFetch from '../hooks/useDataFetch';
import Spinner from '../components/Spinner';

const CharacterDetail = () => {
  const { id } = useParams();
  const endpoint = `https://dragonball-api.com/api/characters/${id}`;
  const { data, loading, error } = useDataFetch(endpoint);

  if (loading) return <Spinner/>
  if (error) return <div className="text-center mt-10 text-red-500 text-xl">Error loading data</div>;

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
    transformations,
  } = data;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center p-4">
          <img src={image} alt={name} className="w-40 h-40 rounded-full object-contain border-2 border-indigo-500" />
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-indigo-600">{name}</h1>
            <p className="text-gray-600 text-lg">
              <GiSaiyanSuit className="inline-block text-indigo-500 mr-2" />
              {affiliation}
            </p>
          </div>
        </div>
      </div>

      {/* Character Details */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          <MdOutlineDescription className="inline-block mr-2" /> About {name}
        </h2>
        <p className="text-gray-700">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="text-lg font-bold text-indigo-500">
              <FaFire className="inline-block mr-2" /> Current Ki
            </h3>
            <p className="text-gray-700">{ki}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-500">
              <FaRocket className="inline-block mr-2" /> Maximum Ki
            </h3>
            <p className="text-gray-700">{maxKi}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-500">
              <GiBodyHeight className="inline-block mr-2" /> Race
            </h3>
            <p className="text-gray-700">{race}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-500">
              <FaMale className="inline-block mr-2" /> Gender
            </h3>
            <p className="text-gray-700">{gender}</p>
          </div>
        </div>
      </div>

      {/* Origin Planet */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          <FaMale className="inline-block mr-2" /> Origin Planet
        </h2>
        <div className="flex items-center">
          <img
            src={originPlanet.image}
            alt={originPlanet.name}
            className="w-32 h-32 rounded-lg object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{originPlanet.name}</h3>
            <p className="text-gray-700">{originPlanet.description}</p>
          </div>
        </div>
      </div>

      {/* Transformations */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          <MdOutlineTransform className="inline-block mr-2" /> Transformations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="bg-gray-100 rounded-lg shadow p-4 text-center">
              <img
                src={transformation.image}
                alt={transformation.name}
                className="w-32 h-32 mx-auto rounded-lg object-contain mb-2"
              />
              <h3 className="text-lg font-bold text-gray-800">{transformation.name}</h3>
              <p className="text-gray-600">Ki: {transformation.ki}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
