import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryButton } from "../../components/categoryButton/CategoryButton";
import "./Category.css";

export const Category = () => {
  const location = useLocation();
  const username = location.state.username;
  console.log("oia o usuário aqui:", username);

  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  console.log("oia a categoria aqui:", category);

  const categories = [
    "music",
    "sport_and_leisure",
    "film_and_tv",
    "arts_and_literature",
    "history",
    "society_and_culture",
    "science",
    "geography",
    "food_and_drink",
    "general_knowledge",
  ];

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.name);
  };

  useEffect(() => {
    if (category) {
      navigate("/match", {
        state: { category, username },
      });
    }
  }, [category]);

  const formateCateogoryName = (categoryName) => {
    return categoryName.replace(/_/g, " ");
  };

  return (
    <div className="general-container">
      <h1 className="title">Escolha uma categoria</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            categoryName={category}
            onClick={handleCategory}
          >
            {formateCateogoryName(category)}
          </CategoryButton>
        ))}
      </div>
    </div>
  );
};
