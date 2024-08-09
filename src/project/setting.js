import React, { useState, useContext } from "react";
import { RecipeContext } from "./navigator";
import Navbar from "./navbar";

function Setting() {
  const { accname, darkmode, changeAccName } = useContext(RecipeContext);
  const [changeName, setChangeName] = useState("");
  const [userEntered, setUserEntered] = useState("");

  const userHandler = (e) => {
    e.preventDefault();
    setUserEntered(e.target.value);
  };

  const nameChange = () => {
    changeAccName(userEntered);
    setChangeName(userEntered);
  };

  return (
    <>
      <Navbar />
      <h4>Welcome {accname}</h4>
      <label htmlFor="username">Want to change username?</label>
      <input
        type="text"
        id="username"
        value={userEntered}
        onChange={userHandler}
      ></input>
      <br />
      <button onClick={nameChange}>Change UserName</button>
      {/* <button onClick= {}> Change Theme Here</button> */}
    </>
  );
}

export default Setting;

// import React, { useState, useContext } from "react";
// import { RecipeContext } from "./navigator";
// import Navbar from "./navbar";
// import "./Setting.css";
// function Setting() {
//   const { accname, darkmode, changeAccName } = useContext(RecipeContext);
//   const [changeName, setChangeName] = useState("");
//   const [userEntered, setUserEntered] = useState("");

//   const userHandler = (e) => {
//     e.preventDefault();
//     setUserEntered(e.target.value);
//   };

//   const nameChange = () => {
//     changeAccName(userEntered);
//     setChangeName(userEntered);
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className={`setting-container ${darkmode ? "dark-mode" : "dark-light"}`}
//       >
//         <h4 className="setting-welcome">Welcome {accname}</h4>
//         <label htmlFor="username" className="setting-label">
//           Want to change username?
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="setting-input"
//           value={userEntered}
//           onChange={userHandler}
//         ></input>
//         <br />
//         <button className="setting-button" onClick={nameChange}>
//           Change UserName
//         </button>
//       </div>
//     </>
//   );
// }

// export default Setting;
