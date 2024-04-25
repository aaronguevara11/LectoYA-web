import { SideBar } from "./Components/SideBar";
import { Queharemos } from "./Components/Games/Queharemos";
import { CambialoYa } from "./Components/Games/CambialoYa";
import { Significado } from "./Components/Games/Significado";
import { Interactivas } from "./Components/Games/Interactivas";
import { Dado } from "./Components/Games/Dado";

function App() {
  return (
    <main className="flex h-screen w-full">
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 ">
        <IDado />
      </div>
    </main>
  );
}

export default App;