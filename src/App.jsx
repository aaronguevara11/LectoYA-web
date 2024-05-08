import { useState, useEffect } from "react";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Views } from "./pages/Views";
import { Temas } from "./pages/Temas";
import { ProtectedRoute } from "./pages/ProtectedRouter";
import { Tema } from "./pages/Tema";

/* IMPORTACION DE LAS PAGINAS JUEGOS */
import { JuegoDelDado } from "./pages/JuegoDelDado";
import { HistoriasInteractivas } from "./pages/HistoriasInteractivas";
import { DaleUnSignificado } from "./pages/DaleUnSignificado";
import { AhoraQueHaremos } from "./pages/AhoraQueHaremos";
import { JuegoDeLaRuleta } from "./pages/JuegoDeLaRuleta";
import { OrdenaloYA } from "./pages/OrdenaloYA";


function App() {
  const [jwtDataLocal, setJwtDataLocal] = useState(localStorage.getItem('jwtdata'));
  
  const [nombreCurso, setNombreCurso] = useState('');
  const [idTema, setIdTema] = useState('');
  const [idCurso, setIdCurso] = useState('');
  const [idJuego, setIdJuego] = useState('');
  
   useEffect(
     () =>{
        
     }
  
     , [idTema]);


  return (
    <main className="flex h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          {/* LOGIN */}
          <Route path="/Login" element={<Login  setJwtDataLocal={setJwtDataLocal}/>} />

          {/* RUTA PROTEGIDA */}
          <Route element={<ProtectedRoute jwtdatalocal={jwtDataLocal}/>}>
          
            {/* NAVEGACION */}
            <Route path="/home" element={<Views setIdTema={setIdTema}  setNombreCurso={setNombreCurso}/> }/>
            <Route path="/home/Temas/:id" element={<Temas setIdTema={setIdTema} nombreCurso={nombreCurso} setIdCurso={setIdCurso}/>} />
            <Route path="/home/Temas/info" element={<Tema idCurso={idCurso} idTema={idTema} setIdJuego={setIdJuego}/>} />
            {/* JUEGOS */}
            <Route path="/home/JuegoDelDado" element={<JuegoDelDado  idJuego={idJuego}/>} />
            <Route path="/home/HistoriasInteractivas" element={<HistoriasInteractivas idJuego={idJuego}/>} />
            <Route path="/home/JuegoDeLaRuleta" element={<JuegoDeLaRuleta  idJuego={idJuego}/>} />
            <Route path="/home/OrdenaloYa" element={<OrdenaloYA  idJuego={idJuego}/>} />
            <Route path="/home/AhoraQueHaremos" element={<AhoraQueHaremos  idJuego={idJuego}/>} />
            <Route path="/home/DaleUnSignificado" element={<DaleUnSignificado  idJuego={idJuego}/>} />
                        
             {/* VISTA PERFILES Y FORMULARIOS*/}

          </Route>

         <Route path="/*" element={<Login />} /> 
        </Routes>
      </Router>
    </main>
  );
}

export default App;
