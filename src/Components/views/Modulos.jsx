import { HdModulos } from "../Headers/HdModulos"
import store from "../../assets/images/store.png"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useState,useEffect } from "react";
export const Modulos = ({ChangeTopic}) => {
  const [datacurso, setDatacurso] = useState();
  const data = 
  [
    {
      "id": 1,
      "idCurso": 1,
      "titulo": "Introducción a la programación",
      "docente": "ScartCode Rooster"
    },
    {
      "id": 2,
      "idCurso": 1,
      "titulo": "Fundamentos de Python",
      "docente": "ScartCode Rooster"
    },
    {
      "id": 3,
      "idCurso": 1,
      "titulo": "Estructuras de datos en Python",
      "docente": "Aaron Guevara"
    },
    {
      "id": 4,
      "idCurso": 1,
      "titulo": "Programación orientada a objetos en Python",
      "docente": "Aaron Guevara"
    },
    {
      "id": 5,
      "idCurso": 2,
      "titulo": "Introducción a las bases de datos",
      "docente": "ScartCode Rooster"
    },
    {
      "id": 6,
      "idCurso": 2,
      "titulo": "SQL para principiantes",
      "docente": "ScartCode Rooster"
    },
    {
      "id": 7,
      "idCurso": 2,
      "titulo": "Diseño de bases de datos relacionales",
      "docente": "Aaron Guevara"
    },
    {
      "id": 8,
      "idCurso": 2,
      "titulo": "NoSQL para aplicaciones web",
      "docente": "Aaron Guevara"
    }
    
  ]
  


  //funciones
  const getTopics = ()=>{
    return data
  }


  const topicChange = (filternum) =>{
    let dataItem = data.find(obj => obj.id == filternum)

    setDatacurso(dataItem)


  }

  useEffect(() => {
    // Acción que deseas realizar con datacurso
    if(datacurso){
      ChangeTopic("Curso",datacurso)
    }


  }, [datacurso]);

  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos/>

      <div className='w-full h-50 grid justify-center grid-cols-5'>
      {getTopics().map(item => (
        <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5" key={item.id}>
          <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
 
            
                <div className="p-2" >
                  <div className="font-bold text-[20px]">{item.titulo}</div>
                  <p className="text-gray text-[21px]">{item.docente}</p>
                </div>
            


            <div className="btn flex justify-center w-full my-4 h-[45px]  bottom-0">
              <button className="bg-black text-white hover:bg-neutral-700 w-4/5 font-bold py-2 px-4 rounded text-[20px] absolute bottom-5" 
              onClick={()=>topicChange(item.id)}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      ))}




      <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
          <div className="informacion w-full px-3 h-full flex flex-col justify-center relative text-8xl items-center">            
                +
          </div>
        </div>





      </div>
    </section>
  )
}