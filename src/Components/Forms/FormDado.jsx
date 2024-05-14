import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import { SideBar } from "../SideBar";
import Box from '@mui/material/Box';
import axios from "axios";

export const FormDado = ({ruta}) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const idTema = localStorage.getItem('idTema')

  const [primera_pre, setPrimeraPre] = useState('')
  const [segunda_pre, setSegundaPre] = useState('')
  const [tercera_pre, setTerceraPre] = useState('')
  const [cuarta_pre, setCuartaPre] = useState('')
  const [quinta_pre, setQuintaPre] = useState('')
  const [sexta_pre, setSextaPre] = useState('')


  const agregarDado = async (primera_pre,segunda_pre,tercera_pre,cuarta_pre,quinta_pre,sexta_pre,idTema) =>{
    
    try{
      const response = await axios.post(`${ruta}/dado/agregarDado`,{

      primera_pre: primera_pre,
      segunda_pre: segunda_pre,
      tercera_pre: tercera_pre,
      cuarta_pre: cuarta_pre,
      quinta_pre: quinta_pre,
      sexta_pre: sexta_pre,
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

  const handleSubmitDado =  async (e) => {
    e.preventDefault();
    await agregarDado(primera_pre,segunda_pre,tercera_pre,cuarta_pre,quinta_pre,sexta_pre,idTema);
    setPrimeraPre('');
    setSegundaPre('');
    setTerceraPre('');
    setCuartaPre('');
    setQuintaPre('');
    setSextaPre('');
    alert("se agrego el juego correctamente")
  }

  const handlePregunta1 = ({target})=>{
    setPrimeraPre(target.value)
  }
  const handlePregunta2 = ({target})=>{
    setSegundaPre(target.value)
  }
  const handlePregunta3 = ({target})=>{
    setTerceraPre(target.value)
  }
  const handlePregunta4 = ({target})=>{
    setCuartaPre(target.value)
  }
  const handlePregunta5 = ({target})=>{
    setQuintaPre(target.value)
  }
  const handlePregunta6 = ({target})=>{
    setSextaPre(target.value)
  }
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">El dado de las preguntas</h1>
          </div>

          <hr className="border-2"/>

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitDado}>
              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 1:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la primera pregunta..."
                  value={primera_pre}
                  onChange={handlePregunta1}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 2:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la segunda pregunta... "
                  value={segunda_pre}
                  onChange={handlePregunta2}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 3:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la tercera pregunta..."
                  value={tercera_pre}
                  onChange={handlePregunta3}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 4:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la cuarta pregunta..."
                  value={cuarta_pre}
                  onChange={handlePregunta4}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 5:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la quinta pregunta..."
                  value={quinta_pre}
                  onChange={handlePregunta5}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Pregunta 6:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la sexta pregunta..."
                  value={sexta_pre}
                  onChange={handlePregunta6}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center my-4">
                <div className="w-4/5 flex justify-end">
                  <Button className="w-1/4 h-[65px] text-[22px] text-white bg-[#3D5B80] hover:bg-[#304764] mb-3" type="submit">Agregar</Button>
                </div>
              </div>

            </form>
          </div>
        </section>
      </div>
    </>
  )
}
