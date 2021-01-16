import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import background from "../../images/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg";

export default function Home() {
  const style = {
    backgroundImage: "url(" + background + ")",
  };

  return (
    <>
      <Jumbotron fluid style={style}>
        <Container>
          <h1>Super Cascadia RPG Admin Homepage</h1>
          <p>
            This is the homepage for the Super Cascadia RPG administration
            interface.
          </p>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
