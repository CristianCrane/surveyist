import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";

export default function CoreLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
