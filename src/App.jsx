import { useState, useEffect } from "react";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Views } from "./pages/Views";
import { Tema } from "./pages/Tema";
import { ProtectedRoute } from "./pages/ProtectedRouter";

function App() {
  const [jwtDataLocal, setJwtDataLocal] = useState(localStorage.getItem('jwtdata'));
  const handleStorageChange = () => {
    console.log("obteniendo del localstorage")   
    setJwtDataLocal(localStorage.getItem('jwtdata'));
 
  };
  useEffect(() => {
    // Función para manejar el cambio en el localStorage

    handleStorageChange()
    console.log(jwtDataLocal)
    
    // Agregar un event listener para escuchar cambios en el localStorage
  }, [localStorage]);

  const miFuncionDeEfecto = () => {
    // Código que se ejecuta cuando se actualiza el localStorage
    console.log("¡localStorage actualizado!");
    // Puedes actualizar el estado del componente aquí
  };

  useEffect(miFuncionDeEfecto, [localStorage]);


  return (
    <main className="flex h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/LoginDocente" />} />
          {/* LOGIN */}
          <Route path="/LoginDocente" element={<Login />} />

          {/* RUTA PROTEGIDA */}
          <Route element={<ProtectedRoute jwtdatalocal={jwtDataLocal}/>}>
            <Route path="/home" element={<Views/> }/>
          </Route>

          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
