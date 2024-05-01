import { SideBar } from "./Components/SideBar";

import { useState } from "react";
import { RouteChange } from "./pages/RouteChange";
import { Login } from "./pages/Login";
function App() {


  return (
    <main className="flex h-screen w-full">

    <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative">
        {/* <Modulos /> */}

       <RouteChange /> 



      </div>
    </main>
  );
}

export default App;