import React from "react";
import styles from "./App.module.css";
import ShareRadar from "./components/ShareRadar";
import ListedShare from "./components/ListedShare";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className={styles.App}>
      <ListedShare />
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route exact path="/radar">
          <ShareRadar
            dotsColor="#90e0ef"
            linearGradient="linear-gradient(
            90deg,
            #0091f1 0%,
            #82def8 35%,
            #92def5 65%,
            #1bddff
      )"
            iconDisplay="fab fa-telegram-plane"
            btnColor="radial-gradient(#28b7e7, #5fcaee)"
            headerMessage="Saw a radar? Tell a brother!"
          />
        </Route>
        <Route exact path="/incidents">
          <ShareRadar
            dotsColor="#ee4f64"
            linearGradient="linear-gradient(
            90deg,
            #a01a7d 0%,
            #ec4067 35%,
            #f4e285 65%,
            #ff8fab
            )"
            iconDisplay="fas fa-car-crash"
            btnColor="radial-gradient(#d9376d, #ee4f64)"
            headerMessage="Report vehicle incidents on the road."
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
