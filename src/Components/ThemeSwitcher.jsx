import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
const ThemeSwitcher = () => {

    const {mode, toggleTheme} = useContext(ThemeContext);
  return (
    <Button
      sx={{
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        border: "1px solid white",
        minWidth: "35px",
        minHeight: "20px",
      }}
      onClick={toggleTheme}
    >
      {mode === "light" ? <MdOutlineDarkMode /> : <CiLight />}
    </Button>
  );
};

export default ThemeSwitcher;
