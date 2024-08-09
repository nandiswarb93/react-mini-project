import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "./navigator"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

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
    <div
      style={{
        border: "2px solid black",
        width: 400,
        height: 400,
        padding: 20,
      }}
    >
      <img src={recipe.image} width={100} height={200} alt={recipe.name} />
      <h5>{recipe.id}</h5>
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
  );
};

export default Recipe;

// import { useParams } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { RecipeContext } from "./navigator"; // Ensure this path is correct
// import { useNavigate } from "react-router-dom";
// import "./Recipe.css"; // Import the CSS file

// const Recipe = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [isFavourite, setIsFavourite] = useState(false);
//   const { addFavDishHandler, favDish } = useContext(RecipeContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRecipe();
//   }, [id]);

//   useEffect(() => {
//     checkIfFavourite();
//   }, [favDish, recipe]);

//   const fetchRecipe = async () => {
//     try {
//       const { data, status } = await axios.get(
//         `https://dummyjson.com/recipes/${id}`
//       );
//       if (status === 200) {
//         setRecipe(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const checkIfFavourite = () => {
//     if (recipe) {
//       setIsFavourite(favDish.some((fav) => fav.id === recipe.id));
//     }
//   };

//   const handleFavouriteToggle = () => {
//     if (isFavourite) {
//       navigate("/favourite");
//     } else {
//       addFavDishHandler(recipe);
//       setIsFavourite(true);
//     }
//   };

//   if (!recipe) return <div>Loading...</div>;

//   return (
//     <div className="recipe-card">
//       <img src={recipe.image} className="recipe-image" alt={recipe.name} />
//       <h5 className="recipe-id">{recipe.id}</h5>
//       <h5 className="recipe-name">{recipe.name}</h5>
//       <h5 className="recipe-section-title">Ingredients:</h5>
//       <ul className="recipe-ingredients">
//         {recipe.ingredients.map((i, index) => (
//           <li key={index}>{i}</li>
//         ))}
//       </ul>
//       <h5 className="recipe-section-title">Instructions:</h5>
//       <ul className="recipe-instructions">
//         {recipe.instructions.map((i, index) => (
//           <li key={index}>{i}</li>
//         ))}
//       </ul>
//       <button
//         className="recipe-favourite-button"
//         onClick={handleFavouriteToggle}
//       >
//         {isFavourite ? "Go to Favourites" : "Add to Favourites"}
//       </button>
//     </div>
//   );
// };

// export default Recipe;
