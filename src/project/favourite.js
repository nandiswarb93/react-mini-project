// import Navbar from "./navbar";

// import { useContext } from "react";
// import { RecipeContext } from "./navigator";

// const Favourite = () => {
//   const { favDish, removeFoodHandler } = useContext(RecipeContext);

//   const delFoodHandler = (each) => {
//     removeFoodHandler(each.id);
//   };

//   return (
//     <>
//       <Navbar />
//       <h1>hello this is Favourite screen</h1>

//       {favDish.length > 0 ? (
//         <>
//           {favDish.map((each) => {
//             return (
//               <div key={each.id}>
//                 <h5>{each.name}</h5>
//                 <img src={each.image} width={100} height={100}></img>
//                 <button onClick={() => delFoodHandler(each)}>Remove</button>
//               </div>
//             );
//           })}
//         </>
//       ) : (
//         <>
//           <h4>No dishes found</h4>
//         </>
//       )}
//     </>
//   );
// };
// export default Favourite;

import Navbar from "./navbar";
import { useContext } from "react";
import { RecipeContext } from "./navigator";
import "./Favourite.css"; // Ensure the CSS file is correctly linked

const Favourite = () => {
  const { favDish, removeFoodHandler } = useContext(RecipeContext);

  const delFoodHandler = (each) => {
    removeFoodHandler(each.id);
  };

  return (
    <>
      <Navbar />
      <div className="favourite-container">
        <h1 className="favourite-heading">
          Hello, this is the Favourite screen
        </h1>

        {favDish.length > 0 ? (
          <div className="favourite-items">
            {favDish.map((each) => (
              <div key={each.id} className="favourite-item">
                <h5 className="favourite-item-name">{each.name}</h5>
                <img
                  src={each.image}
                  className="favourite-item-image"
                  alt={each.name}
                />
                <button
                  className="favourite-remove-button"
                  onClick={() => delFoodHandler(each)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h4 className="no-dishes-message">No dishes found</h4>
        )}
      </div>
    </>
  );
};

export default Favourite;
