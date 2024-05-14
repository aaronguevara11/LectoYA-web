import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import { SideBar } from "../SideBar";
import Box from '@mui/material/Box';
import axios from "axios";

export const FormOrdenalo = ({ruta}) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata')
  const idTema = localStorage.getItem('idTema')

  // INFO REGISTRAR INTERACTIVAS
  const [parrafo1,setParrafo1] = useState('')
  const [parrafo2,setParrafo2] = useState('')
  const [parrafo3,setParrafo3] = useState('')
  const [parrafo4,setParrafo4] = useState('')
  const [parrafo5,setParrafo5] = useState('')

  const agregarOrdenalo = async (parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, idTema) =>{

    try{
      const response = await axios.post(`${ruta}/ordenalo/agregarOrdenalo`,
      {
        parrafo1: parrafo1,
        parrafo2: parrafo2,
        parrafo3: parrafo3,
        parrafo4: parrafo4,
        parrafo5: parrafo5,
        idTema : idTema
      },{
        headers:{
          Authorization : token
        }
      });
      console.log(response.data)
      setLoading(false)
    }catch(error){
      console.log("ERROR" , error)
      setLoading(false)
    }
    
  }

  const handleSubmitOrdenalo =  async (e) => {
    e.preventDefault();
    await agregarOrdenalo(parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, idTema);
    setParrafo1('');
    setParrafo2('');
    setParrafo3('');
    setParrafo4('');
    setParrafo5('');
    alert("se agrego el juego correctamente")
  }

  const handleParrafo1 = ({target})=>{
    setParrafo1(target.value)
  }
  const handleParrafo2 = ({target})=>{
    setParrafo2(target.value)
  }
  const handleParrafo3 = ({target})=>{
    setParrafo3(target.value)
  }
  const handleParrafo4 = ({target})=>{
    setParrafo4(target.value)
  }
  const handleParrafo5 = ({target})=>{
    setParrafo5(target.value)
  }
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">Ordenalo YA</h1>
          </div>

          <hr className="border-2"/>

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitOrdenalo}>
              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo 1:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la primera pregunta..."
                  value={parrafo1}
                  onChange={handleParrafo1}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo 2:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la segunda pregunta... "
                  value={parrafo2}
                  onChange={handleParrafo2}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo 3:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la tercera pregunta..."
                  value={parrafo3}
                  onChange={handleParrafo3}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo 4:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la cuarta pregunta..."
                  value={parrafo4}
                  onChange={handleParrafo4}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Parrafo 5:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea 
                  className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]" 
                  placeholder="Escriba la quinta pregunta..."
                  value={parrafo5}
                  onChange={handleParrafo5}
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
