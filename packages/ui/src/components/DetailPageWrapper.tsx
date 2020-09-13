import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { capitalize } from "lodash";
import Form from "react-bootstrap/Form";

interface Props {
  objectId: number;
  name: string;
  routeName: string;
  children?: ReactElement;
}

export default function DetailPageWrapper({
  routeName,
  objectId,
  name,
  children,
}: Props) {
  return (
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href={`/${routeName}`}>
          {capitalize(routeName)}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{objectId}</Breadcrumb.Item>
        <Breadcrumb.Item>View</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Header>
          <h1>{name}</h1>
        </Card.Header>
        <Card.Body>
          <Form>{children}</Form>
          <Card.Footer className="text-muted">
            <LinkContainer to={`/${routeName}/${objectId}/edit`}>
              <Button size="sm" variant="primary">
                Edit
              </Button>
            </LinkContainer>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
}
