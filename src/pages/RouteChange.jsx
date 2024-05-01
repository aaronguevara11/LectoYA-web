import React, { useEffect, useState } from 'react'
import { Queharemos } from "../Components/Games/Queharemos";
import { CambialoYa } from "../Components/Games/CambialoYa";
import { Significado } from "../Components/Games/Significado";
import { Interactivas } from "../Components/Games/Interactivas";
import { Dado } from "../Components/Games/Dado";
import {IDado } from "../Components/Elements/IDado";
import {Modulos} from "../Components/views/Modulos"
import { OrdenaloYa } from "../Components/Games/OrdenaloYa";
import { Ruleteando } from "../Components/Games/RuletaYA";
import { RuletaRusaYa } from "../Components/Games/RuletaRusaYa";
import { Homeicon } from "../Components/Elements/Homeicon";
import {Curso} from "../Components/views/Curso"

export const RouteChange = () => {
  const [indexPage, setIndexPage] = useState("Ruleta")
  const [dataTopic, setDataTopic] = useState()

  const BackHome = () => {
    setIndexPage("Modulos")

  }
  const ChangeHome = (view) => {
    setIndexPage(view)
  }
  const ChangeTopic = (view,curso) => {
    setIndexPage(view)
    setDataTopic(curso)
  }

  
  function Item({ page }) {
    if (page=="Modulos") {
      return <Modulos ChangeTopic={ChangeTopic}/>;
    }else if(page=="Ruleta"){
      return <RuletaRusaYa ChangeHome={ChangeHome}/>
    }else if(page=="Curso"){
      return <Curso ChangeHome={ChangeHome} dataTopic={dataTopic}/>
    }
}

  

  return (
    <div>
      <Homeicon BackHome={BackHome} />
      <Item page={indexPage}/>
    </div>
  )
}
