import React from "react";

import { Routes, Route } from "react-router";

// Layouts
import LayoutApp from "./layout";

import DashboardPage from "./pages/DashboardPage";
import ReportPage from "./pages/ReportPage";

import ManagerEmployeePage from "./pages/employee/manager";

import LoginPage from "./pages/login";

const RouterApp = () => {
  return (
    <Routes>
      {/* Dashboard page */}
      <Route element={<LayoutApp />}>

        <Route index element={<DashboardPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Report page */}
        <Route path="/bao-cao" element={<ReportPage />} />

        {/* Employee */}
        <Route path="/nhan-vien" element={<ManagerEmployeePage />} />
        <Route path="/nhan-vien/quan-ly" element={<ManagerEmployeePage />} />

      </Route>

      <Route path="/dang-nhap" element={<LoginPage />} />

    </Routes>
  );
}

export default RouterApp;