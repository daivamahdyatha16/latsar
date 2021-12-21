import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Anggota from "./pages/anggota";
import { Switch, Route } from "react-router-dom";
import Notifikasi from "./pages/notifikasi";
import Notulensi from "./pages/notulensi";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="App">
      <Navbar toogle={toogle} />
      <Dropdown isOpen={isOpen} toogle={toogle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/anggota" component={Anggota} />
        <Route path="/notifikasi" component={Notifikasi} />
        <Route path="/notulensi" component={Notulensi} />
      </Switch>
    </div>
  );
}

export default App;
