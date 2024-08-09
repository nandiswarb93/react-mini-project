import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [usernameerror, setUserError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [mobileerror, setMobileError] = useState("");
  const navigate = useNavigate();

  const usernameHandle = (event) => {
    event.preventDefault();
    const userEntered = event.target.value;
    setUserName(userEntered);
    if (userEntered.length >= 8 && userEntered.length <= 30) {
      setUserError("");
    } else {
      setUserError("Username should be 8 to 30 characters long.");
    }
  };

  const passwordHandle = (event) => {
    event.preventDefault();
    const passwordEntered = event.target.value;
    setPassword(passwordEntered);
    if (
      /[!@#$%^&*()]/.test(passwordEntered) && // special symbol
      /[A-Z]/.test(passwordEntered) && // capital letter
      /[a-z]/.test(passwordEntered) && // lowercase letter
      /[0-9]/.test(passwordEntered) && // digit
      passwordEntered.length >= 8 &&
      passwordEntered.length <= 15
    ) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password should be 8 to 15 characters long and include at least one special symbol, one uppercase letter, one lowercase letter, and one digit."
      );
    }
  };

  const mobileHandle = (event) => {
    event.preventDefault();
    const mobileEntered = event.target.value;
    setMobile(mobileEntered);
    if (/^\d{10}$/.test(mobileEntered)) {
      setMobileError("");
    } else {
      setMobileError("Mobile number should be exactly 10 digits.");
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (!usernameerror && !passworderror && !mobileerror) {
      alert("Form submitted successfully!");
      navigate("/login");
    } else {
      alert("Invalid credentials. Please fix the errors and try again.");
    }
  };

  return (
    <>
      <Navbar />
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
        </div>
        <div className="form-group">
          <label htmlFor="exampleInpuMobile">Mobile : </label>
          <input
            type="text"
            className="form-control"
            id="exampleInpuMobile"
            placeholder="Mobile Number"
            value={mobile}
            onChange={mobileHandle}
          />
          {mobileerror && <p className="text-danger">{mobileerror}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandle}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Registration;
