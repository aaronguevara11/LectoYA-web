import '../css/dado.css'
import dado1 from '../img/1.png';
import dado2 from '../img/2.png';
import dado3 from '../img/3.png';
import dado4 from '../img/4.png';
import dado5 from '../img/5.png';
import dado6 from '../img/6.png';
import React, { useEffect,useState } from 'react';
import axios from 'axios';

export const IDado = ({idJuego}) => {


  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata');
  const [infojuego, setInfoJuego] = useState('');
  const [dataPregunta,setdataPregunta] = useState([]);

  if(idJuego== undefined || idJuego == ""){

  }else{
    localStorage.setItem('idJuego',idJuego)
  }


  const buscarJuego = async (idjuegolocal) =>{
      console.log(idjuegolocal)
    try{
      const response = await axios.get(`http://localhost:3000/app/juegos/buscarJuego/${idjuegolocal}`,
        {
          headers : {
            Authorization: token
          }
        });
        console.log(response.data)
        setdataPregunta([
          {
            cara : 1,
            pregunta : response.data.nivel[0].primera_pre
          },{
            cara : 2,
            pregunta : response.data.nivel[0].segunda_pre
          },{
            cara : 3,
            pregunta : response.data.nivel[0].tercera_pre
          },{
            cara : 4,
            pregunta : response.data.nivel[0].cuarta_pre
          },{
            cara : 5,
            pregunta : response.data.nivel[0].quinta_pre
          },{
            cara : 6,
            pregunta : response.data.nivel[0].sexta_pre
          }

        ])

        console.log(dataPregunta)
        // setInfoJuego(response.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }

  }


  useEffect(()=>{
    let idjuegolocal = localStorage.getItem('idJuego')
    // agregardado()
    buscarJuego(idjuegolocal)
    console.log(idjuegolocal)
  },[])


  useEffect(()=>{
    // let idjuegolocal = localStorage.getItem('idJuego')
    // agregardado()
    const dice = document.getElementById('dice');
    console.log(dataPregunta)
    if(dataPregunta != [] &&  dice){
      funcionesdado()
    }
    
  },[dataPregunta])








  const dataResultados= [
    { valor1: 1890, valor2: 1800, resultado: 6 },
    { valor1: 1890, valor2: 2070, resultado: 6 },
    { valor1: 1890, valor2: 2160, resultado: 6 },
    { valor1: 2250, valor2: 2160, resultado: 6 },
    { valor1: 1890, valor2: 1980, resultado: 6 },
    { valor1: 2250, valor2: 1980, resultado: 6 },
    { valor1: 2250, valor2: 1890, resultado: 6 },
    { valor1: 2250, valor2: 2250, resultado: 6 },
    { valor1: 2160, valor2: 2160, resultado: 1 },
    { valor1: 1980, valor2: 1980, resultado: 1 },
    { valor1: 1800, valor2: 1800, resultado: 1 },
    { valor1: 1800, valor2: 2160, resultado: 1 },
    { valor1: 2160, valor2: 1980, resultado: 2 },
    { valor1: 1980, valor2: 1800, resultado: 2 },
    { valor1: 1980, valor2: 2160, resultado: 2 },
    { valor1: 1800, valor2: 1980, resultado: 2 },
    { valor1: 2160, valor2: 2250, resultado: 4 },
    { valor1: 1800, valor2: 2250, resultado: 4 },
    { valor1: 2160, valor2: 1890, resultado: 4 },
    { valor1: 1980, valor2: 2070, resultado: 4 },
    { valor1: 1800, valor2: 1890, resultado: 4 },
    { valor1: 2070, valor2: 2250, resultado: 5 },
    { valor1: 2070, valor2: 1980, resultado: 5 },
    { valor1: 2070, valor2: 2070, resultado: 5 },
    { valor1: 2070, valor2: 1800, resultado: 5 },
    { valor1: 2070, valor2: 2160, resultado: 5 },
    { valor1: 1800, valor2: 2070, resultado: 3 },
    { valor1: 1980, valor2: 1890, resultado: 3 },
    { valor1: 1980, valor2: 2250, resultado: 3 },
    { valor1: 2160, valor2: 2070, resultado: 3 }
  ]

let tiro = 0  
const funcionesdado = () =>{
  const dice = document.getElementById('dice');
  const question = document.getElementById('question_123');
  
  dice.addEventListener('click', rollDice);
  
  function rollDice() {
    console.log(tiro)
    if(tiro==0){
        // valor del 1 al 6
    const valorAleatorio = Math.floor(Math.random() * 6) + 1;


    let resultadoDado = "";
    // Filtrar los registros que tengan el mismo valor en la propiedad 'resultado'
    const registrosFiltrados = dataResultados.filter(registro => registro.resultado === valorAleatorio);
    




    // Verificar si hay registros con el mismo valor en 'resultado'
    if (registrosFiltrados.length > 0) {
      // Seleccionar aleatoriamente un registro de los registros filtrados
      const registroSeleccionado = registrosFiltrados[Math.floor(Math.random() * registrosFiltrados.length)];

     
      const primerValor = (registroSeleccionado.valor1)
      const segundoValor = (registroSeleccionado.valor2)
      dice.style.transition = 'transform 1s'; // Agrega una transición para suavizar el cambio

      // Primer cambio de estilo del dado
      // dice.style.transform = 'rotateX(' + 2240 + 'deg) rotateY(' + 1890 + 'deg)';
      
      // Segundo cambio de estilo del dado, después de 1 segundo
      // setTimeout(() => {
      //   dice.style.transform = 'rotateX(' + primerValor + 'deg) rotateY(' + segundoValor + 'deg)';
      // }, 1000);
      dice.style.transform = 'rotateX(' + primerValor + 'deg) rotateY(' + segundoValor + 'deg)';
      
      resultadoDado = registroSeleccionado.resultado 
      setTimeout(showResult(resultadoDado), 1000);
      tiro+=1
    } else {
      console.log('No hay registros con el valor', valorAleatorio, 'en la propiedad resultado');
    }

    }else{
      
    }

    // Guarda el resultado del dado
    
  }
  
  function showResult(resultadoDado) {
    const result = document.createElement('div');
    question.style.transition = 'ease-in-out 2s';
    // question.classList.toggle('mi-elemento')
    
    question.textContent = ''
    setTimeout(() => {
      // question.classList.toggle('mi-elemento.mostrar');
      const pregunta = dataPregunta.filter(registro => registro.cara == resultadoDado);
      console.log(pregunta)
      question.textContent = 'Resultado: ' + pregunta[0].pregunta;
      
    }, 1000);
    
    
    result.classList.add('result');
    dice.appendChild(result);
  }

  // Remover el event listener cuando el componente se desmonte
  return () => {
    dice.removeEventListener('click', rollDice);
  };
}



  useEffect(() => {
   
  }, []); // El segundo argumento es un arreglo vacío para que se ejecute solo una vez cuando se monta el componente

  return (
    <>
    {loading && <div>Cargando...</div>}
      {!loading && ( 
        <>
          
        <div className="h-full w-2/5 mx-3 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg grid items-center">
          <p className="text-gray mt-5 w-full text-[28px]" id="question_123">Pregunta</p>
        </div>

        
        <div className="h-full w-2/5 mx-3 px-6 bg-red-400 rounded-xl border-4 overflow-hidden shadow-lg grid items-center justify-center">

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

        </div>


          
        </> )}
      
    </> 
  )
}