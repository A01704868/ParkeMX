import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeParques from "./components/ListaDeParques";
import AgregarParque from "./components/AgregarParque";
import VistaParque from "./components/VistaParque";
import AgregarCartaRuta from "./components/AgregarCartaRuta";
import EditarParque from "./components/EditarParque";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaDeParques />} />
          <Route path="/agregar" element={<AgregarParque />} />
          <Route path="/agregartarjetaderuta" element={<AgregarCartaRuta />} />
          <Route path="/parque/:id" element={<VistaParque />} />
          <Route path="/editarparque" element={<EditarParque />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
