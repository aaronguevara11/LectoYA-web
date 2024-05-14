import { HdModulos } from "../Headers/HdModulos"
import store from "../../assets/images/store.png"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useState,useEffect } from "react";
import { Button } from "@material-tailwind/react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { Temas } from "../../pages/Temas";

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

export const Modulos = ({setIdTema, setNombreCurso}) => {
  const [datacurso, setDatacurso] = useState();
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
  const [nombreCC, setnombreCC] = useState(''); 
  const [descripcionCC, setdescripcionCC] = useState(''); 
  const navigate = useNavigate();


  const datos = localStorage.getItem('jwtdata')
  const token = datos
  const person = localStorage.getItem('person')


  //  OBTENER CURSOS DOCENTES
  const obtenerCursos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/app/cursosDocente', {
        headers: { 
          Authorization: token,
        }
      });
      console.log(response.data.cursos[0].cursos)
      setDatacurso(response.data.cursos[0].cursos);
      setLoading(false); // Cambia el estado de carga a falso después de recibir la respuesta
    } catch (error) {
      console.log(error);
      setLoading(false); // Cambia el estado de carga a falso en caso de error
    }
  }
   
  // OBTENER CURSOS ALUMNOS
  const obtenerCursosAlumno = async () => {
    try {
      const response = await axios.get('http://localhost:3000/app/cursosAlumno', {
        headers: { 
          Authorization: token,
        }
      });
      console.log(response.data.cursos[0].matriculas)
      setDatacurso(response.data.cursos[0].matriculas);
      setLoading(false); // Cambia el estado de carga a falso después de recibir la respuesta
    } catch (error) {
      console.log(error);
      setLoading(false); // Cambia el estado de carga a falso en caso de error
    }
  }
  


   const crearCurso = async (nombreCC,descripcionCC) => {
     try {
       const response = await axios.post('http://localhost:3000/app/crearCurso',
        {
          nombre :nombreCC,
          descripcion : descripcionCC 
        }
       , {
         headers: { 
           Authorization: token,
         }
       });
       console.log(response.data);
     } catch (error) {
       console.log(error);
       
     }
   }

  const handleInputNombreCurso = ({target})=>{
    setnombreCC(target.value)
  }


  const handleInputDescripcionCurso = ({target}) => {
    setdescripcionCC(target.value)
  }
  
  // const handleClickCurso = (IdTema) => {

  //   navigate("/home/Temas/:idTema",{IdTema})
  // }



  useEffect(() => {
    if(person=="alumno"){
      obtenerCursosAlumno()
    }else{
      obtenerCursos(); 
    }
  }, []); 


   useEffect(() => {
     // Acción que deseas realizar con datacurso
    //  console.log(datacurso)
     
  }, [datacurso]);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);








  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCurso(nombreCC, descripcionCC); // Espera a que se cree el curso
    if(person=="alumno"){
      obtenerCursosAlumno()
    }else{
      obtenerCursos(); 
    }
    setnombreCC('');
    setdescripcionCC('');
    handleClose();// Obtiene la lista actualizada de cursos
  };

  const handleClickCurso = (idTema,nombreCurso) => {
    setNombreCurso(nombreCurso);
    navigate(`Temas/${idTema}`);
  }

  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos/>

      <div className="w-full flex justify-center">

        <div className=' w-[95%] h-50 grid justify-center grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3'>
        {/* Muestra el mensaje de carga mientras esperas la respuesta */}
    {loading && <div>Cargando...</div>}
    {/* Muestra los datos después de recibir la respuesta */}
    {!loading && (
      <>
      {/* ALUMNO DISEÑO */}
      {person == "alumno" ?  (
        <>
              {datacurso.map((item) => (
          
                <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-[15px] hover:shadow-2xl" key={item.cursos.id}>
                  <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
                    <div className="p-2" >
                      <div className="font-bold font-sans text-[28px]">{item.cursos.nombre} </div>
                      <p className="text-gray text-[22px]">{item.cursos.docente.nombre} {item.cursos.docente.apaterno}</p>
                    </div>
                    <div className="btn flex justify-center w-full my-4 h-[45px]  bottom-0">
                      <button className="bg-black text-white hover:bg-neutral-700 w-4/5 font-bold py-2 px-4 rounded text-[20px] absolute bottom-5" onClick={() => handleClickCurso(item.cursos.id,item.cursos.nombre)}>
                        Entrar
                      </button>
                    </div>
                  </div>
                </div>



         

              ))}

              <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
                  <div className="informacion w-full h-full flex flex-col justify-center">
                        <Button onClick={handleOpen} className="text-black w-full h-full font-bold flex items-center justify-center text-[33px] hover:bg-gray-300"> Matricula </Button>
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
                      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="curso w-full h-full">

                          <div className="titulo my-5 h-1/4">
                            <h1 className="text-gray-100 uppercase font-bold font-sans text-[67px] text-center">Crear curso</h1>
                          </div>

                          <div className="h-2/4">
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                                  Nombre del curso: 
                                </label>
                                <input type="text" placeholder="Nombre del curso" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" 
                                  value={nombreCC} onChange={handleInputNombreCurso}
                                />
                              </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                                  Descripción del curso 
                                </label>
                                <input type="text" placeholder="Descripcion" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" value={descripcionCC} 
                                onChange={handleInputDescripcionCurso} />
                              </div>
                            </div>
                          </div>

                          <div className="crear w-full flex justify-center items-center">
                            <Button className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80]" type="submit">Agregar</Button>
                          </div>

                        </div>
                      </form>
                    </Box>
                  </Modal>
                </div>
              
        </>   

              
            ) : person === "Docente" ? (
              <>
              {datacurso.map(item => (
                  

         
                <div className="h-60 bg-gray-200 overflow-hidden flex justify-center items-center m-[15px] hover:shadow-2xl" key={item.id}>
                  <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
                    <div className="p-2" >
                      <div className="font-bold font-sans text-[28px]">{item.nombre}</div>
                      <p className="text-gray text-[22px]">{item.docente.nombre} {item.docente.apaterno}</p>
                    </div>
                    <div className="btn flex justify-center w-full my-4 h-[45px]  bottom-0">
                      <button className="bg-black text-white hover:bg-neutral-700 w-4/5 font-bold py-2 px-4 rounded text-[20px] absolute bottom-5" onClick={() => handleClickCurso(item.id,item.nombre)}>
                        Entrar
                      </button>
                    </div>
                  </div>
                </div>

              ))}


              <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
                  <div className="informacion w-full h-full flex flex-col justify-center">
                        <Button onClick={handleOpen} className="text-black w-full h-full font-bold flex items-center justify-center text-[33px] hover:bg-gray-300"> Crear curso </Button>
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
                      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="curso w-full h-full">

                          <div className="titulo my-5 h-1/4">
                            <h1 className="text-gray-100 uppercase font-bold font-sans text-[67px] text-center">Crear curso</h1>
                          </div>

                          <div className="h-2/4">
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                                  Nombre del curso: 
                                </label>
                                <input type="text" placeholder="Nombre del curso" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" 
                                  value={nombreCC} onChange={handleInputNombreCurso}
                                />
                              </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                                  Descripción del curso 
                                </label>
                                <input type="text" placeholder="Descripcion" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" value={descripcionCC} 
                                onChange={handleInputDescripcionCurso} />
                              </div>
                            </div>
                          </div>

                          <div className="crear w-full flex justify-center items-center">
                            <Button className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80]" type="submit">Agregar</Button>
                          </div>

                        </div>
                      </form>
                    </Box>
                  </Modal>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center">¡INICIA SESION CORRECTAMENTE PORFAVOR!</div>
            )
            
            
      }


      </>
    )}







      </div>
      </div>
    </section>

  )
}