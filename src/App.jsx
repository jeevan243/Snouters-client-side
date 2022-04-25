import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routers } from "./Components/Route";
import { Navbar } from "./Components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <Routers />
    </div>
  );
}

export default App;
