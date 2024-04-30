import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import "../css/roulette.css"
import { AiOutlineSend } from "react-icons/ai";
const data = [
  { option: '0', question:"1+1" },
  { option: '1', question:"2+2" },
  { option: '2', question:"3+3" },
  { option: '3', question:"4+4" },
  { option: '4', question:"5+5" },
];

export const RuletaRusaYa = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [question, setQuestion] = useState('Tira la ruleta');

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  const showQuestion = (prizenumber)=>{
    data.map(quest=>{
        if(quest.option == prizenumber){
            setQuestion(quest.question) 
        }
    })
  }
  return (
    <>

    <div className='w-full h-full flex  items-center flex-col relative top-0 p-10'>

          <h1 className=' text-6xl text-[#e5177b] h-24'>GAME OF ROULETTE</h1>
          <div className=' h-3/5 container-roullete'>

              <Wheel
               mustStartSpinning={mustSpin}
               prizeNumber={prizeNumber}
               data={data}
               backgroundColors={[
                   "#3f297e",
                   "#175fa9",
                   "#169ed8",
                   "#239b63",
                   "#64b031",
                   "#efe61f",
                   "#f7a416",
                   "#e6471d",
                   "#dc0936",
                   "#e5177b",
                   "#be1180",
                   "#871f7f"
                 ]}
               onStopSpinning={() => {
                 setMustSpin(false);
                 showQuestion(prizeNumber);
                 
               }} 
              />
          </div>

         <div className= " h-1/5 flex flex-col items-center pt-8">
              <span className=' p-5  text-[#f7a416] rounded-lg w-72 text-center text-3xl uppercas text font-bold'>{question}</span>

              <button className=' p-5 bg-[#871f7f] text-white rounded-lg w-52 text-center mt-10' onClick={handleSpinClick}>SPIN</button>
         </div>

         <div className="respuesta w-full h-2/8 mt-10 flex justify-center space-x-5">
        <input type="text" placeholder="Escribe aqui tu respuesta maximo 300 caracteres" className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"/>
        <button className="rounded-[80%] w-[90px] bg-black text-white flex justify-center items-center">
          <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
      </div>
   
    </div>
     
    </>
  );
};
