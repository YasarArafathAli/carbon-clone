import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "../../views/Auth/RegisterForm";
import LoginForm from "../../views/Auth/LoginForm";
import { RouterProps } from "../../shared/types/route.type";
import { AppRoutes, NavigationRoutes } from "../../routes/routeConstants/appRoutes";
import CompanyDetails from "./CompanyDetails";
import CompanyAddress from "./CompanyAddress";
// import VerifyEmail from "./VerifyEmail";
// import ForgotPassword from "./ForgotPassword";
// import AddUser from "./AddUser";

const authRouter = () => {
  const routes: RouterProps[] = [
    { path: AppRoutes.REGISTER, component: <RegisterForm/> },
    { path: AppRoutes.LOGIN, component: <LoginForm/> },
    { path: AppRoutes.COMPANY_DETAILS, component: <CompanyDetails/> },
    { path: AppRoutes.COMPANY_ADDRESS, component: <CompanyAddress /> },
    // { path: AppRoutes.VERIFY_EMAIL, component: <VerifyEmail /> },
    // { path: AppRoutes.FORGOT_PASSWORD, component: <ForgotPassword /> },
    // { path: AppRoutes.ADD_USER, component: <AddUser /> },
  ];

  return (
    <Routes>
      {routes.map(({ component, ...routerProps }) => (
        <Route {...routerProps} element={component} />
      ))}
      <Route  path="*" element={<Navigate to={NavigationRoutes.LOGIN}/>} />
    </Routes>
  );
};

export default authRouter;
