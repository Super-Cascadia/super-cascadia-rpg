import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { ReactElement } from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { ObjectDetailBreadCrumb } from "./ObjectDetailBreadCrumb";
import Card from "react-bootstrap/Card";

interface Props {
  objectId: number;
  name: string;
  routeName: string;
  children?: ReactElement;
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
    <div>
      <br />
      <Container>
        <ObjectDetailBreadCrumb
          routeName={routeName}
          objectId={objectId}
          detailPageName={"Edit"}
        />
      </Container>
      <Container>
        <Row>
          <Col xs={11}>
            <h1>
              {name} ({objectId})
            </h1>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
      <Container>{children}</Container>
      <Container>
        <Card>
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
        </Card>
      </Container>
    </div>
  );
};
