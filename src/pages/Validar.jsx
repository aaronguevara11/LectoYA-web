import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const Validar = () => {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);  
    const datos = localStorage.getItem("jwtdata");
    const person = localStorage.getItem("person");
    const [datacurso,setDataCurso] = useState('');
    let [cursoToken,setCursoToken] = useState('');

    const getaway = () => {
    
      let partesRuta = location.pathname.split('/');

      let tokenvalidar = partesRuta[partesRuta.length - 2]; 

        if(tokenvalidar =="validar"){
          localStorage.setItem('tkvl', tokenvalidar)
        const tokenFromPath = partesRuta[partesRuta.length - 1]; 
        localStorage.setItem('tkMT', tokenFromPath)
        }else{
          localStorage.setItem('tkvl', "invalid")
        }
      
  };


    useEffect(() => {
      getaway();
      if (person == "alumno") {
        navigate("/home")
    } else {
      navigate("/login")
        // navigate("/Login");  
      }


    }, []);






  return (
    <section className="w-full h-full justify-center">

    <div className="w-full flex justify-center">
      <div className=" w-[95%] h-full grid justify-center grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
        {/* Muestra el mensaje de carga mientras esperas la respuesta */}
        {loading && <div>Cargando...</div>}
        {/* Muestra los datos después de recibir la respuesta */}
        {!loading && (
          <>
            {/* ALUMNO DISEÑO */}
            {person == "alumno" ? (
                <>
                    <h1>REDIRIGIENDO</h1>
                </>
            ) : person == "Docente" ? (
              <>
                <h1>REDIRIGIENDO</h1>
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
