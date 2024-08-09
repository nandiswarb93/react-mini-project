// import Navbar from "./navbar";
// import { useState } from "react";

// const Registration = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [usernameerror, setUserError] = useState(false);
//   const [passworderror, setPasswordError] = useState(false);
//   const [mobileerror, setMobileError] = useState(false);

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
//   const mobileHandle = (event) => {
//     event.preventDefault();
//     const mobileEntered = event.target.value;
//     setMobile(mobileEntered);
//     if (mobileEntered.length == 0) {
//       setMobileError(true);
//     } else {
//       setMobileError("should be in 10 digits");
//     }
//   };

//   const submitHandle = () => {
//     if (usernameerror && passworderror && mobileerror) {
//       alert("form success");
//     } else {
//       alert("invalid credential");
//     }
//   };

//   return (
//     <>
//       <Navbar />
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
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleInputPassword1">Mobile : </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInpuMobile"
//             placeholder="Mobile Number"
//             value={mobile}
//             onChange={mobileHandle}
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={submitHandle}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };
// export default Registration;
import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./registration.css"; // Import the CSS file

const Registration = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [usernameerror, setUserError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [mobileerror, setMobileError] = useState("");
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

  const mobileHandle = (event) => {
    const mobileEntered = event.target.value;
    setMobile(mobileEntered);
    const mobileRegex = /^[0-9]{10}$/;
    if (mobileRegex.test(mobileEntered)) {
      setMobileError("");
    } else {
      setMobileError("Mobile number should be 10 digits.");
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (
      !usernameerror &&
      !passworderror &&
      !mobileerror &&
      username &&
      password &&
      mobile
    ) {
      alert("Form submission successful");
      localStorage.setItem("recipeusername", username);
      localStorage.setItem("recipepassword", password);
      navigate("/login")
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <center><h2>Register Here</h2></center>
      <div className="registration-form-container">
        
        <form>
          <div className="registration-form-group">
            <label htmlFor="exampleInputEmail1">Email address:</label>
            <input
              type="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={username}
              onChange={usernameHandle}
            />
            {usernameerror && <p className="error-message">{usernameerror}</p>}
          </div>
          <div className="registration-form-group">
            <label htmlFor="exampleInputPassword1">Password:</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={passwordHandle}
            />
            {passworderror && <p className="error-message">{passworderror}</p>}
          </div>
          <div className="registration-form-group">
            <label htmlFor="exampleInpuMobile">Mobile:</label>
            <input
              type="text"
              id="exampleInpuMobile"
              placeholder="Mobile Number"
              value={mobile}
              onChange={mobileHandle}
            />
            {mobileerror && <p className="error-message">{mobileerror}</p>}
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

export default Registration;
