import React from "react";
import { appRoutes } from "./configs/routes";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.Guard>
                  <route.component />
                </route.Guard>
              }
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
