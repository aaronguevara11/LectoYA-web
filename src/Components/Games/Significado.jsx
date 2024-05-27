import { useEffect, useState } from "react";
import { HdSignificado } from "../Headers/HdSignificado";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import axiosBase from "../../api/axiosBase";
import { useNavigate } from "react-router-dom";

export const Significado = ({ruta}) => {

  const token = localStorage.getItem('jwtdata')
  const [loading, setLoading] = useState(true);
  const [lectura,setLectura] = useState('');
  const [palabra1, setPalabra1] = useState('')
  const [palabra2, setPalabra2] = useState('')
  const [palabra3, setPalabra3] = useState('')
  const [significado1, setSignificado1] = useState('')
  const [significado2, setSignificado2] = useState('')
  const [significado3, setSignificado3] = useState('')
  let idjuegolocal = localStorage.getItem('idJuego')


  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navega a la vista anterior
  };


  const buscarJuego = async (idjuegolocal) =>{
    try{
      const response = await axiosBase.get("/juegos/buscarJuego/" + idjuegolocal)
          console.log(response.data)
          setLectura(response.data.juego.lectura)
        // setInfoJuego(respon se.data.nivel[0])
        setLoading(false)
    }catch (error){
      console.log("ERRRO" , error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    
    buscarJuego(idjuegolocal)
  },[])


  /* AGREGAR JUEGO  */

  const respuestaSignificado = async (palabra1, palabra2, palabra3, significado1, significado2, significado3, id) => {
    try {
        const response = await axios.post(`${ruta}/significado/respuestaSignificado`,{
          palabra1: palabra1,
          palabra2: palabra2,
          palabra3: palabra3,
          significado1 : significado1,
          significado2 : significado2,
          significado3 : significado3,
          id : id
        },{
            headers:{
                Authorization : token
            }
        })
        alert(response.data.message)
        setTimeout(() => {
          handleGoBack();
        }, 1000);
       }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  }

  const onChangePalabra1 = ({target}) => {
      setPalabra1(target.value)
  }
  const onChangePalabra2 = ({target}) => {
      setPalabra2(target.value)
  }
  const onChangePalabra3 = ({target}) => {
      setPalabra3(target.value)
  }
  const onChangeSignificado1 = ({target}) => {
    setSignificado1(target.value)
  }
  const onChangeSignificado2 = ({target}) => {
    setSignificado2(target.value)
  }
  const onChangeSignificado3 = ({target}) => {
    setSignificado3(target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    respuestaSignificado(palabra1, palabra2, palabra3, significado1, significado2, significado3, idjuegolocal)
  }  

  return (
    <>
    {loading && <div>Cargando...</div>}
    {!loading && (
    <>
    <section className="w-full h-2/5">
      <HdSignificado/>

      <div className="pregunta w-full h-auto flex justify-center mt-3">
        <div className=" h-auto w-5/6 px-6 bg-gray-200 rounded-xl border-4 overflow-hidden shadow-lg">
          <div className="px-4">
            <div className="tittle mt-2">
              <h1 className="font-bold text-[44px] w-full mx-auto text-start ml-3 leading-none ">Dale un significado</h1>
            </div>
            <p className="text-gray mt-4 text-[22px]">
              Diseñado para expandir tu capacidad de interpretación y comprensión textual. Aquí, la tarea es seleccionar
              tres palabras clave de un párrafo proporcionado y asignarles significados que se alineen con el contexto general de la lectura. A medida que te sumerges en una variedad de párrafos desafiantes, el juego fomenta tu agudeza analítica y tu creatividad al exigir que descubras las intenciones detrás de cada palabra seleccionada. ¿Estás listo para enfrentar el desafío y revelar el significado de cada palabra?
            </p>
          </div>
          <div className="pregunta flex justify-center w-full">
            <div className=" h-4/5 w-full mx-3 my-3 bg-yellow-500 rounded-xl overflow-hidden shadow-lg justify-center">
              <div className="px-4 my-3">
                <p className="text-gray mt-5 text-[22px]">
                    {lectura}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="w-full h-auto" onSubmit={handleSubmit}>
        <div className="significado1 w-full h-auto flex justify-center">
          <div className="palabra w-2/5 px-5 h-2/8 mt-7 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui la palabra que escogiste"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={palabra1}
              onChange={onChangePalabra1}
            />
          </div>
          <div className="significado w-2/5 px-5 h-2/8 mt-7 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui su significado"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={significado1}
              onChange={onChangeSignificado1}
            />
          </div>
        </div>


        <div className="significado2 w-full h-auto flex justify-center">
        <div className="palabra w-2/5 px-5 h-2/8 mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui la palabra que escogiste"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={palabra2}
              onChange={onChangePalabra2}
            />
          </div>
          <div className="significado w-2/5 px-5 h-2/8 mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui su significado"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={significado2}
              onChange={onChangeSignificado2}
            />
          </div>
        </div>

        <div className="significado3 w-full h-auto flex justify-center">
        <div className="palabra w-2/5 px-5 h-2/8 mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui la palabra que escogiste"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={palabra3}
              onChange={onChangePalabra3}
            />
          </div>
          <div className="significado w-2/5 px-5 h-2/8 mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Escribe aqui su significado"
              className="w-full h-full p-8 rounded-3xl border-none outline-none"
              value={significado3}
              onChange={onChangeSignificado3}
            />
          </div>
        </div>

        <div className="enviar flex justify-center my-6 rounded-lg">
          <button 
            className="w-1/6 h-20 bg-black text-white flex justify-center items-center rounded-3xl"
            type="submit"
            >
            <span className="text-[25px] px-3">Enviar</span>
            <AiOutlineSend className="h-1/2 w-1/6" />
          </button>
        </div>
      </form>



    </section>

    </>
  )} 
  </>
  )
}
