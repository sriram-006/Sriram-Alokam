import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificateCards(props) {
  return (
    <Card className="certificate-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       
        <Button variant="primary" href="https://www.credly.com/badges/613857b5-e597-4e96-abf7-832d6af97ee4" target="_blank">
          View Certificate
        </Button> 
        
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;
