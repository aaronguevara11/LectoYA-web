import { HdModulos } from "../Headers/HdModulos"
import store from "../../assets/images/store.png"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos/>

      <div className="w-full flex justify-center">

        <div className=' w-[95%] h-50 grid justify-center grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3'>
        {getTopics().map(item => (
          <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-3" key={item.id}>
            <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
  
              
                  <div className="p-2" >
                    <div className="font-bold font-sans text-[28px]">{item.titulo}</div>
                    <p className="text-gray text-[22px]">{item.docente}</p>
                  </div>
              


              <div className="btn flex justify-center w-full my-4 h-[50px] bottom-0">
                <button className="bg-blue-950 text-white hover:bg-neutral-700 w-[85%] h-[50px] font-bold py-2 px-4 rounded text-[20px] absolute bottom-5" 
                onClick={()=>topicChange(item.id)}>
                  Entrar
                </button>
              </div>
            </div>
          </div>
        ))}




        <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
          <div className="informacion w-full h-full flex flex-col justify-center">
                <Button onClick={handleOpen} className="text-black bg-gray-200 w-full h-full font-bold flex items-center justify-center text-[33px] hover:bg-gray-300"> Crear curso </Button>
          </div>
        </div>

        <div className="w-full top-1/2 right-1/2">
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="w-full h-full flex justify-center items-center "
            >
            <Box className="w-[30%] h-3/5 backdrop-blur-md flex justify-center px-12 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
              <form className="w-full max-w-lg">
                <div className="curso w-full h-full">

                  <div className="titulo my-5 h-1/4">
                    <h1 className="text-gray-100 uppercase font-bold font-sans text-[67px] text-center">Crear curso</h1>
                  </div>

                  <div className="h-2/4">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" for="grid-password">
                          Nombre del curso: 
                        </label>
                        <input type="text" placeholder="Nombre del curso" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" for="grid-password">
                          Descripción del curso 
                        </label>
                        <input type="text" placeholder="Descripcion" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" />
                      </div>
                    </div>
                  </div>

                  <div className="crear w-full flex justify-center items-center">
                    <Button className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80]">Agregar</Button>
                  </div>

                </div>
              </form>
            </Box>
          </Modal>
        </div>

      </div>
      </div>
    </section>
  )
}