import Navbar from "./navbar";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setProducts(response.data.recipes);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const selectHandler = (event) => {
    const recipeId = event.target.value;
    fetchEachRecipe(recipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/${recipeId}`
      );
      setSelectedRecipe(data);
      console.log(data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Hello, this is the home screen</h1>

      <select onChange={selectHandler}>
        {products.map((recipe) => (
          <option value={recipe.id} key={recipe.id}>
            {recipe.name}
          </option>
        ))}
      </select>

      {Object.keys(selectedRecipe).length > 0 && (
        <div>
          <h4>{selectedRecipe.id}</h4>
          <h4>{selectedRecipe.name}</h4>
        </div>
      )}
    </>
  );
};

export default Home;
