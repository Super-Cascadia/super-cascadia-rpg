import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemGrid from "../pages/Items/ItemGrid/ItemGrid";
import ItemEdit from "../pages/Items/ItemEdit";
import TopNavigation from "../components/TopNavigation";
import ItemCreate from "../pages/Items/ItemCreate";
import ItemView from "../pages/Items/ItemView";
import CharacterGrid from "../pages/characters/CharacterGrid/CharacterGrid";
import CharacterView from "../pages/characters/CharacterView";

export default function Routes() {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Switch>
          <Route path="/characters/:id/edit">
            <CharacterView />
          </Route>
          <Route path="/characters/:id/view">
            <CharacterView />
          </Route>
          <Route path="/characters">
            <CharacterGrid />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
