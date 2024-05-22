import React, { useEffect } from "react";
import { useState } from "react";
import { SideBar } from "../Components/SideBar";
import { Collapse } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useNavigate } from "react-router-dom";
import axiosBase from "../api/axiosBase";

export default ({ idCurso, idTema, setIdJuego, setNombreJuego, setIdTema }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwtdata");
  const [lectura, setLectura] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur libero quis voluptatibus sapiente natus itaque nobis. Possimus eaque dolor, iste aut praesentium voluptatem. Doloribus cumque iure fugit culpa reiciendis."
  );
  const [isOpen, setIsOpen] = useState(false);
  const [juegos, setJuegos] = useState("");
  const toggleOpen = () => setIsOpen(!isOpen);
  const [dataResponse, setDataResponse] = useState("");
  const navigate = useNavigate();

  const nombreCurso = [
    {
      juego: "Historias interactivas",
    },
    {
      juego: "¿Ahora que haremos?",
    },
    {
      juego: "El dado de las preguntas",
    },
    {
      juego: "Cambialo YA",
    },
    {
      juego: "Ordenalo YA",
    },
    {
      juego: "Ruleteando",
    },
    {
      juego: "Dale un significado",
    },
  ];
  const handleredirectform = (
    nombreJuego,
    setNombreJuego,
    idTema,
    setIdTema
  ) => {
    setNombreJuego(nombreJuego);
    setIdTema(idTema);
    if (nombreJuego == "Historias interactivas") {
      window.location.href = "/home/FormularioInteractivas";
    } else if (nombreJuego == "¿Ahora que haremos?") {
      window.location.href = "/home/FormularioQueHaremos";
    } else if (nombreJuego == "Ruleteando") {
      window.location.href = "/home/FormularioRuleteando";
    } else if (nombreJuego == "Ordenalo YA") {
      window.location.href = "/home/FormularioOrdenaloYa";
    } else if (nombreJuego == "El dado de las preguntas") {
      window.location.href = "/home/FormularioJuegoDelDado";
    } else if (nombreJuego == "Dale un significado") {
      window.location.href = "/home/FormularioDaleUnSignificado";
    } else if (nombreJuego == "Cambialo YA") {
      window.location.href = "/home/FormularioCambialoYa";
    } else {
      alert("el juego tiene problemas contacte con soporte o crealo denuevo");
    }
  };

  if (idTema == undefined || idTema == "") {
  } else {
    localStorage.setItem("idTema", idTema);
  }

  // VER TEMA PETICION
  const verTema = async (idTema) => {
    try {
      const response = await axiosBase.get(`/verTema/${idTema}`);
      setJuegos(response.data.Temas.juegos);
      setDataResponse(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  const agregarSignificado = async (lectura, idTema) => {
    try {
      const response = await axiosBase.post(`/significado/agregarSignificado`, {
        lectura: lectura,
        idTema: idTema,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  const agregarOrdenalo = async (
    parrafo1,
    parrafo2,
    parrafo3,
    parrafo4,
    parrafo5,
    idTema
  ) => {
    try {
      const response = await axiosBase.post(`/ordenalo/agregarOrdenalo`, {
        parrafo1: parrafo1,
        parrafo2: parrafo2,
        parrafo3: parrafo3,
        parrafo4: parrafo4,
        parrafo5: parrafo5,
        idTema: idTema,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  const agregarQueHaremos = async (pregunta, idTema) => {
    try {
      const response = await axiosBase.post(`/haremos/agregarTrabajo`, {
        pregunta: pregunta,
        idTema: idTema,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  const agregarRuleta = async (
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    idTema
  ) => {
    try {
      const response = await axiosBase.post(`/ruleta/agregarRuleta`, {
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        idTema: idTema,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  const agregarTrabajoCambialo = async (enunciado, emocion, idTema) => {
    try {
      const response = await axiosBase.post(`cambialo/agregarTrabajo`, {
        enunciado: enunciado,
        emocion: emocion,
        idTema: idTema,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cursoLSG = localStorage.getItem("idTema");
    const idTemalocal = parseInt(cursoLSG);

    verTema(parseInt(cursoLSG));
    // agregarSignificado("lectura",idTemalocal)
    // agregarOrdenalo("parrafo1", "parrafo2", "parrafo3", "parrafo4", "parrafo5", idTemalocal )
    // agregarQueHaremos("pregunta",idTemalocal)
    //agregarRuleta("pregunta1", "pregunta2", "pregunta3", "pregunta4", "pregunta5", idTemalocal)
    // agregarTrabajoCambialo("enunciado", "emocion", idTemalocal)
  }, [idTema, token]);

  const handleRedirectGame = (idJuego, nombreJuego, setIdJuego) => {
    setIdJuego(idJuego);

    if (idJuego == undefined || idJuego == "") {
    } else {
      localStorage.setItem("idJuego", idJuego);
    }

    if (nombreJuego == "Historias interactivas") {
      window.location.href = "/home/historiasinteractivas";
    } else if (nombreJuego == "¿Ahora que haremos?") {
      window.location.href = "/home/AhoraQueHaremos";
    } else if (nombreJuego == "Ruleteando") {
      window.location.href = "/home/JuegoDeLaRuleta";
    } else if (nombreJuego == "Ordenalo YA") {
      window.location.href = "/home/OrdenaloYa";
    } else if (nombreJuego == "El dado de las preguntas") {
      window.location.href = "/home/JuegoDelDado";
    } else if (nombreJuego == "Dale un significado") {
      window.location.href = "/home/DaleUnSignificado";
    } else if (nombreJuego == "Cambialo YA") {
      window.location.href = "/home/CambioYa";
    } else {
      alert("el juego tiene problemas intente mas tarde");
    }
  };

  const [idJuegoBorrar, setIdJuegoBorrar] = useState("");

  const borrarJuegoAxios = async (idJuegoBorrar) => {
    try {
      const response = await axiosBase.delete(`/juegos/borrarJuegos`, {
        data: {
          id: idJuegoBorrar,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const borrarTema = async () => {
    await borrarJuegoAxios(idJuegoBorrar);
    const cursoLSG = localStorage.getItem("idTema");
    const idTemalocal = parseInt(cursoLSG);

    verTema(parseInt(cursoLSG));
    handleCl();
  };

  const handleCl = () => setOp(false);
  const [op, setOp] = useState(false);
  const handleOp = (idJuegoB) => {
    setIdJuegoBorrar(idJuegoB);
    setOp(true);
  };

  // MOSTRAR RESPUESTAS
  const [loadingM, setLoadingM] = useState(true);
  const [enunciado, setEnunciado] = useState("");
  const [parrafo, setParrafo] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [alumno, setAlumno] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [nameGame, setNameGame] = useState("");
  const [lecturaR, setLecturaR] = useState("");
  const [openR, setOpenR] = useState(false);
  const handleOpenR = () => setOpen(true);
  const handleCloseR = () => setOpenR(false);

  const mostraRespuestas = async (idTema, nameGame) => {
    try {
      const response = await axiosBase.get(`/juegos/verRespuesta/${idTema}`);
      console.log(response.data);
      console.log(nameGame);
      let respuestaAxios = response.data;
      if (nameGame == "Cambialo YA") {
        setEnunciado(respuestaAxios.juego.enunciado);
        setPregunta(respuestaAxios.juego.emocion);
        setRespuesta(respuestaAxios.juego.res_cambialo);
      } else if (nameGame == "Ruleteando") {
        console.log(respuestaAxios);
        setRespuesta(respuestaAxios.juego.res_ruleta);
      } else if (nameGame == "Historias interactivas") {
        console.log(respuestaAxios);
        setParrafo(respuestaAxios.juego.parrafo);
        setPregunta(respuestaAxios.juego.pregunta);
        setRespuesta(respuestaAxios.juego.resInteractivas);
      } else if (nameGame == "¿Ahora que haremos?") {
        console.log(respuestaAxios);
        setRespuesta(respuestaAxios.juego.res_haremos);
      } else if (nameGame == "Ordenalo YA") {
        console.log(respuestaAxios);
        setRespuesta(respuestaAxios.juego.res_ordenalo);
      } else if (nameGame == "El dado de las preguntas") {
        console.log(respuestaAxios);
        setRespuesta(respuestaAxios.juego.respuesta_dado);
      } else if (nameGame == "Dale un significado") {
        console.log(respuestaAxios);
        setLecturaR(respuestaAxios.juego.lectura);
        setRespuesta(respuestaAxios.juego.res_significado);
      }
      setLoadingM(false);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
      setLoading(false);
    }
  };

  const clickViewResponse = async (idTema, nombreJuego) => {
    console.log(idTema);
    console.log(nombreJuego);
    setNameGame(nombreJuego);
    await mostraRespuestas(idTema, nombreJuego);
    setOpenR(true);
  };

  return (
    <>
      {loading && <div>Cargando...</div>}
      {!loading && (
        <>
          <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
            <SideBar token={token} />
          </div>

          <section className="flex flex-col overflowx-auto bg-white relative w-full h-full ">
            <div className="w-full h-[120px] flex items-center flex-col min-w-[560px]">
              <div className="titulo h-full flex items-center w-full">
                <div className="titulo w-full">
                  <h1 className="font-bold font-sans pl-10 text-[68px]">
                    {dataResponse.Temas.nombre}
                  </h1>
                </div>
              </div>
              <hr />
            </div>

            <div className="w-full h-auto min-h-[200px] max-h-[430px] px-10">
              <textarea
                name="textarea"
                id=""
                value={dataResponse.Temas.lectura}
                readOnly
                className="w-full my-3 p-4 h-auto min-h-[200px] max-h-[300px] border-solid border-2 border-gray-200 focus:outline-none rounded-lg text-[20 px]"
              ></textarea>
            </div>

            <div className="w-full h-[60%] px-10 mt-8 flex flex-col items-center">
              <div className="bg-gray-200 w-full h-[20%] rounded overflowx-hidden shadow-lg flex items-center ">
                <div className="h-full w-full flex items-center">
                  <button
                    className="text-start px-5 w-full h-full text-[45px] font-mono rounded-lg font-medium text-gray-700 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                  >
                    JUEGOS
                  </button>
                </div>
              </div>

              <Collapse open={isOpen} className=" overflow-y-scroll">
                <div className="w-full overflowx-hidden shadow-lg border-2 flex flex-col items-center h-auto">
                  {juegos.map((item) => (
                    <div
                      className="w-full h-[100px] rounded overflowx-hidden border-b-2 flex items-center"
                      key={item.id}
                    >
                      <div className="w-5/6">
                        <h2 className="w-80 font-normal font-sans text-[20px] px-5">
                          {item.nombreJuego}
                        </h2>
                        {/* Accedemos a la propiedad nombreJuego del objeto actual */}
                      </div>
                      <div className="w-1/6 h-full flex items-end justify-center px-4">
                        <div className="w-5/5 h-full flex items-center justify-center">
                          {/* VER NOTAS */}

                          <Button
                            className="flex h-[53px] bg-lime-500 hover:shadow-lg border-2 border-black hover:shadow-gray-500 border-solid rounded-lg w-[150px] p-1 items-center justify-center"
                            onClick={() =>
                              clickViewResponse(item.id, item.nombreJuego)
                            }
                          >
                            <section className="w-4/5 flex justify-center text-lg text-white">
                              Ver Respuestas
                            </section>
                            <section className="flex justify-center items-center">
                              <ArrowForwardIosOutlinedIcon />
                            </section>
                          </Button>

                          <Button
                            onClick={() => {
                              handleRedirectGame(
                                item.id,
                                item.nombreJuego,
                                setIdJuego
                              );
                            }}
                            className="h-[50px] w-full bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-lg py-2 px-4 mr-4"
                          >
                            Ir al juego
                          </Button>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <Button
                            className="flex bg-red-900 hover:shadow-lg hover:shadow-gray-500 border-solid rounded-lg px-3 h-[50px] items-center justify-center"
                            onClick={() => handleOp(item.id)}
                          >
                            <section className="text-lg text-white">
                              <DeleteOutlineOutlinedIcon />
                            </section>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-[100px] rounded overflowx-hidden border-b-2 flex items-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Button
                      onClick={handleOpen}
                      className="h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                    >
                      ¿AGREGAR UN JUEGO?
                    </Button>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="w-full top-1/2 right-1/2">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                <Box className="w-[650px] h-[85%] backdrop-blur-md flex justify-center px-3 backdrop-brightness-50 rounded-[15px] p-4">
                  <form className="w-[90%] h-auto flex justify-center">
                    <div className="w-full h-full relative top-0">
                      <div className="titulo my-5 h-[10%]">
                        <h1 className="text-gray-100 uppercase font-bold font-mono text-[55px] text-center">
                          Elegir juego
                        </h1>
                      </div>

                      <div className="h-[84%] w-full">
                        {nombreCurso.map((item) => (
                          <div
                            className="flex flex-wrap w-full h-[12%] my-[15px] backdrop-blur-xl rounded-lg px-2 border"
                            key={item.juego}
                          >
                            <div className="w-full h-full px-3 flex items-center justify-center ">
                              <div className="w-4/5 h-full flex items-center">
                                <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold ">
                                  {item.juego}
                                </label>
                              </div>
                              <div className="w-1/5 h-full flex items-center">
                                <Button
                                  className="h-[45px] w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                                  onClick={() => {
                                    handleredirectform(
                                      item.juego,
                                      setNombreJuego,
                                      idTema,
                                      setIdTema
                                    );
                                  }}
                                >
                                  Elegir
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>

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

            {/* MODAL VER NOTAS */}

            <div className="w-full top-1/2 right-1/2">
              <Modal
                open={openR}
                onClose={handleCloseR}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full h-full flex justify-center items-center "
              >
                <Box className="w-[600px] h-auto flex flex-col justify-center px-12 bg-white rounded-[15px] p-4 ml-72">
                  <h1 className="text-2xl text-red-600 font-bold">
                    NOMBRE DEL JUEGO
                  </h1>
                  <h1 className="text-black font-semibold text-xl">
                    {nameGame}
                  </h1>

                  <>
                    <h1 className="text-green-600 font-bold">
                      RESPUETAS ALUMNOS
                    </h1>
                    {loadingM && <div>Cargando...</div>}
                    {!loadingM && (
                      <>
                        {nameGame == "Cambialo YA" ? (
                          <>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>

                                <h2 className="text-blue-600 font-bold">
                                  ENUNCIADO
                                </h2>
                                <h2>{enunciado}</h2>
                                <p className="text-blue-600 font-bold">
                                  PREGUNTA
                                </p>
                                <p>{pregunta}</p>

                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>
                                <h2>{item.respuesta}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "Ruleteando" ? (
                          <>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  PREGUNTA
                                </p>
                                <h1>{item.pregunta}</h1>
                                <p className="text-blue-600 font-bold">
                                  RESPUESTA
                                </p>
                                <h2>{item.respuesta}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "Historias interactivas" ? (
                          <>
                            <h1>{parrafo}</h1>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  PREGUNTA
                                </p>
                                <h1>{item.pregunta}</h1>
                                <p className="text-blue-600 font-bold">
                                  RESPUESTA
                                </p>
                                <h2>{item.respuesta}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "¿Ahora que haremos?" ? (
                          <>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  PREGUNTA
                                </p>
                                <h1>{item.pregunta}</h1>
                                <p className="text-blue-600 font-bold">
                                  RESPUESTA
                                </p>
                                <h2>{item.respuesta}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "Ordenalo YA" ? (
                          <>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  ORDENA ALUMNO
                                </p>
                                <h2>orden 1: {item.orden1}</h2>
                                <h2>orden 2: {item.orden2}</h2>
                                <h2>orden 3: {item.orden3}</h2>
                                <h2>orden 4: {item.orden4}</h2>
                                <h2>orden 5: {item.orden5}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "El dado de las preguntas" ? (
                          <>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  Pregunta
                                </p>
                                <h2>Pregunta : {item.pregunta}</h2>
                                <h2>Respuestas : {item.respuesta}</h2>
                              </div>
                            ))}
                          </>
                        ) : nameGame == "Dale un significado" ? (
                          <>
                            <h2>{lecturaR}</h2>
                            {respuesta.map((item) => (
                              <div key={item.id}>
                                <br></br>
                                <h1>
                                  {item.nombre} {item.apaterno}
                                </h1>

                                <p className="text-blue-600 font-bold">
                                  Palabra 1
                                </p>
                                <h1>{item.palabra1}</h1>
                                <p className="text-blue-600 font-bold">
                                  Significado 1
                                </p>
                                <h2>{item.significado1}</h2>

                                <p className="text-blue-600 font-bold">
                                  Palabra 2
                                </p>
                                <h1>{item.palabra2}</h1>
                                <p className="text-blue-600 font-bold">
                                  Significado 2
                                </p>
                                <h2>{item.significado2}</h2>

                                <p className="text-blue-600 font-bold">
                                  Palabra 3
                                </p>
                                <h1>{item.palabra3}</h1>
                                <p className="text-blue-600 font-bold">
                                  Significado 3
                                </p>
                                <h2>{item.significado3}</h2>
                              </div>
                            ))}
                          </>
                        ) : (
                          <div>Juego no Existe</div>
                        )}
                      </>
                    )}
                  </>
                </Box>
              </Modal>
            </div>
          </section>
        </>
      )}
    </>
  );
};
