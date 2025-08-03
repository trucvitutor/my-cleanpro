import React from "react";
import mess from "../assets/mxh/messing.jpg";
import zalo from "../assets/mxh/zalo.jpg";
import "./FloatingContact.css";

const FloatingContact: React.FC = () => {
  return (
    <div className="floating-contact">
      <a
        href="https://zalo.me/0799140355"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={zalo} alt="Zalo" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={mess} alt="Messenger" />
      </a>
    </div>
  );
};

export default FloatingContact;
