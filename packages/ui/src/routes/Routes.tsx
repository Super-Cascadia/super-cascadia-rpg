import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import ItemGrid from "../pages/Items/ItemGrid";
import ItemEdit from "../pages/Items/ItemEdit";
import TopNavigation from "../components/TopNavigation";
import ItemCreate from "../pages/Items/ItemCreate";

export default function Routes() {
    return (
        <Router>
            <div>
                <TopNavigation/>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/items/create">
                        <ItemCreate />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                    <Route path="/items/:id">
                        <ItemEdit />
                    </Route>
                    <Route path="/items">
                        <ItemGrid />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
