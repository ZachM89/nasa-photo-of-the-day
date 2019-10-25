import React from "react";

export const PhotoInfo = props => {
  return (

      <div>
            <h2>{props.photoInfo.title}</h2>
            <h3>By: {props.photoInfo.copyright}</h3>
            <h3>Date: {props.photoInfo.date}</h3>
            <p>{props.photoInfo.explanation}</p>
      </div>
  );
};
export default PhotoInfo;