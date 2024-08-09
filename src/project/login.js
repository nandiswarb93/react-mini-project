import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameerror, setUserError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const navigate = useNavigate();

  const usernameHandle = (event) => {
    event.preventDefault();
    const userEntered = event.target.value;
    setUserName(userEntered);
    if (userEntered.length >= 8 && userEntered.length <= 30) {
      setUserError("");
      localStorage.setItem("recipeusername", userEntered);
    } else {
      setUserError("Username should be 8 to 30 characters long.");
    }
  };

  const passwordHandle = (event) => {
    event.preventDefault();
    const passwordEntered = event.target.value;
    setPassword(passwordEntered);
    if (
      /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,15}$/.test(
        passwordEntered
      )
    ) {
      setPasswordError("");
      localStorage.setItem("recipepassword", passwordEntered);
    } else {
      setPasswordError(
        "Password should be 8 to 15 characters long and include at least one special symbol, one uppercase letter, one lowercase letter, and one digit."
      );
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const u = localStorage.getItem("recipeusername");
    const p = localStorage.getItem("recipepassword");

    if (!usernameerror && !passworderror && u === username && p === password) {
      alert("Form submitted successfully!");
      navigate("/home");
    } else {
      alert("Invalid credentials. Please fix the errors and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <h1>Welcome to the Login Screen</h1>

      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address : </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={usernameHandle}
          />
          {usernameerror && <p className="text-danger">{usernameerror}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password : </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={passwordHandle}
          />
          {passworderror && <p className="text-danger">{passworderror}</p>}
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandle}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
