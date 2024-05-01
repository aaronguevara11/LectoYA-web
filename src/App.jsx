
import { useState } from "react";

import { Login } from "./pages/Login";
import { Views } from "./pages/Views";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <main className="flex h-screen w-full">
       <Router>
                <Routes>
                  <Route path="/" element={<Navigate to="/LoginDocente" />} />
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/LoginDocente"
                        element={<Login />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/home"
                        element={<Views />}
                    />

                </Routes>
            </Router>

    </main>
  );
}

export default App;