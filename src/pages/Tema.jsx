import React, { useEffect } from "react";
import { useState } from "react"
import { SideBar } from "../Components/SideBar"
import { Collapse} from '@material-tailwind/react';
import { Button } from "@material-tailwind/react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Tema = ({idCurso,idTema,setIdJuego,setNombreJuego,setIdTema}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const [lectura,setLectura] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur libero quis voluptatibus sapiente natus itaque nobis. Possimus eaque dolor, iste aut praesentium voluptatem. Doloribus cumque iure fugit culpa reiciendis.')
  const [isOpen, setIsOpen] = useState(false);
  const [juegos,setJuegos] = useState ('');
  const toggleOpen = () => setIsOpen(!isOpen);
  const [dataResponse,setDataResponse] = useState('');
  const navigate = useNavigate();

  const nombreCurso = [
    {
      juego: "Historias interactivas",
    },
    {
      juego: "¿Ahora que haremos?",
    },
    {
      juego: "El dado de las preguntas",
    },
    {
      juego: "Cambialo YA",
    },
    {
      juego: "Ordenalo YA",
    },
    {
      juego: "Ruleteando",
    },
    {
      juego: "Dale un significado",
    }
    
  ]
 const handleredirectform = (nombreJuego,setNombreJuego,idTema,setIdTema)=>{
    setNombreJuego(nombreJuego)
    setIdTema(idTema)
    if(nombreJuego == "Historias interactivas" ){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "¿Ahora que haremos?"){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "Ruleteando"){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "Ordenalo YA"){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "El dado de las preguntas"){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "Dale un significado"){
      navigate("/home/FormularioJuego")
    }else if(nombreJuego == "Cambialo YA"){
      navigate("/home/FormularioJuego")
    }else{
      alert("el juego tiene problemas contacte con soporte o crealo denuevo")
    }
 }




  if(idTema== undefined || idTema == ""){

 }else{
   localStorage.setItem('idTema',idTema)
  }


  // VER TEMA PETICION 
  const verTema = async (idTema) => {
    try {
      const response = await axios.get(`http://localhost:3000/app/verTema/${idTema}`, {
        headers: {
          Authorization: token,
        },
      });

      setJuegos(response.data.Temas.juegos);
      setDataResponse(response.data)
      setLoading(false); 
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  };





  useEffect(() =>{
    const cursoLSG = localStorage.getItem('idTema');
    

    verTema(parseInt(cursoLSG))
    
  },[idTema,token])


  const handleRedirectGame = (idJuego,nombreJuego,setIdJuego) =>{
      
      setIdJuego(idJuego)
      console.log(nombreJuego)
    if(nombreJuego == "Historias interactivas" ){
      navigate("/home/historiasinteractivas")
    }else if(nombreJuego == "¿Ahora que haremos?"){
      navigate("/home/AhoraQueHaremos")
    }else if(nombreJuego == "Ruleteando"){
      navigate("/home/JuegoDeLaRuleta")
    }else if(nombreJuego == "Ordenalo YA"){
      navigate("/home/OrdenaloYa")
    }else if(nombreJuego == "El dado de las preguntas"){
      navigate("/home/JuegoDelDado")
    }else if(nombreJuego == "Dale un significado"){
      navigate("/home/DaleUnSignificado")
    }else if(nombreJuego == "Cambialo YA"){
      navigate("/home/DaleUnSignificado")
    }else{
      alert("el juego tiene problemas contacte con soporte o crealo denuevo")
    }
      
  }
  

  return (
    <>
      {loading && <div>Cargando...</div>}
      {!loading && (
                      <>
        <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
          <SideBar token={token} />
        </div>

        <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
          <div className="w-full h-[120px] flex items-center flex-col min-w-[560px]">
            <div className="titulo h-full flex items-center w-full">
              <div className="titulo w-full">
                <h1 className="font-bold font-sans pl-10 text-[68px]">{dataResponse.Temas.nombre}</h1>
              </div>
            </div>
            <hr />
          </div>

          <div className="w-full h-auto max-h-[430px] px-10">
            <textarea name="textarea" id="" value={dataResponse.Temas.lectura} readOnly
            className="w-full p-3 h-auto max-h-[430px] border-solid border-2 border-gray-900 focus:outline-none rounded-lg text-[20 px]">

            </textarea> 
          </div>



            <div className="w-full h-[60%] px-10 mt-7 flex flex-col items-center">
                <div className="bg-gray-200 w-full h-[15%] rounded overflow-hidden shadow-lg flex items-center ">
                  <div className="h-full w-full flex items-center">
                    <button className="text-start px-5 w-full h-full text-[45px] font-mono rounded-lg font-medium text-gray-700 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
                      onClick={toggleOpen}
                      aria-expanded={isOpen}
                    >
                      JUEGOS
                    </button>
                  </div>
                </div>

                  <Collapse open={isOpen} className=" overflow-y-scroll" >

                    <div className="w-full overflow-hidden shadow-lg border-2 flex flex-col items-center h-auto">

                  
                        {juegos.map((item) => (
                          <div
                            className="w-full h-[100px] rounded overflow-hidden border-b-2 flex items-center"
                            key={item.id}
                          >
                            <div className="w-4/5">
                              <h2 className="w-80 font-normal font-sans text-[20px] px-5">{item.nombreJuego}</h2>  {/* Accedemos a la propiedad nombreJuego del objeto actual */}
                            </div>
                            <div className="w-1/5 h-full flex items-center justify-center">
                              <Button
                                onClick={()=>{handleRedirectGame(item.id, item.nombreJuego, setIdJuego )} }
                                className="h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                              >
                                IR al juego
                              </Button>
                            </div>
                          </div>
                        ))}
                      
     

                    </div>
                    <div
                      className="w-full h-[100px] rounded overflow-hidden border-b-2 flex items-center"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Button
                          onClick={handleOpen}
                          className="h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                        >
                          ¿AGREGAR UN JUEGO?
                        </Button>
                      </div>
                    </div>
                  </Collapse>

                </div>




                <div className="w-full top-1/2 right-1/2">
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="w-full h-full flex justify-center items-center "
            >


            <Box className="w-[650px] h-[85%] backdrop-blur-md flex justify-center px-3 backdrop-brightness-50 rounded-[15px] p-4">
              <form className="w-[90%] h-auto flex justify-center">
                <div className="w-full h-full relative top-0">

                  <div className="titulo my-5 h-[10%]">
                    <h1 className="text-gray-100 uppercase font-bold font-mono text-[55px] text-center">Elegir juego</h1>
                  </div>

                  <div className="h-[84%] w-full">
                  {nombreCurso.map((item)=>(

                        <div className="flex flex-wrap w-full h-[12%] my-[15px] bg-slate-400 rounded-lg px-2" key={item.juego}>
                          <div className="w-full h-full px-3 flex items-center justify-center ">
                            <div className="w-4/5 h-full flex items-center">
                              <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold " htmlFor="grid-password">
                                {item.juego} 
                              </label>
                            </div>
                            <div className="w-1/5 h-full flex items-center">
                              <Button className="h-[45px] w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded" onClick={() => {handleredirectform(item.juego,setNombreJuego,idTema,setIdTema)}}>Elegir</Button>
                            </div>
                          </div>
                        </div>
                  ))}

                  </div>
                </div>
              </form>
            </Box>
          </Modal>
        </div>




        </section>
      </>
    )} 
    </>
  )
}
