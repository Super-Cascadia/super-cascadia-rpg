import React, { ReactChildren } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface Props {
  children: ReactChildren;
}

export default function GridPageWrapperV2({ children }: Props) {
  return (
    <Container>
      <br />
      <Row>
        <Col md={10}>
          <h1>Icons</h1>
        </Col>
        <Col md={2}>
          <Button variant={"primary"} size={"lg"} block onClick={() => {}}>
            New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}
