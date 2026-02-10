import React, { useContext } from "react";
import { useUser } from "../../context/Context";
import { useTheme } from "../../context/ThemeContext";

const ContextDemo = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  return (
    <div>
      {user.name}
      <br></br>
      Current Theme: <span>{theme}</span>
    </div>
  );
};

export default ContextDemo;
