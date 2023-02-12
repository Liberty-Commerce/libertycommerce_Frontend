import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pagina no encontrada si el usuario no encutra lo que no hay en el sitio web:
import Notfound from "./pagenotfound/Notfound";

//subpaginas:

//1 registro usuarios
import Registro from "./pages/Registro";

//2 Login ingreso usuario
import Login from "./pages/Login";

//3 Pagina principal despues de Registro o logueo
import Home from "./pages/Home";

//4 Perfil usuario
import Profile from "./pages/Profile";

//5 olvide contraseña
import Olvide from "./pages/Olvide";

//6 pagina detalles pago
import Cart from "./pages/Cart";

//comentario:develop-barera

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Notfound/>}/> */}
          <Route path="*" element={<Notfound />} />
          {/*Registro*/}
          <Route path="/" element={<Registro />} />
          {/*Login*/}
          <Route path="/login" element={<Login />} />
          {/*Perfil usuario*/}
          <Route path="/olvide" element={<Olvide />} />
          {/*Pagina principal*/}
          <Route path="/home" element={<Home />} />
          {/*Perfil usuario*/}
          <Route path="/profile" element={<Profile />} />
          {/*pay*/}
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
