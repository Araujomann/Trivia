import React from "react";
import "./Input.css";

export const Input = ({ type, placeholder, onChange }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} required />
  );
};
