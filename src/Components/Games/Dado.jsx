import { HdDado } from "../Headers/HdDados";
import { AiOutlineSend } from "react-icons/ai";
import { IDado } from "../Elements/IDado";
import { useState } from "react";

export const Dado = () => {
  const [result,setResult] = useState()

  return (
    <section className="w-full h-4/5 d-grid">
      <div className="body w-full h-screen">
      <HdDado />
      <div className="pregunta h-3/5 w-full flex justify-center align-top mt-5">
        
          <IDado/>
       
      </div>

      <div className="respuesta w-full h-20 mt-10 flex justify-center align-bottom space-x-5">
        <input type="text" placeholder="Escribe aqui tu respuesta maximo 300 caracteres" className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"/>
        <button className="rounded-[80%] w-[90px] h-20 bg-black text-white flex justify-center items-center">
          <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
      </div>
      </div>
    </section>
  )
}