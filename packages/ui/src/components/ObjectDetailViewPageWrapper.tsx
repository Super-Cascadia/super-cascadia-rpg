import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { ObjectDetailBreadCrumb } from "./ObjectDetailBreadCrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

interface Props {
  objectId: number;
  name: string;
  routeName: string;
  children?: ReactElement;
}

export default function ObjectDetailViewPageWrapper({
  routeName,
  objectId,
  name,
  children,
}: Props) {
  return (
    <>
      <Container fluid>
        <ObjectDetailBreadCrumb
          routeName={routeName}
          objectId={objectId}
          detailPageName={"View"}
        />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={11}>
            <h1>
              {name} - <Badge variant="secondary">{objectId}</Badge>
            </h1>
          </Col>
          <Col xs={1}>
            <LinkContainer to={`/${routeName}/${objectId}/edit`}>
              <Button size="sm" variant="primary">
                Edit
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
      <Container fluid>{children}</Container>
    </>
  );
}
