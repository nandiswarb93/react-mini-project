import { NavLink } from "react-router-dom";
import { RecipeContext } from "./navigator";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    const userEntered = event.target.value;
    setSearch(userEntered);
  };
  const submitHandler = () => {
    if (search.length === 0) {
      toast("please enter some thing to get");
    } else {
      console.log("search for : " + search);
    }
  };

  const { favDish } = useContext(RecipeContext);
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "black",
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" style={linkStyle}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/registration" style={linkStyle}>
              Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/location" style={linkStyle}>
              Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" style={linkStyle}>
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Favourite" style={linkStyle}>
              favourite's {favDish.length}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import { NavLink } from "react-router-dom";
// import { useContext, useState } from "react";
// import { RecipeContext } from "./navigator";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Navbar.css"; // Import the CSS file

// const Navbar = () => {
//   const { darkmode } = useContext(RecipeContext);

//   const { favDish } = useContext(RecipeContext);

//   return (
//     <nav
//       className={`navbar-container navbar-expand-sm bg-${
//         darkmode ? "dark" : "light"
//       } navbar-dark`}
//     >
//       <div className="container-fluid">
//         <ul className="navbar-list">
//           <li className="navbar-item">
//             <NavLink to="/" className="navbar-link" end>
//               Home
//             </NavLink>
//           </li>
//           <li className="navbar-item">
//             <NavLink to="/login" className="navbar-link">
//               Login
//             </NavLink>
//           </li>
//           <li className="navbar-item">
//             <NavLink to="/registration" className="navbar-link">
//               Registration
//             </NavLink>
//           </li>
//           <li className="navbar-item">
//             <NavLink to="/location" className="navbar-link">
//               Location
//             </NavLink>
//           </li>
//           <li className="navbar-item">
//             <NavLink to="/menu" className="navbar-link">
//               Menu
//             </NavLink>
//           </li>
//           <li className="navbar-item navbar-favourites">
//             <NavLink to="/favourite" className="navbar-link">
//               Favourites
//             </NavLink>
//             {favDish.length > 0 && (
//               <span className="navbar-favourites-count">{favDish.length}</span>
//             )}
//           </li>
//           <li className="navbar-item">
//             <NavLink to="/setting" className="navbar-link">
//               Settings
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <ToastContainer />
//     </nav>
//   );
// };

// export default Navbar;
