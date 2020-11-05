import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { ReactElement, SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
  name: string;
  routeName: string;
  children?: ReactElement;
  handleSubmit: (event: SyntheticEvent) => void;
}

export const ObjectCreatePageWrapper = ({
  routeName,
  name,
  children,
  handleSubmit,
}: Props) => {
  return (
    <Container>
      <br />
      <Card>
        <Form onSubmit={handleSubmit}>
          <Card.Header>
            <h1>{name}</h1>
          </Card.Header>
          <Card.Body>{children}</Card.Body>
          <Card.Footer className="text-muted">
            <Form.Group role="form">
              <Button variant="primary" size="sm" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
};
