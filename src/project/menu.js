import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <div className="grid">
        {product.map((each) => (
          <div key={each.id}>
            <h4> Name of recipe : {each.name}</h4>
            <img src={each.image} width={100} height={100} alt={each.name} />
            <h5>Rating : {each.rating}</h5>
            <h4>Recipe Description : {each.description}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;