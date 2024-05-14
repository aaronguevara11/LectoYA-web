import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import { SideBar } from "../SideBar";
import Box from '@mui/material/Box';
import axios from "axios";

export const FormRegisterGame = ({setNombreJuego}) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const idTema = localStorage.getItem('idTema')

  // INFO REGISTRAR INTERACTIVAS
  const [parrafoInteractivas,setParrafoInteractivas] = useState('')
  const [preguntaInteractivas,setPreguntaInteractivas] = useState('')
  const [claveAInteractivas,setClaveAInteractivas] = useState('')
  const [claveBInteractivas,setClaveBInteractivas] = useState('')
  const [claveCInteractivas,setClaveCInteractivas] = useState('')
  

  const agregardado = async (pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,idTema) =>{
    
    try{
      const response = await axios.post(`http://localhost:3000/app/dado/agregarDado`,{

      primera_pre :  pregunta1,
      segunda_pre :  pregunta2,
      tercera_pre :  pregunta3,
      cuarta_pre  :  pregunta4,
      quinta_pre  :  pregunta5,
      sexta_pre   :  pregunta6,
      idTema : 1,
      },{
          headers : {
            Authorization: token
          }
        });
        console.log(response.data)
        // setInfoJuego(response.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }

  }


  const agregarInteractivas = async (parrafo,pregunta,claveA,claveB,claveC,idTema) =>{

    try{
      const response = await axios.post(`http://localhost:3000/app/interactivas/agregarHistoria`,
      {
        parrafo : parrafo,
        pregunta : pregunta,
        claveA : claveA,
        claveB : claveB,
        claveC : claveC,
        idTema : idTema
      },{
        headers:{
          Authorization : token
        }
      });
      console.log(response.data)
      setLoading(false)
    }catch(error){
      console.log("ERRRO" , error)
      setLoading(false)
    }
    
  }


  const handleSubmitInteractivas =  async (e) => {
    e.preventDefault();
    await agregarInteractivas(parrafoInteractivas,preguntaInteractivas,claveAInteractivas,claveBInteractivas,claveCInteractivas,idTema);
    setParrafoInteractivas('');
    setPreguntaInteractivas('');
    setClaveAInteractivas('');
    setClaveBInteractivas('');
    setClaveCInteractivas('');
    alert("se agrego el juego correctamente")
  }

  const handleParrafoInteractivas = ({target})=>{
    setParrafoInteractivas(target.value)
  }
  const handlePreguntaInteractivas = ({target})=>{
    setPreguntaInteractivas(target.value)
  }
  const handleClaveAInteractivas = ({target})=>{
    setClaveAInteractivas(target.value)
  }
  const handleClaveBInteractivas = ({target})=>{
    setClaveBInteractivas(target.value)
  }
  const handleClaveCInteractivas = ({target})=>{
    setClaveCInteractivas(target.value)
  }


  return (
    <>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">Preguntas Interactivas</h1>
          </div>

          <hr className="border-2"/>

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitInteractivas}>
              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo de la lectura:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba el parrafo..."
                  value={parrafoInteractivas}
                  onChange={handleParrafoInteractivas}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2" htmlFor="grid-first-name">
                    Pregunta:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la pregunta..."
                  value={preguntaInteractivas}
                  onChange={handlePreguntaInteractivas}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2" htmlFor="grid-first-name">
                    Clave A:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  id="grid-first-name" type="text" 
                  placeholder="Escriba la alternativa"
                  value={claveAInteractivas}
                  onChange={handleClaveAInteractivas}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2" htmlFor="grid-first-name">
                    Clave B:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  id="grid-first-name" type="text" 
                  placeholder="Escriba la alternativa"
                  value={claveBInteractivas}
                  onChange={handleClaveBInteractivas}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2" htmlFor="grid-first-name">
                    Clave C:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  id="grid-first-name" type="text" 
                  placeholder="Escriba la alternativa"
                  value={claveCInteractivas}
                  onChange={handleClaveCInteractivas}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center my-4">
                <div className="w-4/5 flex justify-end">
                  <Button className="w-1/4 h-[65px] text-[22px] text-white bg-[#3D5B80] hover:bg-[#304764]" type="submit">Agregar</Button>
                </div>
              </div>

            </form>
          </div>
        </section>
      </div>
    </>
  )
}