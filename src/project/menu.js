import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Menu.css"; // Ensure the CSS file is imported

const Menu = () => {
  const [product, setProduct] = useState([]);
  const RecipeData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setProduct(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching the recipes", error);
    }
  };

  useEffect(() => {
    RecipeData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="menu-grid">
        {product.map((each) => (
          <div key={each.id} className="menu-card">
            <h4 className="menu-card-title">Name of recipe: {each.name}</h4>
            <img src={each.image} className="menu-card-image" alt={each.name} />
            <h5 className="menu-card-rating">Rating: {each.rating}</h5>
            <h4 className="menu-card-description">
              mealType : {each.mealType}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
