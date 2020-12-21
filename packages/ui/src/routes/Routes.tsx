import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Items from "../pages/Items/v2/Items";

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
            <Items />
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
