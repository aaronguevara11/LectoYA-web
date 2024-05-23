import { Dado } from "../Components/Games/Dado"
import { useState } from "react";
import { SideBar } from "../Components/SideBar";

export const JuegoDelDado=  ({ruta}) => {
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('jwtdata')




    

  return (
    <>
        <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
            <SideBar token={token} />
        </div>

        <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
            <Dado ruta = {ruta} />
        </section>
  </>
)}
