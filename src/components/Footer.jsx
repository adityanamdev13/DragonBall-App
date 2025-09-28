import React from "react";

const Footer = () => {
  return (
    <footer className=" relative bg-black text-white border  p-12">
      <img
        src="footer.webp"
        alt="footer-img"
        className="absolute md:bottom-4 md:w-56 w-32 right-4 top-[-40px]"
      />
      <div>
        <p className="text-center text-gray-300">©2025, DragOnball.com, Inc. All rights reserved.</p>
        <p className="text-center text-gray-600">CreatedBy- Aditya Namdev</p>
      </div>
    </footer>
  );
};

export default Footer;
