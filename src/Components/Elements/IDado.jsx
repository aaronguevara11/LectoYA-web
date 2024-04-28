import '../css/dado.css'
import dado1 from '../img/1.png';
import dado2 from '../img/2.png';
import dado3 from '../img/3.png';
import dado4 from '../img/4.png';
import dado5 from '../img/5.png';
import dado6 from '../img/6.png';
import React, { useEffect } from 'react';

export const IDado = () => {
  
  useEffect(() => {
    const dice = document.getElementById('dice');
    const question = document.getElementById('question_123');
    dice.addEventListener('click', rollDice);
    
    function rollDice() {
      dice.style.transform = 'rotateX(' + (Math.floor(Math.random() * 6) * 90 + 360 * 5) + 'deg) rotateY(' + (Math.floor(Math.random() * 6) * 90 + 360 * 5) + 'deg)';
      setTimeout(showResult, 1000);
    }
    
    function showResult() {
      const result = document.createElement('div');
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      question.textContent = ''
      // result.textContent = 'Resultado: ' + randomNumber;
      
      result.classList.add('result');
      dice.appendChild(result);
    }

    // Remover el event listener cuando el componente se desmonte
    return () => {
      dice.removeEventListener('click', rollDice);
    };
  }, []); // El segundo argumento es un arreglo vacío para que se ejecute solo una vez cuando se monta el componente

  return (
    <>
      <div className="container">
        <div className="dice flex justify-center align-center" id="dice">
          <div className="side front h-full w-full">
            <img src={dado1} className='h-full w-full' />
          </div>
          <div className="side back">
            <img src={dado2} className='h-full w-full p-5'/>
          </div>
          <div className="side right">
            <img src={dado3} className='h-full w-full p-5'/>
          </div>
          <div className="side left">
            <img src={dado4} className='h-full w-full p-5'/>
          </div>
          <div className="side top">
            <img src={dado5} className='h-full w-full p-5'/>
          </div>
          <div className="side bottom">
            <img src={dado6} className='h-full w-full p-5' />
          </div>
        </div>
      </div>
    </> 
  )
}