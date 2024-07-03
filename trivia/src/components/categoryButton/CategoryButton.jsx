import React from "react";
import "./CategoryButton.css";

export const CategoryButton = ({ children, categoryName, onClick }) => {
  return (
    <button name={categoryName} onClick={onClick}>
      {children}
    </button>
  );
};
