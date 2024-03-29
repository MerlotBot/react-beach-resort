import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SignleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SignleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
