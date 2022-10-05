import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          return setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          return setTheme("light");
        }}
      >
        Light
      </button>
    </div>
  );
};

export default UseState;
