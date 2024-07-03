import React from "react";
import { MoonLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="loader">
      <MoonLoader size={60} color="white" loading={true} />
    </div>
  );
};
