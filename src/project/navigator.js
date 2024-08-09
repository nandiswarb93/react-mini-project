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
import Recipes from "./recipes.js";
import Favourite from "./favourite.js";
import Recipe from "./recipes";
import Setting from "./setting.js";

export const RecipeContext = createContext();

const Navigator = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favDish, setFavDish] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        const newData = data.recipes.map((EachData) => ({
          ...EachData,
          isFav: false,
        }));
        setRecipeList(newData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addfavouritedishhaHandler = (newdish) => {
    const recipeexist = favDish.find((eachfood) => eachfood.id === newdish.id);

    if (recipeexist) {
      toast.error("already existed !", {
        position: "top-left",
      });
    } else {
      setFavDish([...favDish, newdish]);
      toast.success("added food successfully !", {
        position: "top-right",
      });
    }
  };

  const removeFoodHandler = (id) => {
    setFavDish(favDish.filter((eachDish) => eachDish.id !== id));
    setRecipeList(
      recipeList.map((eachRecipe) =>
        eachRecipe.id === id ? { ...eachRecipe, isFav: false } : eachRecipe
      )
    );
  };

  const changeAccountName = (newName) => {
    changeAccName(newName);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeList,
        favDish,
        addfavouritedishhaHandler,
        removeFoodHandler,
        changeAccountName,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
          <Route path="/location" element={<Location />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/*" element={<Invalid />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RecipeContext.Provider>
  );
};

export default Navigator;
