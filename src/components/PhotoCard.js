import React from "react";
//import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";

export const PhotoCard = props => {
  return (

      <div>
          {/* <div className="bottom"> */}
                <h2>address: {props.url}</h2>
                title: {props.title}
                artist: {props.copyright}
                info: {props.explanation}
                date: {props.date}
          {/* </div> */}
      </div>
    // <Col xs="6" sm="4" lg="2" key={props.id}>
    //   <Card className="">
    //     <CardImg
    //       width="100%"
    //       src="https://source.unsplash.com/random"
    //       alt="Card image cap"
    //     />
    //     <CardBody>
    //       <CardTitle>Film title: {props.title}</CardTitle>
    //       <CardText>{props.description}</CardText>
    //       <CardText>Director: {props.director}</CardText>
    //       <CardText>
    //         <small className="text-muted">
    //           Release date: {props.release_date}
    //         </small>
    //       </CardText>
    //     </CardBody>
    //   </Card>
    // </Col>
  );
};
export default PhotoCard;