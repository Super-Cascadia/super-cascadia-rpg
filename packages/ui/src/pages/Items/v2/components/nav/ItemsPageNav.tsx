import { useRouteMatch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

export default function ItemsPageNav() {
  let { url } = useRouteMatch();

  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to={`${url}/consumables`}>
          <Nav.Link>Consumables</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/armors`}>
          <Nav.Link>Armors</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/weapons`}>
          <Nav.Link>Weapon</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
