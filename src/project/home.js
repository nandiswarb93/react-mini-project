// import Navbar from "./navbar";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { RecipeContext } from "./navigator";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Home = () => {
//   const { recipeList, addFavDishHandler } = useContext(RecipeContext);
//   const [search, setSearch] = useState("");
//   const [searchList, setSearchList] = useState([]);
//   const navigate = useNavigate();

//   const addFoodHandler = (eachFood) => {
//     addFavDishHandler(eachFood);
//   };

//   const goToViewMore = (id) => {
//     navigate(`/Recipe/${id}`);
//   };

//   const goToFavouriteHandler = () => {
//     navigate("/favourite");
//   };

//   const searchHandler = (event) => {
//     const userEntered = event.target.value;
//     setSearch(userEntered);
//   };
//   const submitHandler = () => {
//     if (search.length === 0) {
//       toast("please enter some thing to get");
//     } else {
//       console.log("search for : " + search);
//     }
//   };

//   const searchData = async () => {
//     try {
//       const { data, status } = await axios.get(
//         `https://dummyjson.com/recipes/search?q=${search}`
//       );
//       if (status == 200) {
//         setSearchList(data.recipes);
//       }
//     } catch (e) {
//       console.log("error", e);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <input
//         type="text"
//         id="search"
//         placeholder="search for recipe item"
//         value={search}
//         onChange={searchHandler}
//       ></input>

//       {searchList.length > 0 &&
//         searchList.map((each) => (
//           <div key={each.id}>
//             <h4>{each.name}</h4>
//             <img src={each.image} width={100} height={100} alt={each.name} />
//             <button onClick={() => goToViewMore(each.id)}>View more</button>
//             {each.existingInFavourite ? (
//               <button onClick={goToFavouriteHandler}>Go to favourite</button>
//             ) : (
//               <button onClick={() => addFoodHandler(each)}>
//                 Add to favourite
//               </button>
//             )}
//           </div>
//         ))}
//       <ToastContainer />
//     </>
//   );
// };

// export default Home;

// import Navbar from "./navbar";
// import { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { RecipeContext } from "./navigator";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Home = () => {
//   const { recipeList, addFavDishHandler } = useContext(RecipeContext);
//   const [search, setSearch] = useState("");
//   const [searchList, setSearchList] = useState([]);
//   const navigate = useNavigate();

//   const addFoodHandler = (eachFood) => {
//     addFavDishHandler(eachFood);
//   };

//   const goToViewMore = (id) => {
//     navigate(`/Recipe/${id}`);
//   };

//   const goToFavouriteHandler = () => {
//     navigate("/favourite");
//   };

//   const fetchSearchResults = async (query) => {
//     if (query.length === 0) {
//       setSearchList([]);
//       return;
//     }

//     try {
//       const { data, status } = await axios.get(
//         `https://dummyjson.com/recipes/search?q=${query}`
//       );
//       if (status === 200) {
//         setSearchList(data.recipes);
//       }
//     } catch (error) {
//       console.error("Error fetching search results", error);
//       toast.error("Failed to fetch search results.");
//     }
//   };

//   useEffect(() => {
//     fetchSearchResults(search);
//   }, [search]);

//   const searchHandler = (event) => {
//     const userEntered = event.target.value;
//     setSearch(userEntered);
//   };

//   const recipesToDisplay = search.length === 0 ? recipeList : searchList;

//   return (
//     <>
//       <Navbar />

//       <input
//         type="text"
//         id="search"
//         placeholder="Search for recipe item"
//         value={search}
//         onChange={searchHandler}
//       />

//       {recipesToDisplay.length > 0 ? (
//         recipesToDisplay.map((each) => (
//           <div key={each.id}>
//             <h4>{each.name}</h4>
//             <img src={each.image} width={100} height={100} alt={each.name} />
//             <button onClick={() => goToViewMore(each.id)}>View More</button>
//             {each.existingInFavourite ? (
//               <button onClick={goToFavouriteHandler}>Go to Favourite</button>
//             ) : (
//               <button onClick={() => addFoodHandler(each)}>
//                 Add to Favourite
//               </button>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No results found.</p>
//       )}

//       <ToastContainer />
//     </>
//   );
// };

// export default Home;

import Navbar from "./navbar";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "./navigator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const { recipeList, addFavDishHandler } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const addFoodHandler = (eachFood) => {
    addFavDishHandler(eachFood);
  };

  const goToViewMore = (id) => {
    navigate(`/Recipe/${id}`);
  };

  const goToFavouriteHandler = () => {
    navigate("/favourite");
  };

  const fetchSearchResults = async (query) => {
    if (query.length === 0) {
      setSearchList([]);
      return;
    }

    try {
      const { data, status } = await axios.get(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      if (status === 200) {
        setSearchList(data.recipes);
      }
    } catch (error) {
      console.error("Error fetching search results", error);
      toast.error("Failed to fetch search results.");
    }
  };

  useEffect(() => {
    fetchSearchResults(search);
  }, [search]);

  const searchHandler = (event) => {
    const userEntered = event.target.value;
    setSearch(userEntered);
  };

  const recipesToDisplay = search.length === 0 ? recipeList : searchList;

  return (
    <div className="home-container">
      <Navbar />

      <div className="home-search-container">
        <input
          type="text"
          id="search"
          placeholder="Search for recipe item"
          value={search}
          onChange={searchHandler}
          className="home-search-input"
        />
      </div>

      <div className="home-recipe-list">
        {recipesToDisplay.length > 0 ? (
          recipesToDisplay.map((each) => (
            <div key={each.id} className="home-recipe-card">
              <h4>{each.name}</h4>
              <img src={each.image} alt={each.name} />
              <button
                onClick={() => goToViewMore(each.id)}
                className="view-more-button"
              >
                View More
              </button>
              {each.existingInFavourite ? (
                <button
                  onClick={goToFavouriteHandler}
                  className="go-to-favourite-button"
                >
                  Go to Favourite
                </button>
              ) : (
                <button
                  onClick={() => addFoodHandler(each)}
                  className="add-to-favourite-button"
                >
                  Add to Favourite
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
