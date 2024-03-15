import Agostore from "@components/Agostore";
import Discord from "@components/Discord";
import Home from "@components/Home";
import Mage from "@components/Mage";
import Misc from "@components/Misc";
import WhosThat from "@components/WhosThat";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoBackHeader from "./GoBackHeader";
import Stealthy from "./Stealthy";

const App = () => {
  const [fadeEffect, setFadeEffect] = useState("");
  const [loading, setLoading] = useState(false);

  const fakeLoading = async () => {
    return new Promise<void>((resolve) => {
      setLoading(true);
      setFadeEffect("fade-in");
      setTimeout(() => {
        setFadeEffect("fade-out");
        setTimeout(() => {
          setLoading(false);
          setFadeEffect("");
          resolve();
        }, 500);
      }, 500);
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/mgael-portfolio/"
          element={
            <Home
              fakeLoading={fakeLoading}
              loading={loading}
              fadeEffect={fadeEffect}
            />
          }
        />

        <Route path="/mgael-portfolio/portfolio">
          <Route
            path="agostore"
            element={
              <>
                <GoBackHeader />
                <Agostore
                  fadeEffect={fadeEffect}
                  fakeLoading={fakeLoading}
                  loading={loading}
                />
              </>
            }
          />
          <Route
            path="discord"
            element={
              <>
                <GoBackHeader />
                <Discord
                  fadeEffect={fadeEffect}
                  fakeLoading={fakeLoading}
                  loading={loading}
                />
              </>
            }
          ></Route>
        </Route>
        <Route path="*" Component={() => <div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;