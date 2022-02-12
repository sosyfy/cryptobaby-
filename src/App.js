import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Nav,
  Exchanges,
  Cryptocurrencies,
  News,
  CryptoDetails,
  Homepage,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Nav />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route exact path="/exchanges">
                <Exchanges />
              </Route>

              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>

              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div
          className="footer"
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Typography.Title>crypto com all rights reserved</Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;
