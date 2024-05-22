import { OrdenaloYaGame } from "../Components/Games/OrdenaloYaGame";
import { SideBar } from "../Components/SideBar";
export default ({ ruta }) => {
  const token = localStorage.getItem("jwtdata");

  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>

      <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
        <OrdenaloYaGame ruta={ruta} />
      </section>
    </>
  );
};
