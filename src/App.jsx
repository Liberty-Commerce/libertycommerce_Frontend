import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pagina no encontrada:
import Notfound from './pagenotfound/Notfound';

//subpaginas:
import Home from "./pages/Home";

//comentario:develop-barera

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Notfound/>}/> */}
          <Route path="*" element={<Notfound/>}/>
          {/*Pagina Principal*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
