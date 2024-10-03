import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "./navigator";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const { addFavDishHandler, favDish } = useContext(RecipeContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  useEffect(() => {
    checkIfFavourite();
  }, [favDish, recipe]);

  const fetchRecipe = async () => {
    try {
      const { data, status } = await axios.get(
        `https://dummyjson.com/recipes/${id}`
      );
      if (status === 200) {
        setRecipe(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfFavourite = () => {
    if (recipe) {
      setIsFavourite(favDish.some((fav) => fav.id === recipe.id));
    }
  };

  const handleFavouriteToggle = () => {
    if (isFavourite) {
      navigate("/favourite");
    } else {
      addFavDishHandler(recipe);
      setIsFavourite(true);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.name} />
        <h5>{recipe.name}</h5>
        <h5>Ingredients:</h5>
        <ul>
          {recipe.ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <h5>Instructions:</h5>
        <ul>
          {recipe.instructions.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <button onClick={handleFavouriteToggle}>
          {isFavourite ? "Go to Favourites" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
};

export default Recipe;
