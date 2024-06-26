import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./temas.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import axiosBase from "../api/axiosBase";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Temas= ({ setIdTema, nombreCurso, setIdCurso }) => {
  const token = localStorage.getItem("jwtdata");
  const [tituloTema, setTituloTema] = useState("");
  const [descripcionTema, setDescripcionTema] = useState("");
  const [lecturaTema, setLecturaTema] = useState("");
  const [curso, setCurso] = useState("");
  const [idTemaActualizar, setIdTemaActualizar] = useState("");
  const [link, setLink] = useState("");
  const currentUrl = window.location.href; // Dividir la URL por las barras "/"
  const urlParts = currentUrl.split("/"); // Obtener el último elemento de la matriz (que sería el número)
  const lastPart = urlParts[urlParts.length - 1]; // Verificar si el último elemento es un número
  let idCurso = /^\d+$/.test(lastPart) ? lastPart : null;
  const person = localStorage.getItem("person");



  useEffect(() => {
    // Almacenar el nombre del curso en localStorage cada vez que cambie
    if (nombreCurso) {
      localStorage.setItem("nombreCurso", nombreCurso);
    } // Obtener el nombre del curso de localStorage

    const cursoLSG = localStorage.getItem("nombreCurso");
    setCurso(cursoLSG || ""); // Si no hay valor en localStorage, establecer el estado como una cadena vacía
  }, [nombreCurso]);

  const navigate = useNavigate();
  const [temas, setTemas] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
  const [alumnos, setAlumnos] = useState("");

  const [descripcion,setDescripcion] = useState('');



  const mostrarTemas = async (idCurso) => {
    try {
      const response = await axios.get(`https://lectoya-back.onrender.com/app/mostrarTemas/${idCurso}`,{
        headers: { 
          Authorization: token,
        }
      });
      console.log(response.data)
      setTemas(response.data.Tema.temas);
      setAlumnos(response.data.Tema.matriculas);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  useEffect(() => {

    console.log(idCurso)

    mostrarTemas(idCurso);
  }, [idCurso, token]); // consultarTemas(idTema)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [op, setOp] = useState(false);
  const handleOp = (idTema) => {
    setIdTemaActualizar(idTema);
    setOp(true);
  };
  const handleCl = () => setOp(false);

  const [ope, setOpe] = useState(false);
  const handleOpe = async () => {
    setOpe(true);
    const response = await axiosBase.get("/genLink/" + idCurso);
    const data = response.data;
    setLink(data.url);
  };
  const handleClos = () => setOpe(false);

  
  // VER TEMA PETICION
  const verTema = async (idTema) => {
    try {
      const response = await axiosBase.get(`/verTema/${idTema}`);
      console.log(response.data)
      setNombreTema(response.data.Temas.nombre)
      setLecturaActualizar(response.data.Temas.lectura)
      
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };


  const [nombreTema,setNombreTema] = useState('');
  const [lecturaActualizar,setLecturaActualizar] = useState('');
  const [pe, setPe] = useState(false);
  const handlePe = (idTema,descripcion) => {
    setIdTemaActualizar(idTema);
    setDescripcion(descripcion);
    setPe(true);
    verTema(idTema)

  };

  const handlenombreTema = ({ target }) => {
    setNombreTema(target.value);
  };

  const handleDescripcion = ({ target }) => {
    setDescripcion(target.value);
  };


  





  const handleClo = () => setPe(false);

  const handleInputtituloTema = ({ target }) => {
    setTituloTema(target.value);
  };

  const handleDescripcionTema = ({ target }) => {
    setDescripcionTema(target.value);
  };

  const crearTema = async (idCurso,tituloTema,descripcionTema,lecturaTema) => {
    try {
      const response = await axiosBase.post(`/agregarTemas`, {
        idCurso: idCurso,
        nombre: tituloTema,
        descripcion: descripcionTema,
        lectura: lecturaTema,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarTema = async (idTemaActualizar,tituloTema, descripcionTema, lecturaTema) => {
    try {
      const response = await axiosBase.put(
        `/actualizarTemas`,

        {
          id: idTemaActualizar,
          nombre: tituloTema,
          descripcion: descripcionTema,
          lectura: lecturaTema,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const borrarTemaAxios = async (idTemaActualizar) => {
    try {
      const response = await axiosBase.delete(`/borrarTemas`, {
        data: {
          id: idTemaActualizar,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const borrarTema = async () => {
    await borrarTemaAxios(idTemaActualizar);
    mostrarTemas(idCurso);
    handleCl();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearTema(idCurso, tituloTema, descripcionTema, lecturaTema);
    mostrarTemas(idCurso);
    setTituloTema("");
    setDescripcionTema("");
    setLecturaTema("");
    handleClose();
  };

  const handleActualizar = async (e) => {
    e.preventDefault();
    await actualizarTema(
      idTemaActualizar,
      nombreTema,
      descripcion,
      lecturaActualizar
    );
    mostrarTemas(idCurso);
    setTituloTema("");
    setDescripcionTema("");
    setLecturaTema("");
    handleClo();
  };

  const handleClickCurso = (idCurso, idTema) => {
    setIdTema(idTema);
    setIdCurso(idCurso);
    navigate(`/home/Temas/info`);
  };

  const [valor1, setValor1] = useState("0");
  const [valor2, setValor2] = useState("100%");

  const handleClickTemas = () => {
    setValor1("-100%");
    setValor2("0");
  };
  const handleClickAlumnos = () => {
    setValor1("0");
    setValor2("100%");
  };
  const [seccionActiva, setSeccionActiva] = useState("temas");

  const cambiarSeccion = (seccion) => {
    setSeccionActiva(seccion);
  };


















  const copiarTexto = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link)
        .then(() => {
          alert('Texto copiado al portapapeles');
        })
        .catch(err => {
          console.error('Error al copiar el texto: ', err);
        });
    } else {
      console.error('El navegador no soporta el acceso al portapapeles');
    }
  };

  const copiarNombreCurso = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(curso)
        .then(() => {
          alert('Texto copiado al portapapeles');
        })
        .catch(err => {
          console.error('Error al copiar el texto: ', err);
        });
    } else {
      console.error('El navegador no soporta el acceso al portapapeles');
    }
  };


  return (
    <>
           
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
                <SideBar token={token} />     
      </div>
           
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
               
        <section className="w-full h-full overflowx-hidden">
                  {/* CONTENIDO  */}           
          <div className="w-full h-auto flex flex-col px-8 py-2">
                          {loading && <div>Cargando...</div>}             
            {/* Muestra los datos después de recibir la respuesta */}           
             
            {!loading && (
              <>
                                  {/* TITULO */}                               
                   
                <div className="w-full h-[110px] flex justify-between items-center">
                                     
                  <h1 className="font-mono px-1 font-semibold uppercase text-[60px] text-black">
                    {curso}                   
                  </h1>
                                     
                  <>
                    {person=="Docente"?(
                      <div className="w-1/5 space-x-2 flex">
                    <Button
                      className="flex justify-center items-center h-[70px] border-solid bg-blue-950 rounded-xl border-black border-[1px] w-[170px] p-1 text-white "
                      onClick={handleOpen}
                    >
                                             
                      <section className="h-full w-2/5 flex items-center justify-end">
                        <AddBoxOutlinedIcon />
                      </section>
                                             
                      <section className="pl-2 text-start text-lg font-semibold leading-6">
                        Agregar tema
                      </section>
                                         
                    </Button>
                    <Button
                      className="flex justify-center items-center h-[70px] border-solid bg-orange-900 rounded-xl border-black border-[1px] w-[170px] p-1 text-white "
                      onClick={handleOpe}
                    >
                                             
                      <section className="h-full w-2/5 flex items-center justify-end">
                        <AddBoxOutlinedIcon />
                      </section>
                                             
                      <section className="pl-2 text-start text-lg font-semibold leading-6">
                        Crear link
                      </section>
                                         
                    </Button>
                      </div>
                                 
                    ): person =="alumno" ? (
                      <h1 className="text-center w-full "></h1>
                    ):(
                      <h2>INICIA SESION CORRECTAMENTE</h2>
                    )}
                    </>  
                </div>
                                 
                <div className="w-full flex px-[37px]">
                                       
                  <button
                    onClick={() => cambiarSeccion("temas")}
                    className=" w-full text-gray-400 font-semibold text-[35px] h-20 bg-white-100 focus:border-b-4 focus:border-blue-950 hover:bg-none"
                  >
                                            Temas                      
                  </button>
                                       
                  <button
                    onClick={() => cambiarSeccion("alumnos")}
                    className="w-full text-gray-400 font-semibold text-[35px] h-20 bg-white-100 focus:border-b-4 focus:border-blue-950 hover:bg-none"
                  >
                                            Alumnos                      
                  </button>
                                   
                </div>
                                                         
                <div className="slider-container">
                                     
                  <div
                    className="slider-content"
                    style={{
                      transform: `translateX(${
                        seccionActiva === "alumnos" ? "-50%" : "0"
                      })`,
                    }}
                  >
                                         
                    <div className="slider-item" style={{}}>
                                                {/* ITEM 1 */}                 
                             
                      <div className={`flex flex-col w-[100%] `}>
                                                     
                        {temas.map((item) => (
                          <section
                            className="w-full flex h-[130px] p-8 text-3xl justify-between space-x-0 border-solid 
                                border-black border-[1px] items-center mt-5 relative"
                            key={item.id}
                          >
                                                             
                            <div className="w-[7px] h-[130px] bg-blue-300 absolute left-0 top-0 ">
                                                               
                            </div>
                                                               
                            <div className="h-full flex flex-col justify-center">
                                                                   
                              <h1 className="font-bold text-[30px]">
                                                                         
                                {item.nombre}                                   
                                 
                              </h1>
                                                                   
                              <h1 className="text-[27px]">
                                                                         
                                {item.descripcion}                              
                                         
                              </h1>
                                                                 
                            </div>
                                                                               
                                               
                            <div className="flex space-x-2">
                                                                   

                                 
                              
                              <>
                    {person=="Docente"?(
                      <>
                      <Button
                                className="flex h-[53px] bg-blue-950 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg w-[150px] p-1 items-center justify-center"
                                onClick={() =>
                                  handleClickCurso(idCurso, item.id)
                                }
                              >
                                                                         
                                <section className="w-3/5 flex justify-center text-lg text-white">
                                  Entrar
                                </section>
                                                                         
                                <section className="flex justify-center items-center">
                                  <ArrowForwardIosOutlinedIcon />
                                </section>
                                                                     
                              </Button>


                      <Button
                                className="flex h-[53px] bg-red-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg w-[50px] p-1 items-center justify-center"
                                onClick={() => handleOp(item.id)}
                              >
                                                                         
                                <section className="text-lg text-white">
                                  <DeleteOutlineOutlinedIcon />
                                </section>
                                                                     
                              </Button>
                              <Button
                                className="flex h-[53px] bg-green-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg w-[50px] p-1 items-center justify-center"
                                onClick={() => handlePe(item.id,item.descripcion)}
                              >
                                                                         
                                <section className="text-lg text-white">
                                  <DriveFileRenameOutlineOutlinedIcon />
                                </section>
                                                                     
                              </Button>
                      </>
                    ): person =="alumno" ? (
                      <h1 className="text-center w-full ">
                      <Button
                                className="flex h-[53px] bg-blue-950 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg w-[full] px-5 gap-4 p-1 items-center justify-center"
                                onClick={() =>
                                  handleClickCurso(idCurso, item.id)
                                }
                              >
                                                                         
                                <section className="w-3/5 flex justify-center text-lg text-white px-2">
                                  Entrar
                                </section>
                                                                         
                                <section className="flex justify-center items-center">
                                  <ArrowForwardIosOutlinedIcon />
                                </section>
                                                                     
                              </Button>
                      </h1>
                    ):(
                      <h2>INICIA SESION CORRECTAMENTE</h2>
                    )}
                    </>                                  

                                                                 
                            </div>
                                                           
                          </section>
                        ))}
                                                 
                      </div>
                                              {/* ITEM 1 */}                   
                       
                    </div>
                                         
                    <div className="slider-item" style={{}}>
                                              {/* ITEM 2 */}                   
                             
                      <div
                        className="duration-700 ease-in-out justify-center items-center h-[800px]"
                        data-carousel-item
                      >
                                                       
                        {alumnos.map((item, index) => (
                          <section
                            className="w-full flex h-[150px] p-8 text-3xl space-x-0 border-solid rounded-xl
                                    border-black border-[1px] items-center my-2 "
                            key={index}
                          >
                                                                   
                            <h1>
                                                                         
                              {item.alumnos.nombre} &nbsp;                      
                                               
                            </h1>
                                                                   
                            <h1>
                                                                         
                              {item.alumnos.apaterno}   &nbsp;                  
                                                   
                            </h1>
                                                                   
                            <h1>
                                                                         
                              {item.alumnos.amaterno}   &nbsp;                  
                                                   
                            </h1>
                                                               
                          </section>
                        ))}
                                                   
                      </div>
                                                                     
                      {/* ITEM 2 */}                     
                    </div>
                                       
                  </div>
                                   
                </div>
                                   
              </>
            )}
                        {/* MODAl AGREGAR */}       
            <div className="w-full top-1/2 right-1/2">
                       
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                           
                <Box className="w-[600px] h-auto backdrop-blur-md flex justify-center px-12 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
                               
                  <form
                    className="w-full max-w-lg h-auto flex justify-center"
                    onSubmit={handleSubmit}
                  >
                                   
                    <div className="w-full h-full relative top-0">
                                       
                      <div className="titulo my-5">
                                           
                        <h1 className="text-gray-100 uppercase font-bold font-sans text-[50px] text-center">
                          Crear Tema
                        </h1>
                                         
                      </div>
                                       
                      <div className="h-auto">
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Nombre del tema:        
                                             
                            </label>
                                                   
                            <input
                              type="text"
                              placeholder="Nombre del tema"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                              value={tituloTema}
                              onChange={handleInputtituloTema}
                            />
                                                 
                          </div>
                                             
                        </div>
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Descripción del tema:  
                                                   
                            </label>
                                                   
                            <input
                              type="text"
                              placeholder="Descripcion del tema"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                              value={descripcionTema}
                              onChange={handleDescripcionTema}
                            />
                                                 
                          </div>
                                             
                        </div>
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Lectura del curso:      
                                               
                            </label>
                                                   
                            <textarea
                              type="text"
                              placeholder="Descripcion"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-[1px] focus:outline-none focus:border-b-[1px] focus:border-white max-h-96 "
                              value={lecturaTema}
                              onChange={(e) => {
                                setLecturaTema(e.target.value);
                              }}
                            />
                                                 
                          </div>
                                             
                        </div>
                                         
                      </div>
                                       
                      <div className="crear w-full flex justify-center items-center h-[60px] my-5">
                                           
                        <Button
                          className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80] my-5"
                          type="submit"
                        >
                          Agregar
                        </Button>
                                         
                      </div>
                                     
                    </div>
                                 
                  </form>
                             
                </Box>
                         
              </Modal>
                     
            </div>
            {/*MODAL LINK*/}
            <div className="w-full top-1/2 right-1/2">
                       
              <Modal
                open={ope}
                onClose={handleClos}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                           
                <Box className="w-[600px] h-auto backdrop-blur-md bg-white flex justify-center px-12 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
                               
                  <form className="w-full max-w-lg h-auto flex justify-center">
                                   
                    <div className="w-full h-full relative top-0">
                                       
                      <div className="titulo my-5">
                                           
                        <h1 className="text-gray-700 uppercase font-bold font-sans text-[50px] text-center">
                          CÓDIGO DEL CURSO
                        </h1>
                                         
                      </div>
                                       
                      <div className="h-auto">
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-black text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        NOMBRE DEL CURSO:      
                                               
                            </label>
                                                 
                          </div>
                          <div className="w-full flex space-x-2">
                            <p
                              id="textCopy"
                              className="block w-full border-gray-400 rounded-md backdrop-blur-lg bg-transparent text-[20px] text text-black py-3 px-4 mb-3 leading-tight border-[1px] h-full focus:outline-none focus:border-b-[1px] focus:border-white"
                              readOnly
                            >
                              {curso}
                            </p>
                            <Button
                              id="copyBtn"
                              className="flex justify-center items-center text-gray-500 border-gray-400 border w-[50px] h-full"
                              onClick={copiarNombreCurso}
                            >
                              <ContentCopyOutlinedIcon />
                            </Button>
                          </div>
                                             
                        </div>
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label className="block uppercase tracking-wide text-black text-[17px] font-semibold mb-2" htmlFor="grid-password">
                                                        LINK DEL CURSO:        
                                             
                            </label>
                                                 
                          </div>
                          <div className="w-full flex space-x-2">
                            <p
                              id="textCopy"
                              className="truncate block w-full border-gray-400 rounded-md backdrop-blur-lg bg-transparent text-[20px] text-black py-3 px-4 mb-3 leading-tight border-[1px] h-full focus:outline-none focus:border-b-[1px] focus:border-white"
                              readOnly
                            >
                              {link}
                            </p>
                            <Button
                              id="copyBtn"
                              className="flex justify-center items-center text-gray-500 border-gray-400 border w-[50px] h-full"
                              onClick={copiarTexto}
                            >
                              <ContentCopyOutlinedIcon />
                            </Button>
                          </div>
                                             
                        </div>
                                         
                      </div>
                                     
                    </div>
                                 
                  </form>
                             
                </Box>
                         
              </Modal>
                     
            </div>
            {/*MODAL BORRAR*/}
            <div className="w-full top-1/2 right-1/2">
                       
              <Modal
                open={op}
                onClose={handleCl}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                           
                <Box className="w-[500px] h-auto backdrop-blur-md flex justify-center px-12 bg-white/90 rounded-[15px] p-4 ml-72">
                               
                  <form className="w-full max-w-lg h-auto flex justify-center">
                                   
                    <div className="w-full h-full relative">
                                       
                      <div className="titulo my-5">
                                           
                        <h1 className="text-black uppercase font-bold font-sans text-[45px] text-start">
                          Borrar tema
                        </h1>
                        <h1 className="mt-0 text-[25px]">
                          ¿Desea borrar el tema?
                        </h1>
                                         
                      </div>
                                       
                      <div className="crear w-full flex justify-center items-center h-[60px] my-5">
                                           
                        <Button
                          className="flex h-[53px] bg-red-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg w-[80%] p-1 items-center justify-center"
                          onClick={() => borrarTema()}
                        >
                                               
                          <section className="flex items-center justify-center text-[22px] text-white">
                            <DeleteOutlineOutlinedIcon /> Eliminar
                          </section>
                                             
                        </Button>
                                         
                      </div>
                                     
                    </div>
                                 
                  </form>
                             
                </Box>
                         
              </Modal>
                     
            </div>
            {/* MODAl ACTUALIZAR */}
            <div className="w-full top-1/2 right-1/2">
                       
              <Modal
                open={pe}
                onClose={handleClo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                           
                <Box className="w-[600px] h-auto backdrop-blur-md flex justify-center px-12 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
                               
                  <form
                    className="w-full max-w-lg h-auto flex justify-center"
                    onSubmit={handleActualizar}
                  >
                                   
                    <div className="w-full h-full relative top-0">
                                       
                      <div className="titulo my-5">
                                           
                        <h1 className="text-gray-100 uppercase font-bold font-sans text-[50px] text-center">
                          Actualizar Tema
                        </h1>
                                         
                      </div>
                                       
                      <div className="h-auto">
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Nombre del tema:        
                                             
                            </label>
                                                   
                            <input
                              type="text"
                              placeholder="Nombre del tema"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                              value={nombreTema}
                              onChange={handlenombreTema}
                            />
                                                 
                          </div>
                                             
                        </div>
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Descripción del tema:  
                                                   
                            </label>
                                                   
                            <input
                              type="text"
                              placeholder="Descripcion del tema"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                              value={descripcion}
                              onChange={handleDescripcion}
                            />
                                                 
                          </div>
                                             
                        </div>
                                           
                        <div className="flex flex-wrap -mx-3 mb-6">
                                               
                          <div className="w-full px-3">
                                                   
                            <label
                              className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                              htmlFor="grid-password"
                            >
                                                        Lectura del curso:      
                                               
                            </label>
                                                   
                            <textarea
                              type="text"
                              placeholder="Descripcion"
                              className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-[1px] focus:outline-none focus:border-b-[1px] focus:border-white max-h-96 "
                              value={lecturaActualizar}
                              onChange={(e) => {
                                setLecturaActualizar(e.target.value);
                              }}
                            />
                                                 
                          </div>
                                             
                        </div>
                                         
                      </div>
                                       
                      <div className="crear w-full flex justify-center items-center h-[60px] my-5">
                                           
                        <Button
                          className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80] my-5"
                          type="submit"
                        >
                          Actualizar
                        </Button>
                                         
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
  );
};
