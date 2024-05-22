import { Queharemos } from "../Components/Games/Queharemos";
import { useEffect, useState } from "react";
import { SideBar } from "../Components/SideBar";
import axiosBase from "../api/axiosBase";

export default ({ ruta }) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwtdata");
  const [infojuego, setInfoJuego] = useState("");

  const buscarJuego = async (idLocalJuego) => {
    try {
      const response = await axiosBase.get(
        "/juegos/buscarJuego/" + idLocalJuego
      );
      setInfoJuego(response.data.nivel[0]);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let idjuegolocal = localStorage.getItem("idJuego");
    buscarJuego(idjuegolocal);
  }, []);

  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>

      <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
        <Queharemos ruta={ruta} />
      </section>
    </>
  );
};
