import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeParques from "./components/ListaDeParques";
import AgregarParque from "./components/AgregarParque";
import VistaParque from "./components/VistaParque";
import AgregarCartaRuta from "./components/AgregarCartaRuta";
import EditarParque from "./components/EditarParque";
import AgregarHorario from "./components/AgregarHorario";
import AgregarFauna from "./components/AgregarFauna";
import AgregarFlora from "./components/AgregarFlora";
import AgregarAnuncio from "./components/AgregarAnuncio";
import CrearAnuncio from "./components/CrearAnuncio";

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
          <Route path="/agregarhorario" element={<AgregarHorario />} />
          <Route path="/agregarfauna" element={<AgregarFauna />} />
          <Route path="/agregarflora" element={<AgregarFlora />} />
          <Route path="/agregaranuncio" element={<AgregarAnuncio />} />
          <Route path="/parque/:id" element={<VistaParque />} />
          <Route path="/anuncio" element={<CrearAnuncio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
