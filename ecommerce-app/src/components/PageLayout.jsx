import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = ({ header, footer }) => {
  return (
    <div>
      <header>
        <div>
          <h1> welcome Dashboard</h1>
          {header}
        </div>
      </header>
      <div className="main-section">
        <Outlet />
      </div>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
