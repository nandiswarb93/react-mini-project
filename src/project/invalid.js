// const Invalid = () => {
//   return (
//     <>
//       <button>Go To HOME</button>
//       <h1>hello this is invalid screen</h1>
//     </>
//   );
// };
// export default Invalid;

import { useNavigate } from "react-router-dom";
import "./Invalid.css"; // Assuming the CSS file is named Invalid.css

const Invalid = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <div className="invalid-container">
      <button className="go-home-button" onClick={goToHome}>
        Go To HOME
      </button>
    </div>
  );
};

export default Invalid;
