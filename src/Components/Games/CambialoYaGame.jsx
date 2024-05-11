import { HdCambialo } from "../Headers/HdCambialo";
import { AiOutlineSend } from "react-icons/ai";

export const CambialoYaGame = () => {
  return (
    <section className="w-full h-3/5">
      <HdCambialo/>
      <div className="pregunta w-full h-full flex justify-center">
        <div className=" h-full w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg grid items-center">
          <div className="px-4 mt-3">
            <div className="tittle mt-5">
              <h1 className="font-bold text-[44px] w-full mx-auto text-start ml-3 leading-none ">ATENCION</h1>
            </div>
            <p className="text-gray mt-5 text-[32px]">
              Ahora que ya conoces la lectura, vamos a ponerte a prueba. Te daremos una emoción y tu tienes que convertir el final con esa nueva emoción, si es ira el final tiene que tener mucha ira, si es amor, el final debe estar enfocado en el amor.
            </p>
          </div>
          <div className="pregunta flex justify-center w-full">
            <div className=" h-32 w-full mx-3 mb-6 bg-red-950 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="h-full flex justify-center items-center">
                <p className="text-white h-full text-center text-[40px] uppercase font-semibold flex justify-center items-center">
                  Un final con mucho miedo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="respuesta w-full h-24 mt-10 flex justify-center items-center space-x-5">
        <input type="text" placeholder="Escribe aqui tu respuesta maximo 300 caracteres" className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"/>
        <button className="rounded-[80%] w-[90px] h-20 bg-black text-white flex justify-center items-center">
          <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
      </div>
    </section>
  )
}
