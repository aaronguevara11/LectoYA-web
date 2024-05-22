import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import { SideBar } from "../SideBar";
import Box from '@mui/material/Box';
import axios from "axios";

export default ({ruta}) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const idTema = localStorage.getItem('idTema')

  const [pregunta1, setPregunta1] = useState('')
  const [pregunta2, setPregunta2] = useState('')
  const [pregunta3, setPregunta3] = useState('')
  const [pregunta4, setPregunta4] = useState('')
  const [pregunta5, setPregunta5] = useState('')

  const agregarRuleteando = async (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, idTema) =>{
    
    try{
      const response = await axios.post(`${ruta}/ruleta/agregarRuleta`,{

      pregunta1: pregunta1,
      pregunta2: pregunta2,
      pregunta3: pregunta3,
      pregunta4: pregunta4,
      pregunta5: pregunta5,
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

  const handleSubmitRuleteando =  async (e) => {
    e.preventDefault();
    await agregarRuleteando(pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, idTema);
    setPregunta1('');
    setPregunta2('');
    setPregunta3('');
    setPregunta4('');
    setPregunta5('');
    alert("se agrego el juego correctamente")
  }

  const handlePregunta1 = ({target})=>{
    setPregunta1(target.value)
  }
  const handlePregunta2 = ({target})=>{
    setPregunta2(target.value)
  }
  const handlePregunta3 = ({target})=>{
    setPregunta3(target.value)
  }
  const handlePregunta4 = ({target})=>{
    setPregunta4(target.value)
  }
  const handlePregunta5 = ({target})=>{
    setPregunta5(target.value)
  }

  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">Ruleteando</h1>
          </div>

          <hr className="border-2"/>

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitRuleteando}>
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
                  value={pregunta1}
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
                  value={pregunta2}
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
                  value={pregunta3}
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
                  value={pregunta4}
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
                  value={pregunta5}
                  onChange={handlePregunta5}
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
