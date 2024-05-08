import { RuletaRusaYa } from "../Components/Games/RuletaRusaYa"
import { useState } from "react";
import { SideBar } from "../Components/SideBar";
export const JuegoDeLaRuleta = () => {
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('jwtdata')


    setTimeout(() => {
        setLoading(false); 
    }, 1000);
  return (
    <>
    {loading && <div>Cargando...</div>}
    {!loading && (
        <>
            <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
                <SideBar token={token} />
            </div>

            <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
            
                <RuletaRusaYa/>
            </section>
        </>
  )} 
  </>
  )
}
