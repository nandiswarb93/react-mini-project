import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

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
  const Handler = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="grid">
        {product.map((each) => (
          <div key={each.id}>
            <button onClick={() => Handler(each.id)}>{each.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
