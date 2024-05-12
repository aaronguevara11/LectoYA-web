import React, { useState,useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import axios from 'axios';
import "../css/roulette.css"
import { AiOutlineSend } from "react-icons/ai";

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



  const buscarJuego = async (idjuegolocal) =>{
      
    try{
      const response = await axios.get(`http://localhost:3000/app/juegos/buscarJuego/${idjuegolocal}`,
        {
          headers : {
            Authorization: token
          }
        });

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

          <h1 className=' text-6xl text-[#e5177b] h-24'>GAME OF ROULETTE</h1>
          
      <div className='h-3/5'>
      <div className='container-roullete h-[600px] w-[600px]'>

                <Wheel
                mustStartSpinning={mustSpin}
                outerBorderWidth={4}
                radiusLineWidth={2}
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
      </div>



         <div className= " h-1/5 flex flex-col items-center pt-8">
              <span className=' p-5  text-[#f7a416] rounded-lg w-72 text-center text-3xl uppercas text font-bold'>{question}</span>

              <button className=' p-5 bg-[#871f7f] text-white rounded-lg w-52 text-center mt-10'
              onClick={handleSpinClick}
              disabled={spinEvent}
              >SPIN</button>
         </div>




         <div className="respuesta w-full h-2/8 mt-10 flex justify-center space-x-5">
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
   
    </div>
     
    </>
  )} 
  </>

  );
};
