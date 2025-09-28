import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateCard = ({ title, navTo, src }) => {
  const navigate = useNavigate();
  return (
    <div className="border w-fit p-5 border-gray-300 rounded-2xl shadow-xl flex flex-col bg-gray-100">
      <img src={src} alt="png" className="w-50" />
      <h2 className="text-center font-bold text-xl">{title}</h2>
      <button
        onClick={() => {
          navigate(navTo);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-gray-500 underline cursor-pointer hover:text-blue-500"
      >
        See more
      </button>
    </div>
  );
};

export default NavigateCard;
