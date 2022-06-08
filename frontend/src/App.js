import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeParques from "./components/ListaDeParques";
import AgregarParque from "./components/AgregarParque";
import VistaParque from "./components/VistaParque";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<ListaDeParques />} />
      <Route path="/agregar" element={<AgregarParque />} />
      <Route path="/parque/:id" element={<VistaParque />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
