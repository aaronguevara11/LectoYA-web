import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import { SideBar } from '../Components/SideBar'
import axios from 'axios';
import { Button } from "@material-tailwind/react";
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

export const Temas = ({setIdTema,nombreCurso,setIdCurso}) => {
  const token = localStorage.getItem('jwtdata')
  const [tituloTema,setTituloTema] = useState('');
  const [descripcionTema,setDescripcionTema] = useState('');
  const [lecturaTema,setLecturaTema] = useState('');
  const [curso,setCurso]= useState('');

  
  useEffect(() => {
    // Almacenar el nombre del curso en localStorage cada vez que cambie
    if (nombreCurso) {
      localStorage.setItem('nombreCurso', nombreCurso);
    }

    // Obtener el nombre del curso de localStorage
    const cursoLSG = localStorage.getItem('nombreCurso');
    setCurso(cursoLSG || ''); // Si no hay valor en localStorage, establecer el estado como una cadena vacía
    
  }, [nombreCurso]);
  
  const navigate = useNavigate();
  const [temas,setTemas] = useState('');  
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga


  const currentUrl = window.location.href;
  // Dividir la URL por las barras "/"
  const urlParts = currentUrl.split("/");
  // Obtener el último elemento de la matriz (que sería el número)
  const lastPart = urlParts[urlParts.length - 1];
  // Verificar si el último elemento es un número
  let idCurso = /^\d+$/.test(lastPart) ? lastPart : null;

  const mostrarTemas = async (idCurso) => {
    try {
      const response = await axios.get(`http://localhost:3000/app/mostrarTemas/${idCurso}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      setTemas(response.data.Tema[0].temas);
      setLoading(false); 
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {


    mostrarTemas(idCurso);
  }, [idCurso, token]);
  
 
  // consultarTemas(idTema)





  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



   const handleInputtituloTema = ({target})=>{
    setTituloTema(target.value)
   }

   const handleDescripcionTema = ({target}) =>{
    setDescripcionTema(target.value)
   }


   const crearTema = async (idCurso,tituloTema, descripcionTema, lecturaTema) => {
    try {
      const response = await axios.post('http://localhost:3000/app/agregarTemas',
       {
         idCurso: idCurso,
         nombre :tituloTema,
         descripcion : descripcionTema,
         lectura : lecturaTema
       }
      , {
        headers: { 
          Authorization: token,
        }
      });
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearTema(idCurso,tituloTema,descripcionTema,lecturaTema)
    mostrarTemas(idCurso);
    setTituloTema('');
    setDescripcionTema('');
    setLecturaTema('');
    handleClose();
  };


  const handleClickCurso = (idCurso,idTema) => {
    setIdTema(idTema);
    setIdCurso(idCurso)
    navigate(`/home/Temas/info`);
  }


  return (
    <> 
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>

      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className='w-full h-full'>


        {/* CONTENIDO  */}


            <div className='w-full h-auto flex flex-col p-8'>

              {loading && <div>Cargando...</div>}
              {/* Muestra los datos después de recibir la respuesta */}
              {!loading && (
                <>

              {/* TITULO */}
                  <div className='w-full h-[110px] flex p-8 text-3xl justify-between space-x-0'> 
                    <h1>
                        {curso}
                    </h1>
                    <Button 
                    className='flex h-[60px] border-solid bg-[#a5d8fd] rounded-xl border-black border-[3px] w-[140px] p-1 text-black '
                    onClick={handleOpen}
                    >
                        <section className='flex justify-center items-center h-full mr-2 text-[35px] mt-[-5px] ml-1'>+</section>
                        <section className='  text-lg font-semibold leading-6 flex justify-center items-center	'>Agregar <br />Tema</section>
                    </Button>
                  </div>


                  {temas.map((item,index) => (
                    <section className='w-full h-[150px] flex  p-8 text-3xl justify-between space-x-0 border-solid rounded-xl
                  border-black border-[3px] items-center my-2' key={index}>
                      <h1>
                          {item.nombre}
                      </h1>
                      <h1>
                          {item.descripcion}  
                      </h1>
                      <Button 
                      className='flex h-[55px] bg-[#baf5c2] border-solid rounded-xl border-black border-[3px] w-[110px] p-1 items-center justify-center' onClick={() => handleClickCurso(idCurso,index)}>
                          <section className='text-lg text-black' >Entrar</section>
                      </Button>
                  </section>
                  ))}
                </>
              )}
                 





            {/* MODAL */}
        <div className="w-full top-1/2 right-1/2">
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="w-full h-full flex justify-center items-center "
            >
            <Box className="w-[600px] h-auto backdrop-blur-md flex justify-center px-12 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
              <form className="w-full max-w-lg h-auto flex justify-center" onSubmit={handleSubmit}>
                <div className="w-full h-full relative top-0">

                  <div className="titulo my-5">
                    <h1 className="text-gray-100 uppercase font-bold font-sans text-[50px] text-center">Crear Tema</h1>
                  </div>

                  <div className="h-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                          Nombre del curso: 
                        </label>
                        <input type="text" placeholder="Nombre del curso" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" 
                          value={tituloTema} onChange={handleInputtituloTema}
                        />
                      </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                          Descripción del curso 
                        </label>
                        <input type="text" placeholder="Descripcion" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" value={descripcionTema} 
                        onChange={handleDescripcionTema} />
                      </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2" htmlFor="grid-password">
                          Lectura del curso 
                        </label>
                        <textarea type="text" placeholder="Descripcion" className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-[1px] focus:outline-none focus:border-b-[1px] focus:border-white" value={lecturaTema} 
                        onChange={(e) => {setLecturaTema(e.target.value)}} />
                      </div>
                    </div>



                  </div>

                  <div className="crear w-full flex justify-center items-center h-[60px] my-5">
                    <Button className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80] my-5" type="submit">Agregar</Button>
                  </div>

                </div>
              </form>
            </Box>
          </Modal>
        </div>






















            </div>

          </section>
      </div>


    </>
  )
}
