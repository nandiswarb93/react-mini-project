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
      {searchList.map((each) => (
        <div key={each.id}>
          <h4> Name of recipe : {each.name}</h4>
          <img src={each.image} width={100} height={100} alt={each.name} />
          <h5>Rating : {each.rating}</h5>
          <h4>Recipe Description : {each.description}</h4>
          <button onClick={() => goToViewMore(each.id)}>view more</button>
          {each.existingInFavourite ? (
            <button onClick={goToFavouriteHandler}>go to fav</button>
          ) : (
            <button onClick={() => addfoodhandler(each)}>add to fav</button>
          )}
          <button>-</button>
          <button>{each.quantity}</button>
          <button>+</button>
        </div>
      ))}

      <ToastContainer />
    </div>
  );
};

export default Home;
