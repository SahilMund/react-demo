import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const LogInPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
  });

  const nameRef = useRef(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    if (loginDetails.name && loginDetails.email) {
      login("dummy-api-123-token");
      navigate("/dashboard");
    } else {
      alert("Please fill all the details");
    }
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        name="name"
        ref={nameRef}
        value={loginDetails.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={loginDetails.email}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogInPage;
