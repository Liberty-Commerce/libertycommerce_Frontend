import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <div className="">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
