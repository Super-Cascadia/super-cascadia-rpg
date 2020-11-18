import { useRouteMatch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

export default function CharacterSubNav() {
  const { url, path } = useRouteMatch();

  let activeKey = `${url}/${path}`;

  console.log("active-key", activeKey);
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey={`${url}/profile`}
      activeKey={activeKey}
    >
      <Nav.Item>
        <LinkContainer to={`${url}/profile`}>
          <Nav.Link href={`${url}/profile`}>Profile</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/inventory`}>
          <Nav.Link href={`${url}/inventory`}>Inventory</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/skills`}>
          <Nav.Link disabled>Skills</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/equipment`}>
          <Nav.Link disabled>Equipment</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
