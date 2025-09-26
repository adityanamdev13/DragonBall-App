import React from "react";

const Footer = () => {
  return (
    <footer className=" relative bg-black text-white border  p-12">
      <img
        src="footer.png"
        alt="footer-img"
        className="absolute bottom-4 w-56 right-4 "
      />
      <div>
        <p className="text-center text-gray-300">©2025, DragOnball.com, Inc. All rights reserved.</p>
        <p className="text-center text-gray-600">CreatedBy- Aditya Namdev</p>
      </div>
    </footer>
  );
};

export default Footer;
