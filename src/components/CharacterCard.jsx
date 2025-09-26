import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { name, image, id } = character;
  const navigate = useNavigate();

  return (
    <div
      className=" bg-white shadow-md rounded-lg overflow-hidden border border-gray-200  cursor-pointer transition-transform transform  hover:scale-95"
      onClick={() => navigate(`/character/${id}`)}
    >
      <img src={image} alt={name} className="w-full h-48 object-contain mt-4" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center ">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CharacterCard;
