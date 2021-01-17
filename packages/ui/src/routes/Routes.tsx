import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Home from "../pages/home/Home";
import ItemGrid from "../pages/Items/v1/ItemGrid/ItemGrid";
import ItemEdit from "../pages/Items/v1/ItemEdit";
import TopNavigation from "../components/navigation/TopNavigation";
import ItemCreate from "../pages/Items/v1/ItemCreate";
import ItemView from "../pages/Items/v1/ItemView";
import CharacterGrid from "../pages/characters/CharacterGrid/CharacterGrid";
import CharacterView from "../pages/characters/CharacterView";
import CharacterEdit from "../pages/characters/CharacterEdit";
import CharacterCreate from "../pages/characters/CharacterCreate";
import IconAssetsPage from "../pages/assets/IconAssetsPage";
import ItemsPage from "../pages/Items/v2/ItemsPage";
import ConsumableItemsView from "../pages/Items/v2/views/ConsumableItemsView";
import ArmorItemsView from "../pages/Items/v2/views/ArmorItemsView";
import WeaponItemsView from "../pages/Items/v2/views/WeaponItemsView";

export default function Routes() {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Switch>
          <Route path="/characters/create">
            <CharacterCreate />
          </Route>
          <Route path="/characters/:id/edit">
            <CharacterEdit />
          </Route>
          <Route path="/characters/:id/view">
            <CharacterView />
          </Route>
          <Route path="/characters">
            <CharacterGrid />
          </Route>
          <Route path="/items/v2">
            <ItemsPage />
          </Route>
          <Route path="/items/create">
            <ItemCreate />
          </Route>
          <Route path="/items/:id/view">
            <ItemView />
          </Route>
          <Route path="/items/:id/edit">
            <ItemEdit />
          </Route>
          <Route path="/items/:id">
            <ItemEdit />
          </Route>
          <Route path="/items">
            <ItemGrid />
          </Route>
          <Route path="/assets/icons">
            <IconAssetsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function ItemsPageRoutes() {
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
