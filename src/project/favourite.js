import Navbar from "./navbar";
import { useContext } from "react";
import { RecipeContext } from "./navigator";
import "./Favourite.css"; // Import the CSS file

const Favourite = () => {
  const { favDish, removeFoodHandler } = useContext(RecipeContext);

  const delFoodHandler = (each) => {
    removeFoodHandler(each.id);
  };

  return (
    <>
      <Navbar />
      <h1 className="favourite-header">Hello, this is the Favourite screen</h1>

      {favDish.length > 0 ? (
        <div className="favourite-grid">
          {favDish.map((each) => (
            <div key={each.id} className="favourite-card">
              <h5 className="favourite-card-title">{each.name}</h5>
              <img
                src={each.image}
                className="favourite-card-image"
                alt={each.name}
              />
              <h5 className="favourite-card-rating">Rating: {each.rating}</h5>
              <div className="favourite-card-actions">
                <button onClick={() => delFoodHandler(each)}>Remove</button>
                <button>-</button>
                <button>{each.quantity}</button>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="favourite-no-dishes">No dishes found</h4>
      )}
    </>
  );
};

export default Favourite;
