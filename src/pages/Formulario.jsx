import { useState } from "react"

export const Formulario = () => {
    const [tituloTema,setTituloTema] =useState() 
    const [descripcionTema,setDescripcionTema] =useState() 

  return (
        <>
            <div className="flex flex-col w-full h-full">
                <section className="flex h-[80px] p-5"> 
                    <input type="text" value={tituloTema}
                    className="border-solid border-2 rounded-lg border-slate-950 w-full h-[50px] m-5 p-5 text-[#000000] text" 
                    placeholder="INGRESE SU TITULO"/> 
                </section>

                <section className="flex h-3/5 p-5"> 
                    <input type="text"  value={descripcionTema}
                    className="border-solid border-2 rounded-lg border-slate-950 w-full h-auto m-5 p-5 text-[#000000]"
                    placeholder="INGRESE SU DESCRIPCIÓN"/>
                </section>
                <section className="flex h-1/5 p-5"> </section>
            </div>
        
        </>
  )
}
