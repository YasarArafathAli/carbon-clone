import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "../../views/Auth/RegisterForm";
import LoginForm from "../../views/Auth/LoginForm";
import { RouterProps } from "../../shared/types/route.type";
import { AppRoutes, NavigationRoutes } from "../../routes/routeConstants/appRoutes";
import Dashboard from "../Dashboard";
import Products from "../Products";
import ValueChain from "../ValueChain";
import ProductDetailsForm from "../Products/ProductDetailsForm";
import ProductDashboard from "../Products/ProductDashboard";
import ProductDetails from "../Products/ProductDetails";
import Accounts from "../Accounts";

const HomeRouter = () => {
  const routes: RouterProps[] = [
    { path: AppRoutes.DASHBOARD, component: <Dashboard/> },
    { path: AppRoutes.PRODUCT, component: <Products /> },
    { path: AppRoutes.VALUE_CHAIN, component: <ValueChain /> },
    { path: AppRoutes.ACCOUNTS, component: <Accounts />},
    { path: AppRoutes.PRODUCT_FORM_CREATE, component: <ProductDetailsForm />},
    { path: AppRoutes.PRODUCT_FORM_EDIT, component: <ProductDetailsForm edit={true}/>},
    { path: AppRoutes.PRODUCT_DASHBOARD, component: <ProductDashboard />},
    { path: AppRoutes.PRODUCT_SUMMARY, component: <ProductDetails />}
    // { path: AppRoutes.ACC_SUBSCRIPTION, component: <Subscription />}
  ];

  return (
    <Routes>
      {routes.map(({ component, ...routerProps }) => (
        <Route {...routerProps} element={component} />
      ))}
      <Route  path="*" element={<Navigate to={NavigationRoutes.DASHBOARD}/>} />
    </Routes>
  );
};

export default HomeRouter;
