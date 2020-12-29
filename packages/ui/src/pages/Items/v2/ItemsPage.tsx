import React, { useState } from "react";
import GridPageWrapperV2 from "../../../components/pageWrapper/GridPageWrapperV2";
import Nav from "react-bootstrap/Nav";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import ConsumableItemsView from "./views/ConsumableItemsView";
import ArmorItemsView from "./views/ArmorItemsView";
import WeaponItemsView from "./views/WeaponItemsView";

function ItemsPageRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        Base path!
      </Route>
      <Route exact path={`${path}/consumables`}>
        <ConsumableItemsView />
      </Route>
      <Route exact path={`${path}/armors`}>
        <ArmorItemsView />
      </Route>
      <Route exact path={`${path}/weapons`}>
        <WeaponItemsView />
      </Route>
    </Switch>
  );
}

function ItemsPageNav() {
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

export interface TableColumn {
  fieldName: string;
  title: string;
  renderer?: (value?: any) => JSX.Element;
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
        <br />
        <ItemsPageRoutes />
      </>
    </GridPageWrapperV2>
  );
}
