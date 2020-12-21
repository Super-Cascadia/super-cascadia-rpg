import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
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
