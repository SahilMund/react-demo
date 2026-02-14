import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Fill required details");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log("res", res.data);
      alert(res.data.message)
      navigate("/login")
    } catch (error) {
      console.error(error);
      alert("Error occured");
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
        value={form.name}
        placeholder="enter name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="enter email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="enter password"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default SignupPage;
