import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pagina no encontrada si el usuario no encutra lo que no hay en el sitio web:
import Notfound from './pagenotfound/Notfound';

//subpaginas:
//1
import Registro from "./pages/Registro";
//2
import Login from "./pages/Login";
//3
import Home from "./pages/Home";
import Perfil from './pages/Perfil';

//comentario:develop-barera

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Notfound/>}/> */}
          <Route path="*" element={<Notfound/>}/>
          {/*Registro*/}
          <Route path="/" element={<Registro />} />
          {/*Login*/}
          <Route path="/login" element={<Login />} />
          {/*Pagina principal*/}
          <Route path="/home" element={<Home />} />
          {/*Pagina principal*/}
          <Route path="/perfil" element={<Perfil />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
