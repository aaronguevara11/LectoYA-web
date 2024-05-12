import '../css/dado.css'
import dado1 from '../img/1.png';
import dado2 from '../img/2.png';
import dado3 from '../img/3.png';
import dado4 from '../img/4.png';
import dado5 from '../img/5.png';
import dado6 from '../img/6.png';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { AiOutlineSend } from 'react-icons/ai';
export const IDado = ({ruta}) => {


  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata');
  const [infojuego, setInfoJuego] = useState('');
  const [dataPregunta,setdataPregunta] = useState([]);
  const [preguntaResponder, setPreguntaReponder] = useState('');
  const [respuesta,setRespuesta] = useState("");
  const [eventoOcurrido, setEventoOcurrido] = useState(false);


  const buscarJuego = async (idjuegolocal) =>{
      
    try{
      const response = await axios.get(`${ruta}/juegos/buscarJuego/${idjuegolocal}`,
        {
          headers : {
            Authorization: token
          }
        });

        setdataPregunta([
          {
            cara : 1,
            pregunta : response.data.juego.primera_pre
          },{
            cara : 2,
            pregunta : response.data.juego.segunda_pre
          },{
            cara : 3,
            pregunta : response.data.juego.tercera_pre
          },{
            cara : 4,
            pregunta : response.data.juego.cuarta_pre
          },{
            cara : 5,
            pregunta : response.data.juego.quinta_pre
          },{
            cara : 6,
            pregunta : response.data.juego.sexta_pre
          }

        ])

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

  },[])


  useEffect(()=>{
    // let idjuegolocal = localStorage.getItem('idJuego')
    // agregardado()
    const dice = document.getElementById('dice');
    
    if(dataPregunta != [] &&  dice){
      funcionesdado()
    }
    
  },[dataPregunta])






  /* RESPUESTA */

  const respuestaDado = async (pregunta, respuesta, id ) => {
    console.log(pregunta,respuesta,id)
    try {
        const response = await axios.post(`${ruta}/dado/respuestaDado`,{
          pregunta: pregunta,
          respuesta : respuesta,
          id : id // tabla juegos
        },{
            headers:{
                Authorization : token
            }
        })
        console.log(response.data)
    }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  }
  
  const handleChangeRespuesta = ({target}) =>{
    setRespuesta(target.value)
  }
  
  const handlesubmit = async (e) =>{
    e.preventDefault();
    let idjuegolocal = localStorage.getItem('idJuego')
    await respuestaDado(preguntaResponder,respuesta,idjuegolocal)
  }
  
  useEffect(()=>{

    if(preguntaResponder!=''){
      setEventoOcurrido(true)
    }


  },[preguntaResponder])









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

let shoot = 0  
const funcionesdado = () =>{
  
  const dice = document.getElementById('dice');
  const question = document.getElementById('question_123');
  
  dice.addEventListener('click', rollDice);
  
  function rollDice() {
    if(shoot==0){
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
      shoot+=1
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

      question.textContent = 'Resultado: ' + pregunta[0].pregunta;
      
      setPreguntaReponder(pregunta[0].pregunta)
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

   
    <div className="pregunta h-3/5 w-full flex justify-center align-top mt-5">
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
    </div>
      <div className="respuesta w-full h-20 mt-10 flex justify-center align-bottom space-x-5">
      <form 
        className="respuesta w-full h-24 mt-10 flex justify-center items-center space-x-5"
        onSubmit={handlesubmit}
        >

          <input type="text" 
            placeholder="Escribe aqui tu respuesta maximo 300 caracteres" 
            className="w-3/4 h-full p-8 mx-4 rounded-3xl border-none outline-none text-clip overflow-hidden"
            value={respuesta}
            onChange={handleChangeRespuesta}
            readOnly={!eventoOcurrido}
            />
          <button 
          className="rounded-[80%] w-[90px] h-20 bg-black text-white flex justify-center items-center"
          type="submit"
          disabled={!eventoOcurrido}
          >
            <AiOutlineSend className="h-3/5 w-3/5"/> 
        </button>
        </form>
      </div>
    </>
  )
}