import Navbar from "./navbar";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "./navigator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const { recipeList, addFavDishHandler, accname } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const addFoodHandler = (eachFood) => {
    addFavDishHandler(eachFood);
    const newUpdatedData = recipeList.map((each) => {
      if (each.id === eachFood.id) {
        return { ...each, existingInFavourite: true };
      } else {
        return each;
      }
    });
    setSearchList(newUpdatedData);
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
        const updatedList = data.recipes.map((each) => {
          return { ...each, existingInFavourite: false };
        });
        setSearchList(updatedList);
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

      <center>
        <h4>Welcome {accname}</h4>
      </center>
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
