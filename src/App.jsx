import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Taskpage from "./Template/Taskpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<Taskpage />} />
      </Routes>
    </>
  );
}

export default App;
