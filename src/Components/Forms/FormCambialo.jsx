import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import { SideBar } from "../SideBar";
import Box from '@mui/material/Box';
import axios from "axios";

export const FormCambialo = ({ruta}) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const idTema = localStorage.getItem('idTema')

  const [enunciadoCambialo,setEnunciadoCambialo] = useState('')
  const [emocionCambialo,setEmocionCambialo] = useState('')

  const agregarCambialo = async (enunciado, emocion, idTema) =>{
    
    try{
      const response = await axios.post(`${ruta}/cambialo/agregarTrabajo`,{

      enunciado: enunciado,
      emocion: emocion,
      idTema : idTema,
      },{
          headers : {
            Authorization: token
          }
        });
        console.log(response.data)
        setLoading(false)
    }catch (error){
      console.log("ERROR" , error)
      setLoading(false)
    }

  }

  const handleSubmitCambialo=  async (e) => {
    e.preventDefault();
    await agregarCambialo(enunciadoCambialo, emocionCambialo,idTema);
    setEnunciadoCambialo('');
    setEmocionCambialo('');
    alert("se agrego el juego correctamente")
  }

  const handleEnunciadoCambialo = ({target})=>{
    setEnunciadoCambialo(target.value)
  }

  const handleEmocionCambialo = ({target}) => {
    setEmocionCambialo(target.value)
  }

  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">¿Ahora que haremos?</h1>
          </div>

          <hr className="border-2"/>

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitCambialo}>
              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo de la lectura:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la pregunta"
                  value={enunciadoCambialo}
                  onChange={handleEnunciadoCambialo}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Emocion:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la pregunta"
                  value={emocionCambialo}
                  onChange={handleEmocionCambialo}
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
