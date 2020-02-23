import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Items from "../pages/Items";
import TopNavigation from "../components/TopNavigation";

export default function Routes() {
    return (
        <Router>
            <div>
                <TopNavigation/>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                    <Route path="/items">
                        <Items />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
