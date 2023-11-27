import React from "react";
import "./introduction.css";
import Cover from "../../assets/cover1.jpeg";

const Introduction = () => {
  return (
    <div className="information-container">
      <img
        className="information-cover-image"
        src={Cover}
        alt="Break your own record"
      />
      <h1>BREAK YOUR OWN RECORD</h1>
    </div>
  );
};

export default Introduction;
