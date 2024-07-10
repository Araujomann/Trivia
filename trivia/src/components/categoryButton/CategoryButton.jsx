import React from "react";
import "./CategoryButton.css";

export const CategoryButton = ({ children, categoryName, onClick }) => {
  return (
    <button className="category-button" name={categoryName} onClick={onClick}>
      {children}
    </button>
  );
};
