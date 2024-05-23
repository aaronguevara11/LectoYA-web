import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const Validar = () => {


    const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga

    const navigate = useNavigate();
  
    const datos = localStorage.getItem("jwtdata");
    const person = localStorage.getItem("person");
  



  
    useEffect(() => {
      if (person == "alumno") {

    } else {
        navigate("/home");  
      }
    }, []);
  
    useEffect(() => {
      // Acción que deseas realizar con datacurso
      //  console.log(datacurso)
    }, [datacurso]);




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
                    <h1>alumno</h1>
                </>
            ) : person == "Docente" ? (
              <>
                {navigate("/home")}
                <div><h1>HOLA</h1></div>
              </>
            ) : (
              <div className="flex justify-center items-center">
                ¡INICIA SESION CORRECTAMENTE PORFAVOR!
              </div>
            )}
          </>
        )}





      </div>
    </div>
  </section>
  )
}
