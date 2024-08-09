import React, { useState, useContext } from "react";
import { RecipeContext } from "./navigator";
import Navbar from "./navbar";

function Setting() {
  const { accName, darkmode, changeAccountName } = useContext(RecipeContext);
  const [userEntered, setUserEntered] = useState("");

  const userHandler = (e) => {
    e.preventDefault();
    setUserEntered(e.target.value);
  };

  const nameChange = () => {
    changeAccountName(userEntered);
  };

  return (
    <>
      <Navbar />
      <h4>Welcome {accName}</h4>
      <label htmlFor="username">Want to change username?</label>
      <input
        type="text"
        id="username"
        value={userEntered}
        onChange={userHandler}
      ></input>
      <br />
      <button onClick={nameChange}>Change UserName</button>
    </>
  );
}

export default Setting;
