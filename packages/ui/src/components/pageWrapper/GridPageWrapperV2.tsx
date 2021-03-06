import React, { ReactChildren, ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface Props {
  title: string;
  children: ReactElement;
  handleNewButtonClick: () => void;
}

export default function GridPageWrapperV2({
  children,
  title,
  handleNewButtonClick,
}: Props) {
  return (
    <Container fluid>
      <br />
      <Row>
        <Col md={10}>
          <h1>{title}</h1>
        </Col>
        <Col md={2}>
          <Button
            variant={"primary"}
            size={"lg"}
            block
            onClick={handleNewButtonClick}
          >
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
