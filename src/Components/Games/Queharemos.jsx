import { Home } from "../Headers/HdHaremos"
import { AiOutlineSend } from "react-icons/ai";
import { useState,useEffect } from "react";
import axios from "axios";
import axiosBase from "../../api/axiosBase";
import { useNavigate } from "react-router-dom";
export const Queharemos = ({ruta}) => {

  const [infojuego, setInfoJuego] = useState('');



  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata');
  const [respuesta,setRespuesta] = useState("");

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navega a la vista anterior
  };

  const buscarJuego = async (idLocalJuego) =>{
        
    try{    
      const response = await axiosBase.get("/juegos/buscarJuego/" + idLocalJuego
      )
        console.log(response.data)
        console.log(response.data.juego.pregunta)
        setInfoJuego(response.data.juego.pregunta)
        setLoading(false)

    }catch(error){
        console.log("error" , error)
        setLoading(false)
    }
}


useEffect(()=>{
    let idjuegolocal = localStorage.getItem('idJuego')
    buscarJuego(idjuegolocal)
},[])





const agregarRespuestaQueHaremos = async (pregunta, respuesta, id) => {
  try {
      const response = await axios.post(`${ruta}/haremos/agregarRespuesta`,{
        pregunta: pregunta,
        respuesta: respuesta,
        id :id

      },{
          headers:{
              Authorization : token
          }
      })
        alert(response.data.message)
        setTimeout(() => {
          handleGoBack();
        }, 1000);
      }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}




const handleChangeRespuesta = ({target}) =>{
  setRespuesta(target.value)
}

const handlesubmit = async (e) =>{
  e.preventDefault();
  let idjuegolocal = localStorage.getItem('idJuego')
  await agregarRespuestaQueHaremos(infojuego,respuesta,idjuegolocal)
}







  return (
    <>
    {loading && <div>Cargando...</div>}
    {!loading && (
        <>
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
                    {infojuego}

                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="respuesta w-full h-2/8 mt-10 flex justify-center space-x-5">
        <form 
        className="respuesta w-full h-2/8 mt-10 flex justify-center space-x-5"
        onSubmit={handlesubmit}
        >
          <input type="text" 
          placeholder="Escribe aqui tu respuesta maximo 300 caracteres" 
          className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"
          value={respuesta}
          onChange={handleChangeRespuesta}
          />
          <button 
          className="rounded-[80%] w-[90px] bg-black text-white flex justify-center items-center"
          type="submit"
          >
            <AiOutlineSend className="h-3/5 w-3/5"/> 
          </button>
        </form>

      </div>
    </section>
    
    </>
  )} 
  </>
  )
}
