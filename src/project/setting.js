import React, { useState, useContext } from "react";
import { RecipeContext } from "./navigator";
import Navbar from "./navbar";

function Setting() {
  const { accname, darkmode, changeAccountName } = useContext(RecipeContext);
  const [changeName, setChangeName] = useState("");
  const [userEntered, setUserEntered] = useState("");

  const userHandler = (e) => {
    e.preventDefault();
    setUserEntered(e.target.value);
  };

  const nameChange = () => {
    changeAccountName(userEntered);
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
    </>
  );
}

export default Setting;
