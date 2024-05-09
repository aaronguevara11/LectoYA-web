import { Interactivas } from "../Components/Games/Interactivas";

import { useEffect, useState } from "react";
import { SideBar } from "../Components/SideBar";
import axios from "axios";
export const HistoriasInteractivas = ({idJuego}) => {


    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('jwtdata')
    const [infojuego, setInfoJuego] = useState('');
    if(idJuego== undefined || idJuego == ""){

    }else{
      localStorage.setItem('idJuego',idJuego)
     }

 // PETICION BUSCAR JUEGO
  const buscarJuego = async (idjuegolocal) =>{
    console.log(idjuegolocal)
    try{
      const response = await axios.get(`http://localhost:3000/app/juegos/buscarJuego/${idjuegolocal}`,
        {
          headers : {
            Authorization: token
          }
        });
        console.log(response)
        setInfoJuego(response.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }

  }

  useEffect(()=>{
    let idjuegolocal = localStorage.getItem('idJuego')
    buscarJuego(idjuegolocal)
  },[])




  return (
    <>
    {loading && <div>Cargando...</div>}
    {!loading && (
        <>
            <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
                <SideBar token={token} />
            </div>

            <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
                <Interactivas infojuego={infojuego} />
            </section>
        </>
  )} 
  </>
  )
}
