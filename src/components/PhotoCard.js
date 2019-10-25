import React from "react";

export const PhotoCard = props => {
  return (
      <div>
            <img src={props.photoProps.url} alt="Dark Seahorse in Cepheus"/>
      </div>
  );
};
export default PhotoCard;