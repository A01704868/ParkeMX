import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeParques from "./components/ListaDeParques";
import AgregarParque from "./components/AgregarParque";
import VistaParque from "./components/VistaParque";
import CrearAnuncio from "./components/CrearAnuncio";
import AgregarCartaRuta from "./components/AgregarCartaRuta";
import EditarParque from "./components/EditarParque";
import AgregarHorario from "./components/AgregarHorario";
import AgregarFauna from "./components/AgregarFauna";
import AgregarFlora from "./components/AgregarFlora";
import FloraId from "./components/FloraId";
import FaunaId from "./components/FaunaId";
import EditarHorario from "./components/EditarHorario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaDeParques />} />
          <Route path="/agregar" element={<AgregarParque />} />
          <Route
            path="/agregartarjetaderuta/:id"
            element={<AgregarCartaRuta />}
          />
          <Route path="/parque/:id" element={<VistaParque />} />
          <Route path="/editarparque/:id" element={<EditarParque />} />
          <Route path="/editarhorario/:id" element={<EditarHorario />} />
          <Route path="/agregarhorario/:id" element={<AgregarHorario />} />
          <Route path="/editarparque" element={<EditarParque />} />
          <Route path="/agregarhorario" element={<AgregarHorario />} />
          <Route path="/agregarfauna" element={<AgregarFauna />} />
          <Route path="/agregarflora" element={<AgregarFlora />} />
          <Route path="/agregaranuncio" element={<CrearAnuncio />} />
          <Route path="/flora/:id" element={<FloraId />} />
          <Route path="/fauna/:id" element={<FaunaId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
