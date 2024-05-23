import { useState } from "react";
import { Button } from "@material-tailwind/react";
import * as React from "react";
import { SideBar } from "../SideBar";
import axios from "axios";

export const FormSignificado= ({ ruta }) => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwtdata");
  const idTema = localStorage.getItem("idTema");

  const [lecturaSignificado, setLecturaSignificado] = useState("");

  const agregarSignificado = async (lectura, idTema) => {
    try {
      const response = await axios.post(
        `${ruta}/significado/agregarSignificado`,
        {
          lectura: lectura,
          idTema: idTema,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR", error);
      setLoading(false);
    }
  };

  const handleSubmitSignificado = async (e) => {
    e.preventDefault();
    await agregarSignificado(lecturaSignificado, idTema);
    setLecturaSignificado("");
    alert("se agrego el juego correctamente");
  };

  const handleLecturaSignificado = ({ target }) => {
    setLecturaSignificado(target.value);
  };
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar token={token} />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full h-full justify-center">
        <section className="w-full h-full">
          <div className=" w-full h-auto flex justify-center pb-5">
            <h1 className="w-4/5 uppercase font-bold text-[60px] pt-4">
              Dale un significado
            </h1>
          </div>

          <hr className="border-2" />

          <div className="h-[70%] w-full mt-10">
            <form className="w-full" onSubmit={handleSubmitSignificado}>
              <div className="w-full flex flex-col my-3 justify-center">
                <div className="w-full flex justify-center">
                  <label className="w-4/5 uppercase tracking-wide text-gray-700 text-[22px] font-bold mb-2">
                    Lectura:
                  </label>
                </div>

                <div className="w-full h-auto flex justify-center">
                  <textarea
                    className="w-4/5 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[60px] max-h-[150px]"
                    placeholder="Escriba un fragmento de la lectura..."
                    value={lecturaSignificado}
                    onChange={handleLecturaSignificado}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center my-4">
                <div className="w-4/5 flex justify-end">
                  <Button
                    className="w-1/4 h-[65px] text-[22px] text-white bg-[#3D5B80] hover:bg-[#304764]"
                    type="submit"
                  >
                    Agregar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
