import React, { useContext, useEffect } from "react";
import AppDemo from "./AppDemo";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LogInPage from "./components/LogInPage";
import DashboardLayout from "./components/PageLayout";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import SignupPage from "./components/SignUpPage";
import axios from "axios";

const UserDashboardPage = () => {
  useEffect(() => {
    async function getUserProfile() {
      try {
        const res = await axios.get("http://localhost:8080/api/user/profile", {
          withCredentials: true,
        });

        console.log("res", res.data);
      } catch (error) {
        console.error(error);
        alert("Error occured");
      }
    }

    getUserProfile();
  }, []);
  return (
    <div>
      <div>UserDashboardPage</div>
    </div>
  );
};
const AdminDashboardPage = () => {
  return (
    <div>
      <div>AdminDashboardPage</div>
    </div>
  );
};

const SettingsDashboardPage = () => {
  return (
    <div>
      <div>SettingsDashboardPage</div>
    </div>
  );
};

const App = () => {
  const { logout, user: userAuthData } = useContext(AuthContext);

  return (
    <div>
      <Navbar
        links={[
          ...(!userAuthData
            ? [
                { label: "login", path: "/login" },
                { label: "signup", path: "/signup" },
              ]
            : []),
          ...(userAuthData
            ? [
                { label: "User", path: "/dashboard/users" },
                { label: "admin", path: "/dashboard/admin" },
                { label: "settings", path: "/dashboard/settings" },
              ]
            : []),
        ]}
        variant="primary"
        showThemeToggler={true}
        showLogout={!!userAuthData}
        onLogout={logout}
      />
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<h2>Landing page</h2>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="users" />} />
          <Route path="users" element={<UserDashboardPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="settings" element={<SettingsDashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
