import { useEffect, useState } from "react";
import axiosBase from "../api/axiosBase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Validar } from "./Validar";
import axios from "axios";
export const Login = ({ setJwtDataLocal }) => {
  /* DATA */
  const [jwtdata, setJwtData] = useState("1");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [userData, setUserData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  localStorage.setItem("jwtdata", jwtdata);
  const navigate = useNavigate();
  const location = useLocation();
  const [tokenURL, setTokenURL] = useState("");

  /* LOGIN DOCENTES */
  const loginAxiosDocente = async (correo, contraseña) => {
    try {
      const response = await axios.put(
        "https://lectoya-back.onrender.com/app/loginDocentes",
        {
          correo: correo,
          password: contraseña,
        }
      );

      setJwtData(response.data.token);
      let token = response.data.token;
      localStorage.setItem("jwtdata", token);
      console.log("123");
      localStorage.setItem("person", "Docente");
      if (response.data.message === "Datos incorrectos") {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error al obtener los temas:", error);
    }
  };

  const loginAxiosAlumno = async (correo, contraseña) => {
    //LOGIN
    const response = await axios
      .put("https://lectoya-back.onrender.com/app/loginAlumnos", {
        correo: correo,
        password: contraseña,
      })
      .then(function (response) {
        setJwtData(response.data.token);
        localStorage.setItem("jwtdata", response.data.token);
        localStorage.setItem("person", "alumno");
        if (response.data.message === "Datos incorrectos") {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (jwtdata && jwtdata != "1") {
      setJwtDataLocal(jwtdata);

      navigate("/home");
    }
  }, [jwtdata]);

  /* EVENTOS HANDLE */
  const handleInputChangeCorreo = ({ target }) => {
    setCorreo(target.value);
  };

  const handleInputChangeContraseña = ({ target }) => {
    setContraseña(target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Cambia el estado del checkbox cuando se hace clic
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      loginAxiosAlumno(correo, contraseña);
    } else {
      loginAxiosDocente(correo, contraseña);
    }

    if (jwtdata == "1" || jwtdata == undefined || jwtdata) {
      // setJwtDataLocal(jwtdata);
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <section className="bg-slate-800 dark:bg-gray-900 h-full w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white/40 rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[65px] text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                LECTO<span className="text-red-900 px-2">YA</span>
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white "
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        SOY ALUMNO
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-white text-[18px]"
                  >
                    Restablecer contraseña
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full h-[50px] text-white bg-blue-500 border-solid border-black  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="text-sm font-light w-full h-8 flex items-center">
                  <a
                    href="/Registro/:docente"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 w-full text-center flex items-center justify-center bg-black text-white mx-2 rounded-md h-[43px]"
                  >
                    Crear Cuenta Docente
                  </a>
                  <a
                    href="/Registro/:alumno"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 w-full text-center flex items-center justify-center bg-black text-white mx-2 rounded-md h-[43px]"
                  >
                    Crear Cuenta Alumno
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
