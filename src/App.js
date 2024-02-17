import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [BgColor, setBgColor] = useState("");
  const generateRandomColor = () => {
    //const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setCount(count + 1);
            setName("Hello");
            setBoolean((prev) => !prev);
            console.log(count);
            console.log(name);
            console.log(boolean);
          }}
          style={{ backgroundColor: BgColor }}
        >
          Click me
        </button>

        <input type="text" onChange={(e) => setBgColor(e.target.value)} />

        <button
          onClick={() => {
            generateRandomColor();
            // setBgColor(Math.random().toString(16).substr(-6));
            // console.log(BgColor);
          }}
        >
          Change Background Color
        </button>
      </header>
    </div>
  );
}

export default App;
