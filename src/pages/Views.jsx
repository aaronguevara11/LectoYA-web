import { SideBar } from "../Components/SideBar";
import { Modulos } from "../Components/views/Modulos";

export default ({ setIdTema, setNombreCurso, ruta }) => {
  const token = localStorage.getItem("jwtdata");
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        {/* <Dado/> */}
        <Modulos
          setIdTema={setIdTema}
          setNombreCurso={setNombreCurso}
          ruta={ruta}
        />
      </div>
    </>
  );
};
