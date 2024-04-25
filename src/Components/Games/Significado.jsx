import { HdSignificado } from "../Headers/HdSignificado";
import { AiOutlineSend } from "react-icons/ai";

export const Significado = () => {
  return (
    <section className="w-full h-2/5">
      <HdSignificado/>

      <div className="pregunta w-full h-auto flex justify-center mt-3">
        <div className=" h-auto w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
          <div className="px-4">
            <div className="tittle mt-2">
              <h1 className="font-bold text-[44px] w-full mx-auto text-start ml-3 leading-none ">Dale un significado</h1>
            </div>
            <p className="text-gray mt-4 text-[22px]">
              Diseñado para expandir tu capacidad de interpretación y comprensión textual. Aquí, la tarea es seleccionar
              tres palabras clave de un párrafo proporcionado y asignarles significados que se alineen con el contexto general de la lectura. A medida que te sumerges en una variedad de párrafos desafiantes, el juego fomenta tu agudeza analítica y tu creatividad al exigir que descubras las intenciones detrás de cada palabra seleccionada. ¿Estás listo para enfrentar el desafío y revelar el significado de cada palabra?
            </p>
          </div>
          <div className="pregunta flex justify-center w-full">
            <div className=" h-4/5 w-full mx-3 my-3 bg-yellow-500 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="px-4 my-3">
                <p className="text-gray mt-5 text-[22px]">
                  Pero lo más inquietante fue ver a los niños desaparecidos, sentados en círculo y con expresiones vacías en sus rostros. "¡Chicos! ¿Están bien?", exclamó Sofía. Pero los niños no respondieron. Parecían estar bajo un hechizo o algo parecido. En ese momento, un hombre misterioso apareció detrás de ellos.                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="significado1 w-full h-auto flex justify-center">
        <div className="palabra w-2/5 px-5 h-2/8 mt-7 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui la palabra que escogiste"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
        <div className="significado w-2/5 px-5 h-2/8 mt-7 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui su significado"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
      </div>


      <div className="significado2 w-full h-auto flex justify-center">
      <div className="palabra w-2/5 px-5 h-2/8 mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui la palabra que escogiste"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
        <div className="significado w-2/5 px-5 h-2/8 mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui su significado"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
      </div>

      <div className="significado3 w-full h-auto flex justify-center">
      <div className="palabra w-2/5 px-5 h-2/8 mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui la palabra que escogiste"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
        <div className="significado w-2/5 px-5 h-2/8 mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Escribe aqui su significado"
            className="w-full h-full p-8 rounded-3xl border-none outline-none"
          />
        </div>
      </div>

      <div className="enviar flex justify-center my-6 rounded-lg">
        <button className="w-1/6 h-20 bg-black text-white flex justify-center items-center rounded-3xl">
          <span className="text-[25px] px-3">Enviar</span>
          <AiOutlineSend className="h-1/2 w-1/6" />
        </button>
      </div>


    </section>
  )
}
