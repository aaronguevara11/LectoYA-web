import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Registro= ({ ruta }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [apaterno, setApaterno] = useState("");
  const [amaterno, setAmaterno] = useState("");
  const [nombres, setNombres] = useState("");
  const [dni, setDni] = useState("");
  const [numero, setNumero] = useState("");

  // Usa useParams para obtener el parámetro de la ruta
  const { user } = useParams();

  /* EVENTOS HANDLE */
  const handleInputChangeCorreo = ({ target }) => {
    setCorreo(target.value);
  };

  const handleInputChangeContraseña = ({ target }) => {
    setContraseña(target.value);
  };

  const handleInputChangeApaterno = ({ target }) => {
    setApaterno(target.value);
  };

  const handleInputChangeAmaterno = ({ target }) => {
    setAmaterno(target.value);
  };
  const handleInputChangeNombres = ({ target }) => {
    setNombres(target.value);
  };

  const handleInputChangeDni = ({ target }) => {
    setDni(target.value);
  };
  const handleInputChangeNumero = ({ target }) => {
    setNumero(target.value);
  };

  const registerAxiosAlumno = async (
    correo,
    contraseña,
    apaterno,
    amaterno,
    nombres,
    dni,
    numero
  ) => {
    //LOGIN
    const response = await axios
      .post(`${ruta}/registrarAlumnos`, {
        correo: correo,
        password: contraseña,
        apaterno: apaterno,
        amaterno: amaterno,
        nombre: nombres,
        dni: dni,
        numero: numero,
      })
      .then(function (response) {
        console.log(response.data);

        if (response.data.message === "El alumno ya existe") {
          alert(response.data.message);
        } else if (response.data.message == "Error en el servidor") {
          alert(response.data.message);
        } else if (response.data.message == "Alumno registrado con éxito") {
          setTimeout(() => {
            window.location.href = "/Login";
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const registerAxiosDocente = async (
    correo,
    contraseña,
    apaterno,
    amaterno,
    nombres,
    dni,
    numero
  ) => {
    //LOGIN
    const response = await axios
      .post(`${ruta}/registrarDocentes`, {
        correo: correo,
        password: contraseña,
        apaterno: apaterno,
        amaterno: amaterno,
        nombre: nombres,
        dni: dni,
        numero: numero,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "El docente ya existe") {
          alert(response.data.message);
        } else if (response.data.message == "Error en el servidor") {
          alert(response.data.message);
        } else if (response.data.message == "Docente registrado con éxito") {
          setTimeout(() => {
            window.location.href = "/Login";
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (user == ":alumno") {
      await registerAxiosAlumno(
        correo,
        contraseña,
        apaterno,
        amaterno,
        nombres,
        dni,
        numero
      );
    } else if (user == ":docente") {
      await registerAxiosDocente(
        correo,
        contraseña,
        apaterno,
        amaterno,
        nombres,
        dni,
        numero
      );
    }
  };

  return (
    <>
      <section className="bg-slate-800 dark:bg-gray-900 h-full w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[65px] text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                LECTO<span className="text-red-900 px-2">YA</span>
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[18px] font-medium text-white "
                  >
                    Nombres:
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nombres"
                    required=""
                    value={nombres}
                    onChange={handleInputChangeNombres}
                  />
                </div>

                <div className="flex">
                  <section className="w-2/4 mr-1">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-white "
                    >
                      Apellido Paterno:
                    </label>
                    <input
                      type="text"
                      name="apaterno"
                      id="apaterno"
                      className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apellido Paterno"
                      required=""
                      value={apaterno}
                      onChange={handleInputChangeApaterno}
                    />
                  </section>

                  <section className="w-2/4 ml-1">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-white "
                    >
                      Apellido Materno:
                    </label>
                    <input
                      type="text"
                      name="amaterno"
                      id="z"
                      className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apellido Materno"
                      required=""
                      value={amaterno}
                      onChange={handleInputChangeAmaterno}
                    />
                  </section>
                </div>

                <div className="flex">
                  <section className="w-2/4 mr-1">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-white "
                    >
                      DNI :
                    </label>
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apellido Paterno"
                      required=""
                      value={dni}
                      onChange={handleInputChangeDni}
                    />
                  </section>

                  <section className="w-2/4 ml-1">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-white "
                    >
                      Numero :
                    </label>
                    <input
                      type="text"
                      name="numero"
                      id="numero"
                      className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apellido Materno"
                      required=""
                      value={numero}
                      onChange={handleInputChangeNumero}
                    />
                  </section>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[18px] font-medium text-white "
                  >
                    Correo electronico:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                    required=""
                    value={correo}
                    onChange={handleInputChangeCorreo}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="h-[45px] bg-slate-100   border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={contraseña}
                    onChange={handleInputChangeContraseña}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-[24px] h-[50px] text-white bg-blue-500 border-solid border-black  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
