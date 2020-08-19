import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import React from "react";

interface Props {
  title: string;
}

export default function Loading({ title }: Props) {
  return (
    <Container>
      <Card>
        <Card.Header>
          <h1>{title}</h1>
        </Card.Header>
        <Card.Body>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Card.Body>
      </Card>
    </Container>
  );
}
