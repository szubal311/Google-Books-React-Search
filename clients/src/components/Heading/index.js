import React from "react";
import {Jumbotron, Container} from "react-bootstrap";
import "./style.css";

function Heading() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Time for a Good Book</h1>
        <p>
          Set back, relax, and enjoy the ride.
        </p>
        <a className="search" href="/">Search for a New Book</a>
        <a className="saved" href="/">Save</a>
      </Container>
    </Jumbotron>
  );
}

export default Heading;