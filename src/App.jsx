/* IMPORTS */
import { useState, useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* LOGIN Y REGISTRO */
const Login = lazy(() => import("./pages/Login"));
const Registro = lazy(() => import("./pages/Registro"));

/* vistas */
const Views = lazy(() => import("./pages/Views"));
const Temas = lazy(() => import("./pages/Temas"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRouter"));
const Tema = lazy(() => import("./pages/Tema"));

/* IMPORTACION DE LAS PAGINAS JUEGOS */
const JuegoDelDado = lazy(() => import("./pages/JuegoDelDado"));
const HistoriasInteractivas = lazy(() =>
  import("./pages/HistoriasInteractivas")
);
const DaleUnSignificado = lazy(() => import("./pages/DaleUnSignificado"));
const AhoraQueHaremos = lazy(() => import("./pages/AhoraQueHaremos"));
const JuegoDeLaRuleta = lazy(() => import("./pages/JuegoDeLaRuleta"));
const OrdenaloYA = lazy(() => import("./pages/OrdenaloYA"));
import { CambioYa } from "./pages/CambioYa";

/* Formulario Registro Juego */
const FormRegisterGame = lazy(() =>
  import("./Components/Forms/FormRegisterGame")
);
const FormHaremos = lazy(() => import("./Components/Forms/FormHaremos"));
const FormDado = lazy(() => import("./Components/Forms/FormDado"));
const FormRuleteando = lazy(() => import("./Components/Forms/FormRuleteando"));
const FormOrdenalo = lazy(() => import("./Components/Forms/FormOrdenalo"));
const FormSignificado = lazy(() =>
  import("./Components/Forms/FormSignificado")
);
const FormCambialo = lazy(() => import("./Components/Forms/FormCambialo"));

function App() {
  const [jwtDataLocal, setJwtDataLocal] = useState(
    localStorage.getItem("jwtdata")
  );

  const [nombreCurso, setNombreCurso] = useState("");
  const [idTema, setIdTema] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [idJuego, setIdJuego] = useState("");
  const [nombreJuego, setNombreJuego] = useState("");
  const ruta = "http://localhost:3000/app";

  useEffect(() => {}, [idTema]);

  return (
    <main className="flex h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          {/* LOGIN */}
          <Route
            path="/Login"
            element={<Login setJwtDataLocal={setJwtDataLocal} />}
          />
          <Route path="/Registro/:user" element={<Registro ruta={ruta} />} />

          {/* RUTA PROTEGIDA */}
          <Route element={<ProtectedRoute jwtdatalocal={jwtDataLocal} />}>
            {/* NAVEGACION */}
            <Route
              path="/home"
              element={
                <Views
                  setIdTema={setIdTema}
                  setNombreCurso={setNombreCurso}
                  ruta={ruta}
                />
              }
            />
            <Route
              path="/home/Temas/:id"
              element={
                <Temas
                  setIdTema={setIdTema}
                  nombreCurso={nombreCurso}
                  setIdCurso={setIdCurso}
                  ruta={ruta}
                />
              }
            />
            <Route
              path="/home/Temas/info"
              element={
                <Tema
                  idCurso={idCurso}
                  idTema={idTema}
                  setIdJuego={setIdJuego}
                  setNombreJuego={setNombreJuego}
                  setIdTema={setIdTema}
                  ruta={ruta}
                />
              }
            />
            {/* JUEGOS */}
            <Route
              path="/home/JuegoDelDado"
              element={<JuegoDelDado ruta={ruta} />}
            />
            <Route
              path="/home/HistoriasInteractivas"
              element={<HistoriasInteractivas ruta={ruta} />}
            />
            <Route
              path="/home/JuegoDeLaRuleta"
              element={<JuegoDeLaRuleta ruta={ruta} />}
            />
            <Route
              path="/home/OrdenaloYa"
              element={<OrdenaloYA ruta={ruta} />}
            />
            <Route
              path="/home/AhoraQueHaremos"
              element={<AhoraQueHaremos ruta={ruta} />}
            />
            <Route
              path="/home/DaleUnSignificado"
              element={<DaleUnSignificado ruta={ruta} />}
            />
            <Route path="/home/CambioYa" element={<CambioYa ruta={ruta} />} />

            {/* VISTA PERFILES Y FORMULARIOS*/}
            <Route
              path="/home/FormularioInteractivas"
              element={
                <FormRegisterGame ruta={ruta} nombreJuego={nombreJuego} />
              }
            />
            <Route
              path="/home/FormularioQueHaremos"
              element={<FormHaremos ruta={ruta} nombreJuego={nombreJuego} />}
            />
            <Route
              path="/home/FormularioJuegoDelDado"
              element={<FormDado ruta={ruta} nombreJuego={nombreJuego} />}
            />
            <Route
              path="/home/FormularioRuleteando"
              element={<FormRuleteando ruta={ruta} nombreJuego={nombreJuego} />}
            />
            <Route
              path="/home/FormularioOrdenaloYa"
              element={<FormOrdenalo ruta={ruta} nombreJuego={nombreJuego} />}
            />
            <Route
              path="/home/FormularioDaleUnSignificado"
              element={
                <FormSignificado ruta={ruta} nombreJuego={nombreJuego} />
              }
            />
            <Route
              path="/home/FormularioCambialoYa"
              element={<FormCambialo ruta={ruta} nombreJuego={nombreJuego} />}
            />
          </Route>

          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
