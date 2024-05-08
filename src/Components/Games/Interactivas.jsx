import { HdInteractivas } from "../Headers/HdInteractivas"

export const Interactivas = ({infojuego}) => {
  console.log(infojuego)
  return (
    <section className="w-full h-4/5 justify-center">
      <HdInteractivas />
      <div className="pregunta w-full h-2/5 flex items-center justify-center mt-3 mb-5">
        <div className=" h-auto w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
          <div className="px-4">
            <p className="text-gray mt-4 text-[22px]">
              {infojuego.parrafo}
            </p>
          </div>
          <div className="pregunta flex justify-center w-full">
            <div className=" h-4/5 w-full mx-3 my-3 bg-yellow-500 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="px-4 my-3">
                <p className="text-gray mt-5 text-[22px]">
                  {infojuego.pregunta}                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alternativas h-2/5 w-full flex justify-center items-center mt-12">
        <div className="h-80 w-1/4 mx-8 px-6 bg-red-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveA} </p>
        </div>
        <div className="h-80 w-1/4 mx-8 px-6 bg-blue-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveB} </p>
        </div>
        <div className="h-80 w-1/4 mx-8 px-6 bg-green-300 rounded-xl overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveC} </p>
        </div>
      </div>

    </section>
  )
}
