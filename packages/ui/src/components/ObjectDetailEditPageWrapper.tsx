import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { ReactElement, SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { ObjectDetailBreadCrumb } from "./ObjectDetailBreadCrumb";

interface Props {
  objectId: number;
  name: string;
  routeName: string;
  children?: ReactElement;
  handleSubmit?: (event: SyntheticEvent) => void;
  dirty?: boolean;
}

export const ObjectDetailEditPageWrapper = ({
  routeName,
  objectId,
  name,
  children,
  dirty,
}: Props) => {
  return (
    <Container>
      <br />
      <ObjectDetailBreadCrumb
        routeName={routeName}
        objectId={objectId}
        detailPageName={"Edit"}
      />
      <Card>
        <Card.Header>
          <h1>{name}</h1>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
        <Card.Footer className="text-muted">
          <Container>
            <Row>
              <Col sm="1">
                <Button
                  variant="primary"
                  type="submit"
                  size="sm"
                  disabled={!dirty}
                >
                  Submit
                </Button>
              </Col>
              <Col sm="10" />
              <Col sm="1">
                <LinkContainer to={`/${routeName}/${objectId}/view`}>
                  <Button variant="secondary" type="submit" size="sm">
                    Cancel
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </Container>
  );
};
