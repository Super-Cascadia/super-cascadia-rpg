import React, { useState } from "react";
import GridPageWrapperV2 from "../../../components/pageWrapper/GridPageWrapperV2";
import Nav from "react-bootstrap/Nav";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import ConsumableItemsView from "./views/ConsumableItemsView";

function ItemsPageRoutes() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path="/">
        Base path!
      </Route>
      <Route path={`${path}/consumables`}>
        <ConsumableItemsView />
      </Route>
      <Route path={`${path}/armors`}>Armor!</Route>
      <Route path={`${path}/weapons`}>Weapons!</Route>
    </Switch>
  );
}

function ItemsPageNav() {
  let { path, url } = useRouteMatch();

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

export default function ItemsPage() {
  const [showCreateItemModal, setCreateItemModalViz] = useState<boolean>(false);

  return (
    <GridPageWrapperV2
      handleNewButtonClick={() => setCreateItemModalViz(true)}
      title="Items"
    >
      <>
        <ItemsPageNav />
        <ItemsPageRoutes />
      </>
    </GridPageWrapperV2>
  );
}
