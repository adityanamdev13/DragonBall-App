import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-44  overflow-hidden ">
      <img
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        src="https://en.dragon-ball-official.com/assets/img/shared/logo_title.png"
        alt="logo"
        className="object-contain  cursor-pointer"
      />
    </div>
  );
};

export default Logo;
