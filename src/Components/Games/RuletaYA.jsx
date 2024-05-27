import React, { useState } from 'react'
import ruleta from '../img/ruleta.png'
import arrow from '../img/arrow.png'
import { useNavigate } from "react-router-dom";
export const Ruleteando = () => {
    const [rotate,setRotate] = useState(0)
    const [colorlog, setColorlog] = useState("buenasuete")
    const shoot = ()=>{


    }

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1); // Navega a la vista anterior
    };
    
    const final = () => {
      let color=""
        const grades = (rotate % 360 +360 ) %360;
        if(grades>=0 && grades <= 72){
            color = "celeste"
            setColorlog(color)
        }else if(grades >=73 && grades <=143){
          color = "verde"
          setColorlog(color)

        }else if(grades >=144 && grades <=214){
          color = "rojo"
          setColorlog(color)
        }else if(grades >=215 && grades <=286){
          color = "morado"
          setColorlog(color)
        }else if(grades >=287 && grades <=358){
          color = "amarillo"
          setColorlog(color)
        }


    }

    const spin= ()=>
    {
        const newRotation= Math.floor(Math.random(20)*240)+340;
        setRotate(rotate + newRotation)
        final
    }
  return (
    <>
        {/* resultado */}
        <div className='monedas'></div>
        <div className='tiradas'></div>
        <div className='plafon relative mt-3 mx-auto mb-0 text-center w-[720px]'>
            <div className='ruleta w-[500px] h-[500px] bg-cover mt-0 mx-auto mb-4 flex justify-center items-center' 
            style={{ backgroundImage: `url(${ruleta})`,transform:`rotate(${rotate}deg)`, transition: "transform 10s cubic-bezier(0.6, 0, 0, 1)"}} 
            onTransitionEnd={final}
            >
            </div>

            <div className='w-full h-4 flex justify-center items-center'>
              <img src={arrow} alt="⚕️" className='  w-11 absolute z-10 h-4 top-0 rotate-180' />
            </div>

            <div className='premio'></div>
            <div className='barraInferior'>

              <span className=' w-32 bg-red-500 relative top-10'> {colorlog} </span>

                <button className='Lanzar w-32 h-8 rounded-lg text-white p-3 bg-slate-500 relative top-36' onClick={spin}>
                    lanzar
                </button>
            </div>
        </div>
    </>

  )
}