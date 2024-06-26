import { HdModulos } from "../Headers/HdModulos";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import axiosBase from "../../api/axiosBase";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Modulos = ({ setIdTema, setNombreCurso, ruta }) => {
  const [datacurso, setDatacurso] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
  const [nombreCC, setnombreCC] = useState("");
  const [descripcionCC, setdescripcionCC] = useState("");
  const navigate = useNavigate();

  const datos = localStorage.getItem("jwtdata");
  const token= datos
  const person = localStorage.getItem("person");

  const decoded = jwtDecode(datos);
  const correoAlumno = decoded.correo
  const contraseñaAlumno = decoded.password


  const obtenerCursos = async () => {
    try {
      const response = await axios.get(`${ruta}/cursosDocente`, {
        headers: { 
          Authorization: token,
        }
      });
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
      const response = await axios.get(`${ruta}/cursosAlumno`, {
        headers: { 
          Authorization: token,
        }
      });
      setDatacurso(response.data.cursos[0].matriculas);
      setLoading(false); // Cambia el estado de carga a falso después de recibir la respuesta
    } catch (error) {
      console.log(error);
      setLoading(false); // Cambia el estado de carga a falso en caso de error
    }
  };

  const crearCurso = async (nombreCC, descripcionCC) => {
    try {
      const response = await axiosBase.post("/crearCurso", {
        nombre: nombreCC,
        descripcion: descripcionCC,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const inscribirAlumno = async (correo, password, token) => {
    try {
      const response = await axiosBase.put("/validarLink", {
        correo : correo, 
        password : password,
        token: token
      });

      alert(response.data.message)
      obtenerCursosAlumno();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputNombreCurso = ({ target }) => {
    setnombreCC(target.value);
  };

  const handleInputDescripcionCurso = ({ target }) => {
    setdescripcionCC(target.value);
  };

  useEffect(() => {
    let token123 = localStorage.getItem("jwtdata");

    if (person == "alumno") {
      obtenerCursosAlumno();
    } else if(person == "Docente" && token123 != "1" && token123 != undefined ){
      localStorage.setItem('tkvl',"123")
      obtenerCursos();
    }
    let tkvl = localStorage.getItem("tkvl")
    let tkMT = localStorage.getItem("tkMT")
    if(tkvl!=undefined && tkvl=="validar" && person == "alumno"){
      localStorage.setItem('tkvl',"123")
      inscribirAlumno(correoAlumno, contraseñaAlumno, tkMT);

    }

  }, [datos]);



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCurso(nombreCC, descripcionCC); // Espera a que se cree el curso
    if (person == "alumno") {
      obtenerCursosAlumno();
    } else {
      obtenerCursos();
    }
    setnombreCC("");
    setdescripcionCC("");
    handleClose(); // Obtiene la lista actualizada de cursos
  };

  const handleClickCurso = (idTema, nombreCurso) => {
    setNombreCurso(nombreCurso);
    navigate(`Temas/${idTema}`);
  };

  const [idCursoBorar, setIdCursoBorar] = useState("");

  const borrarCursosAxios = async (idCursoBorar) => {
    try {
      const response = await axiosBase.delete(`/eliminarCurso`, {
        data: {
          id: idCursoBorar,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const borrarTema = async () => {
    await borrarCursosAxios(idCursoBorar);
    obtenerCursos();
    handleCl();
  };

  const handleCl = () => setOp(false);
  const [op, setOp] = useState(false);
  const handleOp = (idCursoBorar) => {
    setIdCursoBorar(idCursoBorar);
    setOp(true);
  };

  const actualizarCurso = async (idCursoBorar, nombreCC, descripcionCC) => {
    try {
      const response = await axiosBase.put(
        `/actualizarCurso`,

        {
          id: idCursoBorar,
          nombre: nombreCC,
          descripcion: descripcionCC,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleActualizar = async (e) => {
    e.preventDefault();
    await actualizarCurso(idCursoBorar, nombreCC, descripcionCC);
    setnombreCC("");
    setdescripcionCC("");
    obtenerCursos();
    handleClo();
  };

  const [pe, setPe] = useState(false);
  const handlePe = (idCursoBorar) => {
    setIdCursoBorar(idCursoBorar);
    setPe(true);
  };
  const handleClo = () => setPe(false);

  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos />

      <div className="w-full flex justify-center">
        <div className=" w-[95%] h-50 grid justify-center grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
          {/* Muestra el mensaje de carga mientras esperas la respuesta */}
          {loading && <div>Cargando...</div>}
          {/* Muestra los datos después de recibir la respuesta */}
          {!loading && (
            <>
              {/* ALUMNO DISEÑO */}
              {person == "alumno" ? (
                <>
                  {datacurso.map((item) => (
                    <div
                      className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-[15px] hover:shadow-2xl"
                      key={item.cursos.id}
                    >
                      <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
                        <div className="p-2">
                          <div className="font-bold font-sans text-[28px]">
                            {item.cursos.nombre}
                          </div>
                          <p className="text-gray text-[22px]">
                            {item.cursos.docente.nombre}
                            {item.cursos.docente.apaterno}
                          </p>
                        </div>
                        <div className="btn flex justify-center w-full my-4 h-[45px]  bottom-0">
                          <button
                            className="bg-black text-white hover:bg-neutral-700 w-4/5 font-bold py-2 px-4 rounded text-[20px] absolute bottom-5"
                            onClick={() =>
                              handleClickCurso(
                                item.cursos.id,
                                item.cursos.nombre
                              )
                            }
                          >
                            Entrar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
                    <div className="informacion w-full h-full flex flex-col justify-center">
                      <Button
                        onClick={handleOpen}
                        className="text-black w-full h-full font-bold flex items-center justify-center text-[33px] hover:bg-gray-300"
                      >
                        Matricula
                      </Button>
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
                        <form
                          className="w-full max-w-lg"
                          onSubmit={handleSubmit}
                        >
                          <div className="curso w-full h-full">
                            <div className="titulo my-5 h-1/4">
                              <h1 className="text-gray-100 uppercase font-bold font-sans text-[67px] text-center">
                                Crear curso
                              </h1>
                            </div>

                            <div className="h-2/4">
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                                    htmlFor="grid-password"
                                  >
                                    Nombre del curso:
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Nombre del curso"
                                    className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                                    value={nombreCC}
                                    onChange={handleInputNombreCurso}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                                    htmlFor="grid-password"
                                  >
                                    Descripción del curso
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Descripcion"
                                    className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                                    value={descripcionCC}
                                    onChange={handleInputDescripcionCurso}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="crear w-full flex justify-center items-center">
                              <Button
                                className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80]"
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
                </>
              ) : person === "Docente" ? (
                <>
                  {datacurso.map((item) => (
                    <div
                      className="h-60 bg-gray-200 overflow-hidden flex justify-center items-center m-[15px] hover:shadow-2xl"
                      key={item.id}
                    >
                      <div className="informacion w-full px-3 h-full flex flex-col justify-center relative">
                        <div className="p-2">
                          <div className="font-bold font-sans text-[28px]">
                            {item.nombre}
                          </div>
                          <p className="text-gray text-[22px]">
                            {item.docente.nombre} {item.docente.apaterno}
                          </p>
                        </div>

                        <div className="btn flex items-center justify-center w-full mx-2 mt-4 h-[45px]">
                          <div className="w-4/5 h-[45px]">
                            <button
                              className="bg-black text-white hover:bg-neutral-700 w-full h-[50px] rounded-lg font-bold px-4 text-[20px]"
                              onClick={() =>
                                handleClickCurso(item.id, item.nombre)
                              }
                            >
                              Entrar
                            </button>
                          </div>
                          <div className="w-2/5 h-full flex items-center ml-1 mt-1">
                            <Button
                              className="flex bg-red-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg px-3 h-[50px] items-center justify-center mx-1"
                              onClick={() => handleOp(item.id)}
                            >
                              <section className="text-lg text-white">
                                <DeleteOutlineOutlinedIcon />
                              </section>
                            </Button>
                            <Button
                              className="flex bg-green-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg px-3 h-[50px] items-center justify-center mx-1"
                              onClick={() => handlePe(item.id)}
                            >
                              <section className="text-lg text-white">
                                <DriveFileRenameOutlineOutlinedIcon />
                              </section>
                              
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
                    <div className="informacion w-full h-full flex flex-col justify-center">
                      <Button
                        onClick={handleOpen}
                        className="text-black w-full h-full font-bold flex items-center justify-center text-[33px] hover:bg-gray-300 bg-gray-200"
                      >
                        Crear curso
                      </Button>
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
                        <form
                          className="w-full max-w-lg"
                          onSubmit={handleSubmit}
                        >
                          <div className="curso w-full h-full">
                            <div className="titulo my-5 h-1/4">
                              <h1 className="text-gray-100 uppercase font-bold font-sans text-[67px] text-center">
                                Crear curso
                              </h1>
                            </div>

                            <div className="h-2/4">
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                                    htmlFor="grid-password"
                                  >
                                    Nombre del curso:
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Nombre del curso"
                                    className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                                    value={nombreCC}
                                    onChange={handleInputNombreCurso}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                                    htmlFor="grid-password"
                                  >
                                    Descripción del curso
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Descripcion"
                                    className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                                    value={descripcionCC}
                                    onChange={handleInputDescripcionCurso}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="crear w-full flex justify-center items-center">
                              <Button
                                className="w-3/4 h-[60px] text-[22px] text-white bg-[#3D5B80]"
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
                </>
              ) : (
                <div className="flex justify-center items-center">
                  ¡INICIA SESION CORRECTAMENTE PORFAVOR!
                </div>
              )}
            </>
          )}

          {/* MODAL BORRAR */}
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
                        Borrar curso
                      </h1>
                      <h1 className="mt-0 text-[25px]">
                        ¿Desea borrar el curso?
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
                        Actualizar Curso
                      </h1>
                    </div>
                    <div className="h-auto">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                            htmlFor="grid-password"
                          >
                            Nombre del Curso:
                          </label>
                          <input
                            type="text"
                            placeholder="Nombre del curso"
                            className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                            value={nombreCC}
                            onChange={handleInputNombreCurso}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-white text-[17px] font-semibold mb-2"
                            htmlFor="grid-password"
                          >
                            Descripción del Curso:
                          </label>
                          <input
                            type="text"
                            placeholder="Descripcion del curso"
                            className="block w-full backdrop-blur-lg bg-transparent text-[20px] text-gray-300 border-gray-200 py-3 px-4 mb-3 leading-tight border-b-[1px] focus:outline-none focus:border-b-[1px] focus:border-white"
                            value={descripcionCC}
                            onChange={handleInputDescripcionCurso}
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
      </div>
    </section>
  );
};
