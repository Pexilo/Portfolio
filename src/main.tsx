import Agostore from "@components/Agostore";
import Discord from "@components/Discord";
import Home from "@components/Home";
import Mage from "@components/Mage";
import Misc from "@components/Misc";
import WhosThat from "@components/WhosThat";
import "@styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portfolio">
          <Route path="agostore" Component={Agostore} />
          <Route path="discord" Component={Discord}>
            <Route path="stealthy" Component={Mage} />
            <Route path="whosthat" Component={WhosThat} />
            <Route path="misc" Component={Misc} />
          </Route>
          <Route path="mage" Component={Mage} />
        </Route>
        <Route path="*" Component={() => <div>404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
