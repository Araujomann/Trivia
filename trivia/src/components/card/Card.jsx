import React from "react";
import "./Card.css";

export const Card = ({ text, children }) => {
  return (
    <div className="card">
      <h2>{text}</h2>
      {children}
    </div>
  );
};
