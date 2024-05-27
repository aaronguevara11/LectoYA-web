import { HdInteractivas } from "../Headers/HdInteractivas"
import { useState,useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router";
import axiosBase from "../../api/axiosBase";
import { useNavigate } from "react-router-dom";
export const Interactivas = ({ruta}) => {

  const [infojuego, setInfoJuego] = useState('');
  const token = localStorage.getItem('jwtdata')
  const [loading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState("");

  const [eventoOcurrido, setEventoOcurrido] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  let idjuegolocal = localStorage.getItem('idJuego')
  const handleItemClick = (key) => {
    
    setSelectedItem(key);
    setEventoOcurrido(true);
  };


  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navega a la vista anterior
  };
  

  const agregarRespuestaInteractivas = async (pregunta, respuesta, id) => {
    try {
        const response = await axios.post(`${ruta}/interactivas/agregarRespuesta`,{
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
        }, 1000);    }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  }
  



  const handleSubmit = (e) => {
    e.preventDefault();

    let valorinfo = selectedItem; 
    let valorNuevo = infojuego['' + valorinfo]
    let envioRespuesta =  valorinfo + ": " + valorNuevo

    
    console.log(infojuego.pregunta, envioRespuesta,idjuegolocal)
    agregarRespuestaInteractivas(infojuego.pregunta,envioRespuesta,idjuegolocal)
  };

useEffect(()=>{



},[selectedItem])



useEffect(()=>{

  console.log(respuesta)

},[respuesta])





 
  // PETICION BUSCAR JUEGO
   const buscarJuego = async (idjuegolocal) =>{
     try{
      const response = await axiosBase.get("/juegos/buscarJuego/" + idjuegolocal)
         setInfoJuego(response.data.juego)
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
 
  return (
    <>
      {loading && <div>Cargando...</div>}
      {!loading && (
        <>
          <section className="w-full h-4/5 justify-center">
            <HdInteractivas />
            <div className="pregunta w-full h-auto flex items-center justify-center mt-3 mb-5">
              <div className="h-auto w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
                <div className="px-4 pt-3">
                  <p
                  className="w-full h-auto min-h-[80px] max-h-[430px] text-[20px]">
                    {infojuego.parrafo}            
                  </p> 
                </div>
                <div className="pregunta flex justify-center w-full">
                  <div className="min-h-[80px] max-h-[120px] w-full mx-3 my-3 bg-yellow-500 rounded-xl overflow-hidden shadow-lg justify-center">
                    <div className="px-4 my-3">
                      <p className="text-gray mt-5 text-[22px]">
                        {infojuego.pregunta}                
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
              <form className="alternativas h-3/5 w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <div className="alternativas h-full w-full flex justify-center items-center ">
                  <div
                  className={selectedItem == 'claveA' ? 'border-solid border-gray-600 border-[2px] h-80 w-1/4 mx-8 px-6 bg-red-300 rounded-xl overflow-hidden shadow-lg grid items-center' 
                  : 'h-80 w-1/4 mx-8 px-6 bg-red-300 rounded-xl overflow-hidden shadow-lg grid items-center' }
                  onClick={() => handleItemClick('claveA')}
                  >
                    <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveA} </p>
                  </div>
                  <div
                  className={ selectedItem == 'claveB' ? 'border-solid border-gray-600 border-[2px] h-80 w-1/4 mx-8 px-6 bg-blue-300 rounded-xl overflow-hidden shadow-lg grid items-center' 
                  : 'h-80 w-1/4 mx-8 px-6 bg-blue-300 rounded-xl overflow-hidden shadow-lg grid items-center' }
                  onClick={() => handleItemClick('claveB')}
                  >
                    <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveB} </p>
                  </div>
                  <div 
                  className={selectedItem == 'claveC' ? 'border-solid border-gray-600 border-[2px] h-80 w-1/4 mx-8 px-6 bg-green-300 rounded-xl overflow-hidden shadow-lg grid items-center' 
                  : 'h-80 w-1/4 mx-8 px-6 bg-green-300 rounded-xl overflow-hidden shadow-lg grid items-center' }
                  onClick={() => handleItemClick('claveC')}
                  >
                    <p className="text-gray mt-5 w-full text-[28px] text-center">{infojuego.claveC} </p>
                  </div>
                </div>

                <button className="w-[250px] bg-blue-950 hover:bg-blue-900 text-white h-[75px] rounded-xl"
                  type="submit"
                  disabled={!eventoOcurrido}
                >
                    ENVIAR RESPUESTA
                </button>
              </form>
            

          </section>
        </>
      )} 
    </>
  )
}
