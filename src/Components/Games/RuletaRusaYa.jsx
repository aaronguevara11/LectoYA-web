import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

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
      <span>{question}</span>

      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};
