import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
//import {Container, Row } from "reactstrap";

export default function PhotoList() {
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

    return (
        <div className="photo">
            {pics.
                return(
                    <PhotoCard 
                        address={pics.url}
                        title={pics.title}
                        artist={pics.copyright}
                        info={pics.explanation}
                        date={pics.date}
                    />
                )
            }
            {/* {pics.map(photo => {
                return(
                    <PhotoCard 
                        address={photo.url}
                        title={photo.title}
                        artist={photo.copyright}
                        info={photo.explanation}
                        date={photo.date}
                    />
                );
            })} */}
        </div>
    );
}