import '../css/dado.css'
import dado1 from '../img/1.png';
import dado2 from '../img/2.png';
import dado3 from '../img/3.png';
import dado4 from '../img/4.png';
import dado5 from '../img/5.png';
import dado6 from '../img/6.png';

const dice = document.getElementById('dice');

    dice.addEventListener('click', rollDice);
    
    function rollDice() {
      dice.style.transform = 'rotateX(' + (Math.floor(Math.random() * 6) * 90 + 360 * 5) + 'deg) rotateY(' + (Math.floor(Math.random() * 6) * 90 + 360 * 5) + 'deg)';
      setTimeout(showResult, 1000);
    }
    
    function showResult() {
      const result = document.createElement('div');
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      /result.textContent = 'Resultado: ' + randomNumber;/
      result.classList.add('result');
      dice.appendChild(result);
    }
    
export const IDado = () => {
  return (
    <>
      <div className="container">
        <div className="dice" id="dice">
          <div className="side front">
            <img src={dado1} alt="" />
          </div>
          <div className="side back">
            <img src={dado2} alt="" />
          </div>
          <div className="side right">
            <img src={dado3} alt="" />
          </div>
          <div className="side left">
            <img src={dado4} alt="" />
          </div>
          <div className="side top">
            <img src={dado5} alt="" />
          </div>
          <div className="side bottom">
            <img src={dado6} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}