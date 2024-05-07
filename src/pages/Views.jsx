import React from 'react'
import { SideBar } from "../Components/SideBar";
import { RouteChange } from "../pages/RouteChange";
import { Modulos } from '../Components/views/Modulos';
import { Formulario } from './Formulario';
import { nuevoCurso } from './nuevoCurso';
import { Interactivas } from '../Components/Games/Interactivas';
import { Dado } from '../Components/Games/Dado';

export const Views = ({setIdTema,setNombreCurso}) => {

  const token = localStorage.getItem('jwtdata')
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
      <Dado/>
        {/* <Modulos setIdTema={setIdTema}  setNombreCurso={setNombreCurso}/>   */}
      
    </div>
    </>
  )
}
