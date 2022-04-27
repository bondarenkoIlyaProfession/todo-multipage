import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/styles.scss";

import { App } from "./App";

import { Tasks, Today, Personal, Work, GroceryStore, Error } from "./pages";
import { Sandbox } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/today" element={<Today />} />
          <Route path="/additional/personal" element={<Personal />} />
          <Route path="/additional/work" element={<Work />} />
          <Route path="/additional/grocery-store" element={<GroceryStore />} />
          <Route path="*" element={<Error />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
