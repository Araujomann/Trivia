import React from "react";
import { useState } from "react";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("qqqqqqq:", username);
    navigate("/match", { state: { username } });
    console.log("Navigating to /match with state:", { username });
  };

  console.log("username:", username);

  return (
    <Card text={"Login"}>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder={"Username"}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button className="btn" type="submit" text="Play" />
      </form>
    </Card>
  );
};
