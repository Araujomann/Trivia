import React from "react";
import { Button } from "@components/button/Button";
import { Card } from "@components/card/Card";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const title = "MLS TRIVIA";
  const description = "Aprenda inglês se divertindo!";
  return (
    <Card text={title}>
      <p className="description">{description}</p>
      <div className="buttons-container">
        <Link to={"/login"}>
          <Button className="start" text="Iniciar" />
        </Link>
      </div>
    </Card>
  );
};
