import { useState } from "react"
import { SideBar } from "../Components/SideBar"

export const Tema = ({idCurso,idTema}) => {

  const token = localStorage.getItem('jwtdata')
  const [lectura,setLectura] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur libero quis voluptatibus sapiente natus itaque nobis. Possimus eaque dolor, iste aut praesentium voluptatem. Doloribus cumque iure fugit culpa reiciendis.')
  return (
    <>
        <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
          <SideBar token={token} />
        </div>

        <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
   

          <div className="w-full h-[120px] flex items-center flex-col min-w-[560px]">
            <div className="titulo h-full flex ml-10 items-center w-full">
              <div className="titulo w-full">
                <h1 className="font-bold font-sans text-[68px]">TITULO DEL TEMA</h1>
              </div>
            </div>
            <hr />
          </div>



          <div className="w-full h-[200px] p-4">
          <textarea name="textarea" id="" value={lectura} readOnly
          className="w-full p-3  h-44 max-h-44  border-solid border-2 border-black focus:outline-none rounded-lg ">

          </textarea> </div>
          <h1 className="text-3xl ml-5 my-10">
            JUEGOS
          </h1>
          <div className="w-full h-auto grid grid-cols-4 px-2">
            <section className="w-full h-auto flex justify-center items-center p-4">
            <div className="mb-5 bg-red-500 w-full h-[300px] flex justify-center items-center rounded-xl">
              1
            </div>
            </section>
            <section className="w-full h-auto flex justify-center items-center p-4">
            <div className="mb-5 bg-red-500 w-full h-[300px] flex justify-center items-center rounded-xl">
              1
            </div>
            </section>
            <section className="w-full h-auto flex justify-center items-center p-4">
            <div className="mb-5 bg-red-500 w-full h-[300px] flex justify-center items-center rounded-xl">
              1
            </div>
            </section>
            <section className="w-full h-auto flex justify-center items-center p-4">
            <div className="mb-5 bg-red-500 w-full h-[300px] flex justify-center items-center rounded-xl">
              +
            </div>
            </section>
            
          </div>
        </section>
    </>
  )
}
