// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect, createContext } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import Home from "./home";
// import Login from "./login";
// import Registration from "./registration";
// import Invalid from "./invalid";
// import Menu from "./menu";
// import Location from "./location";
// import Recipes from "./recipes.js";
// import Favourite from "./favourite.js";
// import Recipe from "./recipes";

// export const RecipeContext = createContext();

// const Navigator = () => {
//   const [recipeList, setRecipeList] = useState([]);
//   const [favDish, setFavDish] = useState([]);

//   useEffect(() => {
//     fetchRecipe();
//   }, []);

//   const fetchRecipe = async () => {
//     try {
//       const { data, status } = await axios.get("https://dummyjson.com/recipes");
//       if (status === 200) {
//         const newData = data.recipes.map((EachData) => ({
//           ...EachData,
//           existingInFavourite: false,
//         }));
//         setRecipeList(newData);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const addFavDishHandler = (newDish) => {
//     const recipeExist = favDish.find((eachFood) => eachFood.id === newDish.id);

//     const newRecipeList = recipeList.map((eachRecipe) => {
//       if (eachRecipe.id == newDish.id) {
//         return { ...eachRecipe, existingInFavourite: true };
//       } else {
//         return eachRecipe;
//       }
//     });
//     setRecipeList(newRecipeList);
//     if (recipeExist) {
//       toast("already exist the food recipe");
//     } else {
//       setFavDish([...favDish, newDish]);
//       toast.success("added to cart", { position: "top-right" });
//     }
//   };

//   const removeFoodHandler = (id) => {
//     const newRecipeList = recipeList.map((eachRecipe) => {
//       if (eachRecipe.id == id) {
//         return { ...eachRecipe, existingInFavourite: false };
//       } else {
//         return eachRecipe;
//       }
//     });
//     setRecipeList(newRecipeList);
//     const newFavList = favDish.filter((eachDish) => eachDish.id !== id);
//     setFavDish(newFavList);
//   };

//   return (
//     <>
//       <RecipeContext.Provider
//         value={{
//           recipeList: recipeList,
//           favDish: favDish,
//           addFavDishHandler: addFavDishHandler,
//           removeFoodHandler: removeFoodHandler,
//         }}
//       >
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Recipe/:id" element={<Recipe />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route path="/location" element={<Location />} />
//             <Route path="/menu/:id" element={<Recipes />} />
//             <Route path="/favourite" element={<Favourite />} />
//             <Route path="/*" element={<Invalid />} />
//             <Route path="/menu" element={<Menu />} />
//           </Routes>
//         </BrowserRouter>
//         <ToastContainer />
//       </RecipeContext.Provider>
//     </>
//   );
// };

// export default Navigator;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Home from "./home";
import Login from "./login";
import Registration from "./registration";
import Invalid from "./invalid";
import Menu from "./menu";
import Location from "./location";
import Recipes from "./recipes"; // Ensure the correct component for this path
import Favourite from "./favourite";
import Recipe from "./recipes"; // Changed to correct import

export const RecipeContext = createContext();

const Navigator = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favDish, setFavDish] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        const newData = data.recipes.map((EachData) => ({
          ...EachData,
          existingInFavourite: false,
        }));
        setRecipeList(newData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addFavDishHandler = (newDish) => {
    const recipeExist = favDish.find((eachFood) => eachFood.id === newDish.id);

    const newRecipeList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == newDish.id) {
        return { ...eachRecipe, existingInFavourite: true };
      } else {
        return eachRecipe;
      }
    });
    setRecipeList(newRecipeList);
    if (recipeExist) {
      toast("Already exists in the favourites");
    } else {
      setFavDish([...favDish, newDish]);
      toast.success("Added to favourites", { position: "top-right" });
    }
  };

  const removeFoodHandler = (id) => {
    const newRecipeList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == id) {
        return { ...eachRecipe, existingInFavourite: false };
      } else {
        return eachRecipe;
      }
    });
    setRecipeList(newRecipeList);
    const newFavList = favDish.filter((eachDish) => eachDish.id !== id);
    setFavDish(newFavList);
  };

  return (
    <>
      <RecipeContext.Provider
        value={{
          recipeList,
          favDish,
          addFavDishHandler,
          removeFoodHandler,
          searchResults,
          setSearchResults,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipe/:id" element={<Recipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/location" element={<Location />} />
            <Route path="/menu/:id" element={<Recipes />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/*" element={<Invalid />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </RecipeContext.Provider>
    </>
  );
};

export default Navigator;
