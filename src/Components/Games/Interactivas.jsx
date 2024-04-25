import { HdInteractivas } from "../Headers/HdInteractivas"

export const Interactivas = () => {
  return (
    <section className="w-full h-4/5 justify-center">
      <HdInteractivas />
      <div className="pregunta w-full h-2/5 flex items-center justify-center mt-3 mb-5">
        <div className=" h-auto w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
          <div className="px-4">
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

      <div className="alternativas h-2/5 w-full flex justify-center items-center mt-12">
        <div className="h-80 w-1/4 mx-8 px-6 bg-red-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">Clave A</p>
        </div>
        <div className="h-80 w-1/4 mx-8 px-6 bg-blue-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">Clave B</p>
        </div>
        <div className="h-80 w-1/4 mx-8 px-6 bg-green-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">Clave C</p>
        </div>
      </div>

    </section>
  )
}
