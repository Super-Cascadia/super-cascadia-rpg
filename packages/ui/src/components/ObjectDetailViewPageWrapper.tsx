import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import { ObjectDetailBreadCrumb } from "./ObjectDetailBreadCrumb";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <div>
      <br />
      <Container>
        <ObjectDetailBreadCrumb
          routeName={routeName}
          objectId={objectId}
          detailPageName={"View"}
        />
      </Container>
      <Container>
        <Row>
          <Col xs={11}>
            <h1>
              {name} ({objectId})
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
      <Container>{children}</Container>
    </div>
  );
}
