import { HdDado } from "../Headers/HdDados";
import { AiOutlineSend } from "react-icons/ai";
import { IDado } from "../Elements/IDado";

export const Dado = () => {
  return (
    <section className="w-full h-4/5 d-grid">
      <div className="body w-full h-screen">
      <HdDado />
      <div className="pregunta h-40 w-full flex justify-center align-top mt-5">
        <div className="h-40 w-2/5 mx-3 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px]">Pregunta</p>
        </div>
        <div className="h-40 w-2/5 mx-3 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg grid items-center">
        </div>
      </div>

      <div className="respuesta w-full h-20 mt-10 flex justify-center align-bottom space-x-5">
        <input type="textbox" placeholder="Escribe aqui tu respuesta maximo 300 caracteres" className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"/>
        <button className="rounded-[80%] w-[90px] h-20 bg-black text-white flex justify-center items-center">
          <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
      </div>
      </div>
    </section>
  )
}