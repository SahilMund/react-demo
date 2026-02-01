import React, { useContext } from "react";
import { useUser } from "../context/Context";

const ContextDemo = () => {
  const { user } = useUser();
  return <div>{user.name}</div>;
};

export default ContextDemo;
