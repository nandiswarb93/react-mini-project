import Navbar from "./navbar";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "./navigator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const { addfavouritedishhaHandler, accName } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const addfoodhandler = (eachfood) => {
    addfavouritedishhaHandler(eachfood);
    setSearchList(
      searchList.map((recipe) =>
        recipe.id === eachfood.id
          ? { ...recipe, existingInFavourite: true }
          : recipe
      )
    );
  };

  const goToViewMore = (id) => {
    navigate(`/Recipe/${id}`);
  };

  const goToFavouriteHandler = () => {
    navigate("/favourite");
  };

  const fetchSearchResults = async (query) => {
    try {
      const { data, status } = await axios.get(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      if (status === 200) {
        const updatedList = data.recipes.map((each) => {
          return { ...each, existingInFavourite: false, quantity: 1 };
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
    setSearch(event.target.value);
  };

  return (
    <div className="home-container">
      <Navbar />
      <center>
        <h4>Welcome {accName}</h4>
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
      <div className="card-container">
        {searchList.map((each) => (
          <div key={each.id} className="card">
            <img src={each.image} alt={each.name} />
            <h4>{each.name}</h4>
            <h5>Rating: {each.rating}</h5>
            <p className="card-description">MealType: {each.mealType}</p>
            <div className="card-buttons">
              <button onClick={() => goToViewMore(each.id)}>View More</button>
              {each.existingInFavourite ? (
                <button onClick={goToFavouriteHandler}>Go to Fav</button>
              ) : (
                <button onClick={() => addfoodhandler(each)}>Add to Fav</button>
              )}
              <div className="quantity-buttons">
                <button>-</button>
                <span className="quantity">{each.quantity}</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
