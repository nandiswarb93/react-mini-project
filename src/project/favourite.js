import Navbar from "./navbar";

import { useContext } from "react";
import { RecipeContext } from "./navigator";

const Favourite = () => {
  const { favDish, removeFoodHandler } = useContext(RecipeContext);

  const delFoodHandler = (each) => {
    removeFoodHandler(each.id);
  };

  return (
    <>
      <Navbar />
      <h1>hello this is Favourite screen</h1>

      {favDish.length > 0 ? (
        <>
          {favDish.map((each) => {
            return (
              <div key={each.id}>
                <h5>{each.name}</h5>
                <img src={each.image} width={100} height={100}></img>
                <button onClick={() => delFoodHandler(each)}>Remove</button>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h4>No dishes found</h4>
        </>
      )}
    </>
  );
};
export default Favourite;
