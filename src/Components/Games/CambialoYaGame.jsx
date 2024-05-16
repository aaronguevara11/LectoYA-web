import { HdCambialo } from "../Headers/HdCambialo";
import { AiOutlineSend } from "react-icons/ai";
import { useState,useEffect } from "react";
import axios from "axios";
export const CambialoYaGame = ({ruta}) => {
  const [respuesta,setRespuesta] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata');
  const [emocion,setEmocion] = useState("")
  const [enunciado,setEnunciado] = useState("")

  /* BUSCAR JUEGO */

  const buscarJuego = async (idjuegolocal) =>{
      
    try{
      const response = await axios.get(`http://localhost:3000/app/juegos/buscarJuego/${idjuegolocal}`,
        {
          headers : {
            Authorization: token
          }
        });
        setEmocion(response.data.juego.emocion)
        setEnunciado(response.data.juego.enunciado)
        // setInfoJuego(response.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    let idjuegolocal = localStorage.getItem('idJuego')
    buscarJuego(idjuegolocal)

  },[])

/* AGREGAR respuesta */
  const agregarRespuestaCambialo = async (respuesta, id) => {
    try {
        const response = await axios.post(`${ruta}/cambialo/agregarRespuesta`,{
          respuesta : respuesta,
          id : id
        },{
            headers:{
                Authorization : token
            }
        })
  
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
    await agregarRespuestaCambialo(respuesta,idjuegolocal)
    alert('Respuesta enviada')
  }

  return (
    <>
      {loading && <div className="w-full h-full flex justify-center items-center">Cargando...</div>}
      {!loading && ( 
        <>
        <section className="w-full h-3/5">
      <HdCambialo/>
      <div className="pregunta w-full h-auto flex justify-center">
        <div className="h-full w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg grid items-center">
          <div className="px-4 mt-3">
            <div className="tittle mt-5">
              <h1 className="font-bold text-[44px] w-full mx-auto text-start ml-3 leading-none ">Lectura:</h1>
            </div>
            <p className="text-gray mt-5 text-[26px] min-h-[70px]">
              {enunciado}
            </p>
          </div>
          <div className="pregunta flex justify-center w-full mt-4">
            <div className="h-32 w-full mx-3 mb-6 bg-red-950 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="h-full flex justify-center items-center">
                <p className="text-white h-full text-center text-[30px] uppercase flex justify-center items-center">
                  Un final con mucha: <span className="font-bold px-4">{emocion}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="respuesta w-full h-2/8 my-6 flex justify-center space-x-5">
         <form 
        className="respuesta w-full h-24 mt-10 flex justify-center items-center space-x-5"
        onSubmit={handlesubmit}
        >

          <input type="text" 
            placeholder="Escribe aqui tu respuesta maximo 300 caracteres" 
            className="w-3/4 h-full px-4 text-gray-500 text-xl shadow appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline "
            value={respuesta}
            onChange={handleChangeRespuesta}
          />

          <button 
          className="rounded-[80%] w-[90px] h-20 bg-black text-white flex justify-center items-center"
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
