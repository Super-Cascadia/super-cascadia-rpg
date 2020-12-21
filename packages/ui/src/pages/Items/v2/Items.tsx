import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";

export default function Items() {
  return (
    <Container>
      <br />
      <Row>
        <Col md={10}>
          <h1>Items</h1>
        </Col>
        <Col md={2}>
          <Button variant={"primary"} size={"lg"} block onClick={() => {}}>
            New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
