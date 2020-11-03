import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { ReactElement } from "react";

interface Props {
  title: string;
  gridItemCount: number;
  children?: ReactElement;
  createLink: string;
}

export default function GridPageWrapper({
  title,
  gridItemCount,
  children,
  createLink,
}: Props) {
  return (
    <Container>
      <br />
      <Card>
        <Card.Header>
          <Container>
            <Row>
              <Col sm="10">
                <h1>{title}</h1>
              </Col>
              <Col sm="2">
                <Link to={createLink}>
                  <Button variant="primary" size="sm">
                    Create {title}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
        <Card.Footer className="text-muted">{gridItemCount} items</Card.Footer>
      </Card>
    </Container>
  );
}
