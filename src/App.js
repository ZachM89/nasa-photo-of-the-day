import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";

import PhotoCard from "./components/PhotoCard";
import PhotoInfo from "./components/PhotoInfo";
//api key - rq6CnqdCTwMdnIzdacBCm3J2Cf65dFWV8eEhZOc6
// Account Email: 89foxlx@gmail.com
// Account ID: bbcc3c07-b71e-4da8-ac6d-d36b53180c49

function App() {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=rq6CnqdCTwMdnIzdacBCm3J2Cf65dFWV8eEhZOc6`)
            .then(res => {
                //console.log(res);
                setPics(res.data);
            })
            .catch((err) => {
                console.log(`The error was: ${err}`);
            });
    }, []);
    
    //console.log(pics);

    return (
        <div className="App">
            <PhotoCard photoProps={pics}/>
            <PhotoInfo photoInfo={pics}/>
        </div>
    );
}

export default App;