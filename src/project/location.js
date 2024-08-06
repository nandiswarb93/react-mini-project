// import Navbar from "./navbar";

// const Location = () => {
//   return (
//     <>
//       <Navbar />

//       <center>
//         <h2>Find Location here</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.287344860293!2d78.3991123746292!3d17.493791499732207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91eb5a39ee2b%3A0x971656159cd2ef62!2sKPHB%20Colony!5e0!3m2!1sen!2sin!4v1722943532894!5m2!1sen!2sin"
//           width="800"
//           height="600"
//           allowfullscreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </center>
//     </>
//   );
// };
// export default Location;

import Navbar from "./navbar";
import "./Location.css"; // Import the CSS file

const Location = () => {
  return (
    <div className="location-container">
      <Navbar />

      <h2 className="location-title">Find Location Here</h2>
      <iframe
        className="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.287344860293!2d78.3991123746292!3d17.493791499732207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91eb5a39ee2b%3A0x971656159cd2ef62!2sKPHB%20Colony!5e0!3m2!1sen!2sin!4v1722943532894!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
