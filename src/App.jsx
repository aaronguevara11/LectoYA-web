import { useState, useEffect } from "react";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Views } from "./pages/Views";
import { Temas } from "./pages/Temas";
import { ProtectedRoute } from "./pages/ProtectedRouter";
import { Tema } from "./pages/Tema";

function App() {
  const [jwtDataLocal, setJwtDataLocal] = useState(localStorage.getItem('jwtdata'));
  
  const [nombreCurso, setNombreCurso] = useState('');
  const [idTema, setIdTema] = useState('');
  const [idCurso, setIdCurso] = useState('');
  
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
            <Route path="/home" element={<Views setIdTema={setIdTema}  setNombreCurso={setNombreCurso}/> }/>
            <Route path="/home/Temas/:id" element={<Temas setIdTema={setIdTema} nombreCurso={nombreCurso} setIdCurso={setIdCurso}/>} />
            <Route path="/home/Temas/info" element={<Tema idCurso={idCurso} idTema={idTema}/>} />

          </Route>

         <Route path="/*" element={<Login />} /> 
        </Routes>
      </Router>
    </main>
  );
}

export default App;
