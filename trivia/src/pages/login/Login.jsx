import React from "react";
import { useState } from "react";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate(); //só dá pra usar useNavigate dentro de um componente que, por sua vez, está dentro de um BrowserRouter.
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/category", { state: { username } }); //o estado { username } é passado como um argumento para a rota "/match".
    /*permitindo que o nome de usuário seja acessado naquela rota.*/
  };

  return (
    <Card text={"Register"}>
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
