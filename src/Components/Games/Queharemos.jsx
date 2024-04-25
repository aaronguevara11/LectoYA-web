import { Home } from "../Headers/HdHaremos"
import { AiOutlineSend } from "react-icons/ai";

export const Queharemos = () => {
  return (
    <section className="w-full h-3/5">
      <Home/>

      <div className="pregunta w-full h-full flex justify-center">
        <div className=" h-full w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
          <div className="px-4 mt-3">
            <div className="tittle mt-5">
              <h1 className="font-bold text-[44px] w-full mx-auto text-start ml-3 leading-none ">¿Ahora que haremos?</h1>
            </div>
            <p className="text-gray mt-5 text-[22px]">
              Sumérgete en la experiencia única de "¿Ahora Qué Haremos?", un juego que fusiona narrativa y resolución de problemas de manera emocionante. En este juego, te enfrentarás a situaciones desafiantes presentadas en la historia y tu tarea es encontrar soluciones creativas para los dilemas planteados.
              Este juego te invita a explorar la creatividad y el pensamiento estratégico mientras te sumerges en la trama y ofreces soluciones a los desafíos planteados. Prepárate para enfrentar dilemas intrigantes y descubrir cómo tus decisiones pueden cambiar el rumbo de la historia de maneras inesperadas y gratificantes.
            </p>
          </div>
          <div className="pregunta flex justify-center w-full">
            <div className=" h-4/5 w-full mx-3 my-6 bg-gray-100 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="px-4 my-3">
                <p className="text-gray mt-5 text-[22px]">
                En el pintoresco pueblo de Villa Esperanza, la tranquila cotidianidad se ve abruptamente interrumpida por la misteriosa desaparición de los niños. La intriga y el temor envuelven a la comunidad, sumergiéndola en un suspense creciente. Tomás, Sofía y Mateo, un grupo de valientes amigos, deciden enfrentarse al enigma y emprenden una investigación por cuenta propia. Su búsqueda los lleva a un colegio abandonado, donde descubren una puerta secreta que revela una escena desconcertante: los niños desaparecidos, en un estado extraño, y un hombre misterioso que parece tener respuestas. ¿Quién es este enigmático personaje y qué oscuros secretos guarda tras la puerta?
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="respuesta w-full h-2/8 mt-10 flex justify-center space-x-5">
        <input type="text" placeholder="Escribe aqui tu respuesta maximo 300 caracteres" className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"/>
        <button className="rounded-[80%] w-[90px] bg-black text-white flex justify-center items-center">
          <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
      </div>
    </section>
  )
}
