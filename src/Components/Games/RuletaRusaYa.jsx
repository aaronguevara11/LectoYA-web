import React, { useState,useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import axios from 'axios';
import "../css/roulette.css"
import { AiOutlineSend } from "react-icons/ai";
import axiosBase from '../../api/axiosBase';
import { useNavigate } from "react-router-dom";
export const RuletaRusaYa = ({ruta}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(1);
  const [data,setData] = useState([])

  const [spinEvent, setSpinEvent] = useState(false)
  const [question, setQuestion] = useState('Tira la ruleta');
  const [respuesta,setRespuesta] = useState("");

  const [eventoOcurrido, setEventoOcurrido] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtdata');
  const [infojuego, setInfoJuego] = useState('');
  let idjuegolocal = localStorage.getItem('idJuego')

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navega a la vista anterior
  };

  const buscarJuego = async (idjuegolocal) =>{
      
    try{
      const response = await axiosBase.get("/juegos/buscarJuego/" + idjuegolocal)

        setData([
          { option: '1', question: response.data.juego.pregunta1 },
          { option: '2', question: response.data.juego.pregunta2 },
          { option: '3', question: response.data.juego.pregunta3 },
          { option: '4', question: response.data.juego.pregunta4 },
          { option: '5', question: response.data.juego.pregunta5 },
        ])

        // setInfoJuego(response.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }
  }
  let shoot = 0

  useEffect(()=>{
    let idjuegolocal = localStorage.getItem('idJuego')
    // agregardado()
    buscarJuego(idjuegolocal)

  },[])




  const handleSpinClick = () => {
    setSpinEvent(true)
    const prizenumberfilter = Math.floor(Math.random() * 4) 
    const newPrizeNumber = Math.floor(Math.random() * 4) 
    
    // const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  const showQuestion = (prizenumber)=>{
    data.map(quest=>{
        if(quest.option == prizenumber+1){
            setQuestion(quest.question) 
        }
    })
  }



  useEffect(()=>{
    // let idjuegolocal = localStorage.getItem('idJuego')
    // agregardado()    
    if(setData != []){

    }
    
  },[setData])


  const respuestaRuleta = async (pregunta, respuesta, id ) => {
    console.log(pregunta,respuesta,id)
    try {
        const response = await axios.post(`${ruta}/ruleta/respuestaRuleta`,{
          pregunta: pregunta,
          respuesta : respuesta,
          id : id // tabla juegos
        },{
            headers:{
                Authorization : token
            }
        })
        alert(response.data.message)
        setTimeout(() => {
          handleGoBack();
        }, 1000);    }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  }
  





  const handleChangeRespuesta = ({target}) =>{
    setRespuesta(target.value)
  }
  
  const handlesubmit = async (e) =>{
    e.preventDefault();
    
    await respuestaRuleta(question,respuesta,idjuegolocal)
  }
  
  
  useEffect(()=>{
    if(question != 'Tira la ruleta'){
      setEventoOcurrido(true)
      
    }
    
  },[question])
  

  return (
    <>
    {loading && <div>Cargando...</div>}
    {!loading && (
        <>
    <div className='w-full h-full flex  items-center flex-col relative top-0 p-2'>
      <div className="w-11/12 h-[120px] flex justify-center pb-5">
        <h1 className="px-10 w-full uppercase font-bold text-[60px] pt-4">Ruleteando</h1>
      </div>
      <hr className='w-full'/>
      <div className="w-full h-4/5 flex">

          <div className="w-1/2 h-full pt-5 flex justify-center items-center flex-col">
            <div className='container-roullete h-[450px] w-[450px] '>

                <Wheel
                mustStartSpinning={mustSpin}
                outerBorderWidth={3}
                radiusLineWidth={2}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={[
                    "#98C0D9",
                    "#7890A5",
                    "#3D5B80",
                    "#856666",
                    "#A4A4A4",
                  ]}
                onStopSpinning={() => {
                  setMustSpin(false);
                  showQuestion(prizeNumber);
                  
                }} 
                />
            </div>
            <div className="h-[70px] w-full mt-5 flex justify-center">
              <button className='p-5 bg-blue-950 hover:bg-blue-900 text-white rounded-lg w-52 text-center font-semibold text-[20px]'
              onClick={handleSpinClick}
              disabled={spinEvent}
              >GIRAR</button>
            </div>
          </div>

        <div className="w-1/2 h-full flex items-center">
          <div className="w-4/5 h-1/3 rounded overflow-hidden shadow-lg flex items-center">
            <div className="px-4 mt-3">
              <div className="font-bold text-[28px]">Pregunta</div>
              <span className='text-black rounded-lg w-72 text-center text-3xl uppercase'>{question}</span>
            </div>
          </div>
        </div>
      </div>




      <div className="respuesta w-full h-2/8 mb-10 flex justify-center space-x-5">
         <form 
        className="respuesta w-full h-24 mt-10 flex justify-center items-center space-x-5"
        onSubmit={handlesubmit}
        >

          <input type="text" 
            placeholder="Escribe aqui tu respuesta maximo 300 caracteres" 
            className="w-3/4 h-full px-4 text-gray-500 text-xl shadow appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline "
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
   
    </div>
     
    </>
  )} 
  </>

  );
};
