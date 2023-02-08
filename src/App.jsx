
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//subpaginas:
import Home from "./pages/Home";

//comentario:develop-barera

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Notfound/>}/> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
