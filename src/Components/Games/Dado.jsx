import { HdDado } from "../Headers/HdDados";
import { AiOutlineSend } from "react-icons/ai";
import { IDado } from "../Elements/IDado";
import { useState,useEffect } from "react";
import axios from "axios";
export const Dado = ({ruta}) => {
  const [result,setResult] = useState()
  const token = localStorage.getItem('jwtdata');

  
  return (
    <section className="w-full h-4/5 d-grid">
      <div className="body w-full h-screen">
      <HdDado />
      
        
          <IDado ruta={ruta}/>
       
    
      </div>
    </section>
  )
}