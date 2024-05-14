import React from 'react'
import { SideBar } from "../Components/SideBar";
import { RouteChange } from "./RouteChange";
import { Modulos } from '../Components/views/Modulos';
import { Formulario } from './Formulario';
import { nuevoCurso } from './nuevoCurso';
//JUEGOS
import { Dado } from '../Components/Games/Dado';
import { Interactivas } from '../Components/Games/Interactivas';
import { RuletaRusaYa } from '../Components/Games/RuletaRusaYa';
import { OrdenaloYaGame } from '../Components/Games/OrdenaloYaGame';
import { Queharemos } from '../Components/Games/Queharemos';
import { Significado } from '../Components/Games/Significado';
import { FormRuleteando } from '../Components/Forms/FormRuleteando';
import { FormHaremos } from '../Components/Forms/FormHaremos';
import { FormSignificado } from '../Components/Forms/FormSignificado';
import { FormDado } from '../Components/Forms/FormDado';
import { FormCambialo } from '../Components/Forms/FormCambialo';
import { FormOrdenalo } from '../Components/Forms/FormOrdenalo';
import { RegistroDocente } from './RegistroDocente';

export const Views = ({setIdTema,setNombreCurso}) => {

  const token = localStorage.getItem('jwtdata')
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
      {/* <Dado/> */}
      <Modulos setIdTema={setIdTema}  setNombreCurso={setNombreCurso}/>
    </div>
    </>
  )
}
