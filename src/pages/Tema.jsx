import React from "react";
import { useState } from "react"
import { SideBar } from "../Components/SideBar"
import { Collapse} from '@material-tailwind/react';
import { Button } from "@material-tailwind/react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const Tema = ({idCurso,idTema}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const token = localStorage.getItem('jwtdata')
  const [lectura,setLectura] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur libero quis voluptatibus sapiente natus itaque nobis. Possimus eaque dolor, iste aut praesentium voluptatem. Doloribus cumque iure fugit culpa reiciendis.')
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  

  return (
    <>
        <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
          <SideBar token={token} />
        </div>

        <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
          <div className="w-full h-[120px] flex items-center flex-col min-w-[560px]">
            <div className="titulo h-full flex items-center w-full">
              <div className="titulo w-full">
                <h1 className="font-bold font-sans pl-10 text-[68px]">TITULO DEL TEMA</h1>
              </div>
            </div>
            <hr />
          </div>

          <div className="w-full h-auto max-h-[430px] px-10">
            <textarea name="textarea" id="" value={lectura} readOnly
            className="w-full p-3 h-auto max-h-[430px] border-solid border-2 border-gray-900 focus:outline-none rounded-lg text-[20 px]">

            </textarea> 
          </div>



            <div className="w-full h-[60%] px-10 mt-7 flex flex-col items-center">
                <div className="bg-gray-200 w-full h-[15%] rounded overflow-hidden shadow-lg flex items-center ">
                  <div className="h-full w-full flex items-center">
                    <button className="text-start px-5 w-full h-full text-[45px] font-mono rounded-lg font-medium text-gray-700 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
                      onClick={toggleOpen}
                      aria-expanded={isOpen}
                    >
                      JUEGOS
                    </button>
                  </div>
                </div>

                  <Collapse open={isOpen} >

                    <div className="w-full overflow-hidden shadow-lg border-2 flex flex-col items-center h-[300px]">

                      <div className="w-full h-2/6 rounded overflow-hidden border-b-2 flex items-center">
                        <div className="w-4/5">
                          <h2 className="w-80 font-normal font-sans text-[20px] px-5">Nombre del juego</h2>
                        </div>
                        <div className="w-1/5 h-full flex items-center justify-center">
                          <button className="uppercase h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Entrar</button>
                        </div>
                      </div>

                      <div className="w-full h-2/6 rounded overflow-hidden border-b-2 flex items-center">
                        <div className="w-4/5">
                          <h2 className="w-80 font-normal font-sans text-[20px] px-5">Nombre del juego</h2>
                        </div>
                        <div className="w-1/5 h-full flex items-center justify-center">
                          <button className="uppercase h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Entrar</button>
                        </div>
                      </div>

                      <div className="w-full h-2/6 rounded overflow-hidden border-b-2 flex items-center">
                        <div className="w-4/5">
                          <h2 className="w-80 font-normal font-sans text-[20px] px-5">Agregar juego</h2>
                        </div>
                        <div className="w-1/5 h-full flex items-center justify-center">
                          <Button onClick={handleOpen} className="h-3/5 w-3/5 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Agregar</Button>
                        </div>
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
            <Box className="w-[650px] h-[85%] backdrop-blur-md flex justify-center px-8 backdrop-brightness-50 rounded-[15px] p-4 ml-72">
              <form className="w-full max-w-lg h-auto flex justify-center">
                <div className="w-full h-full relative top-0">

                  <div className="titulo my-5">
                    <h1 className="text-gray-100 uppercase font-bold font-mono text-[55px] text-center">Elegir juego</h1>
                  </div>

                  <div className="h-[70%] w-full">
                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Preguntas interactivas 
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            ¿Que haremos hoy?
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Dado de las preguntas
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Ruleta 
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Ordenalo YA
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Cambialo YA
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full h-[10%] mx-3 mb-6">
                      <div className="w-full h-full px-3 flex items-center justify-center">
                        <div className="w-4/5 h-full flex items-center">
                          <label className="w-full h-full flex items-center uppercase tracking-wide text-white text-[20px] font-semibold mb-2" htmlFor="grid-password">
                            Dale un Significado 
                          </label>
                        </div>
                        <div className="w-1/5 h-full flex items-center">
                          <button className="h-4/5 w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">Elegir</button>
                        </div>
                      </div>
                    </div>
                    



                  </div>

                  <div className="crear w-full flex justify-center items-center h-[60px] my-5">
                    <Button className="w-3/4 h-[60px] text-[22px] text-white bg-[#7b3030] hover:bg-[#5e2525] my-5" type="submit">Agregar</Button>
                  </div>

                </div>
              </form>
            </Box>
          </Modal>
        </div>

        </section>

        
    </>
  )
}
