// import Navbar from "./navbar";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [usernameerror, setUserError] = useState(false);
//   const [passworderror, setPasswordError] = useState(false);
//   const navigate = useNavigate();

//   const usernameHandle = (event) => {
//     event.preventDefault();
//     const userEntered = event.target.value;
//     setUserName(userEntered);
//     if (userEntered.length > 8 && userEntered.length < 15) {
//       setUserError(true);
//     } else {
//       setUserError("username should be in length of 8 to 15");
//     }
//   };
//   const passwordHandle = (event) => {
//     event.preventDefault();
//     const passwordEntered = event.target.value;
//     setPassword(passwordEntered);
//     if (
//       /!@#$%^&*()[1-9][A-Z][a-z]/gi.test(passwordEntered) &&
//       passwordEntered.length > 8 &&
//       passwordEntered.length < 15
//     ) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(
//         "password should be in length of 8 to 15 and special symbol,capitals"
//       );
//     }
//   };

//   const submitHandle = () => {
//     const u = localStorage.getItem("recipeusername");
//     const p = localStorage.getItem("recipepassword");

//     if (usernameerror && passworderror && u == username && p === password) {
//       alert("form success");
//       navigate("/");
//     } else {
//       alert("invalid credential");
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <h1>hello this is Login screen</h1>

//       <form>
//         <div className="form-group">
//           <label htmlFor="exampleInputEmail1">Email address : </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             value={username}
//             onChange={usernameHandle}
//           />
//           {usernameerror && <p>username satisfieds</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleInputPassword1">Password : </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//             value={password}
//             onChange={passwordHandle}
//           />
//           {passworderror && <p>password satisfied</p>}
//           <br />
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={submitHandle}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Login;

import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameerror, setUserError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const navigate = useNavigate();

  const usernameHandle = (event) => {
    const userEntered = event.target.value;
    setUserName(userEntered);
    if (userEntered.length >= 8 && userEntered.length <= 30) {
      setUserError("");
    } else {
      setUserError("Username should be between 8 to 30 characters.");
    }
  };

  const passwordHandle = (event) => {
    const passwordEntered = event.target.value;
    setPassword(passwordEntered);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,15}$/;
    if (passwordRegex.test(passwordEntered)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password should be 8-15 characters long and include at least one capital letter, one special character, and one number."
      );
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const u = localStorage.getItem("recipeusername");
    const p = localStorage.getItem("recipepassword");

    if (!usernameerror && !passworderror && u === username && p === password) {
      alert("Form submission successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="Enter email"
              value={username}
              onChange={usernameHandle}
            />
            {usernameerror && <p className="form-error">{usernameerror}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              placeholder="Password"
              value={password}
              onChange={passwordHandle}
            />
            {passworderror && <p className="form-error">{passworderror}</p>}
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={submitHandle}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
