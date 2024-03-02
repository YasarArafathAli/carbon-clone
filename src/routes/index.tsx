import React, { FC, useContext, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthWrapper from "../views/Auth/AuthWrapper";
import isAuthenticated from "../shared/components/HOC/requireAuth";
import Home from "../views/Home";
import { RouterProps } from "../shared/types/route.type";
import AppComponents from "../views/AppComponents";
import { AppRoutes } from "./routeConstants/appRoutes";
import Dashboard from "../views/Dashboard";
import { AuthContext } from "../context/AuthContext";

export const appHistory = createBrowserHistory();

const AppRouter = () => {
  const { authenticated } = AuthContext();
  let routes: RouterProps[] = [
    { exact: true, path: AppRoutes.AUTH, component: <AuthWrapper /> },
    // { exact: true, path: AppRoutes.HOME, component: isAuthenticated(<Home/>) },
    { exact: true, path: AppRoutes.HOME, component: <Home/> },
    
  ];
  if (Boolean(process.env.REACT_APP_UNDER_DEVELOPMENT)) {
    routes.push({
      path: AppRoutes.APP_COMPONENTS,
      component: <AppComponents />,
    });
  }
console.log(authenticated)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes?.map((route, index) => {
            return (
              <Route
                key={index}
                {...route}
                path={route?.path}
                element={route?.component}
              />
            );
          })}
          <Route path="*" element={<Navigate to={AppRoutes.HOME} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
