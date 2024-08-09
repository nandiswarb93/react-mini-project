import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [product, setProduct] = useState([]);
  const RecipeData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setProduct(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching the recipes", error);
    }
  };

  useEffect(() => {
    RecipeData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid">
        {product.map((each) => (
          <div key={each.id}>
            <img src={each.image} width={200} height={200} />
            <button>{each.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;

// import Navbar from "./navbar";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Menu.css"; // Ensure the CSS file is correctly linked

// const Menu = () => {
//   const [product, setProduct] = useState([]);
//   const navigate = useNavigate();

//   const RecipeData = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/recipes");
//       if (response.status === 200) {
//         setProduct(response.data.recipes);
//       }
//     } catch (error) {
//       console.error("Error fetching the recipes", error);
//     }
//   };

//   useEffect(() => {
//     RecipeData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="menu-grid">
//         {product.map((each) => (
//           <div key={each.id} className="menu-item">
//             <img src={each.image} className="menu-image" alt={each.name} />
//             <button className="menu-button">{each.name}</button>
//             <p>prepTime : {each.prepTimeMinutes}</p>
//             <p>serving : {each.servings}</p>
//             <p>rating : {each.rating}</p>
//             <p> Meal type : {each.mealType[0]}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Menu;
