import React from "react";
import "./App.css";


//api key - rq6CnqdCTwMdnIzdacBCm3J2Cf65dFWV8eEhZOc6
// Account Email: 89foxlx@gmail.com
// Account ID: bbcc3c07-b71e-4da8-ac6d-d36b53180c49
import PhotoCard from "./components/PhotoCard";
import PhotoList from "./components/NasaPhotos";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      {/* <PhotoList/> */}
      <PhotoCard/>
    </div>
  );
}

export default App;
