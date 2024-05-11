import React from 'react'

export const routes = () => {



  const registrarAlumno = async (nombre, apaterno, amaterno, correo, numero, dni, password) => {
    try {
        const response = await axios.post(`${ruta}/registrarAlumnos`,{
            nombre:nombre,
            apaterno:apaterno,
            amaterno:amaterno,
            correo:correo,
            numero:numero,
            dni:dni,
            password:password

        },{
            headers:{
                Authorization : token
            }
        })
    }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
}

    const actualizarAlumno = async (id,nombre,apaterno,amaterno,correo,numero) => {
        try {
            const response = await axios.put(`${ruta}/actualizarAlumnos`,{
              id:id,
              nombre:nombre,
              apaterno:apaterno,
              amaterno:amaterno,
              correo:correo,
              numero:numero,

            },{
                headers:{
                    Authorization : token
                }
            })
        }catch (error) {
          console.error("Error al obtener los temas:", error);
          setLoading(false); 
        }
    }

    const alumnoRestablecer = async (dni, correo, newPassword ) => {
      try {
          const response = await axios.put(`${ruta}/alumnoRestablecer`,{
            dni : dni,
            correo : correo,
            newPassword : newPassword 

          },{
              headers:{
                  Authorization : token
              }
          })
      }catch (error) {
        console.error("Error al obtener los temas:", error);
        setLoading(false); 
      }
  }

 /*cambgialo  */

 
    const agregarTrabajoCambialo = async (enunciado, emocion, idTema) => {
      try {
          const response = await axios.post(`${ruta}/agregarTrabajo`,{
            enunciado :enunciado,
            emocion : emocion,
            idTema: idTema

          },{
              headers:{
                  Authorization : token
              }
          })
      }catch (error) {
        console.error("Error al obtener los temas:", error);
        setLoading(false); 
      }
    }

    const agregarRespuestaCambialo = async (respuesta, id) => {
      try {
          const response = await axios.post(`${ruta}/agregarRespuesta`,{
            respuesta : respuesta,
            id : id

          },{
              headers:{
                  Authorization : token
              }
          })
      }catch (error) {
        console.error("Error al obtener los temas:", error);
        setLoading(false); 
      }
    }

/* CURSO */


const actualizarCurso = async (id, nombre, descripcion) => {
  try {
      const response = await axios.put(`${ruta}/actualizarCurso`,{
        id:id,
        nombre:nombre,
        descripcion : descripcion

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const eliminarCurso = async (id) => {
  try {
      const response = await axios.delete(`${ruta}/eliminarCurso`,{
        id:id,


      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


/*DADO */
const agregarDado = async (primera_pre,segunda_pre,tercera_pre,cuarta_pre,quinta_pre,sexta_pre,idTema) => {
  try {
      const response = await axios.post(`${ruta}/agregarDado`,{
        primera_pre : primera_pre,
        segunda_pre : segunda_pre,
        tercera_pre : tercera_pre,
        cuarta_pre  : cuarta_pre ,
        quinta_pre  : quinta_pre,
        sexta_pre   : sexta_pre,
        idTema      : idTema,

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const respuestaDado = async (pregunta, respuesta, id) => {
  try {
      const response = await axios.post(`${ruta}/respuestaDado`,{
        pregunta: pregunta,
        respuesta: respuesta,
        id: id

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

/* DOCENTE */

const registrarDocentes = async (nombre, apaterno, amaterno, correo, numero, dni, password) => {
  try {
      const response = await axios.post(`${ruta}/registrarDocentes`,{
          nombre:nombre,
          apaterno:apaterno,
          amaterno:amaterno,
          correo:correo,
          numero:numero,
          dni:dni,
          password:password

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

  const actualizarDocentes = async (nombre, apaterno, amaterno, correo, numero ) => {
      try {
          const response = await axios.put(`${ruta}/actualizarDocentes`,{
            nombre:nombre,
            apaterno:apaterno,
            amaterno:amaterno,
            correo:correo,
            numero:numero,

          },{
              headers:{
                  Authorization : token
              }
          })
      }catch (error) {
        console.error("Error al obtener los temas:", error);
        setLoading(false); 
      }
  }

  const passwordDocente = async ( correo, dni, newPassword ) => {
    try {
        const response = await axios.put(`${ruta}/passwordDocente`,{
          correo  : correo,
          dni : dni,
          newPassword : newPassword

        },{
            headers:{
                Authorization : token
            }
        })
    }catch (error) {
      console.error("Error al obtener los temas:", error);
      setLoading(false); 
    }
  }

/*que ahremos */


const agregarQueHaremos = async (pregunta, idTema ) => {
  try {
      const response = await axios.post(`${ruta}/agregarTrabajo`,{
        pregunta:pregunta,
        idTema : idTema

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const agregarRespuestaQueHaremos = async (pregunta, respuesta, id) => {
  try {
      const response = await axios.post(`${ruta}/agregarRespuesta`,{
        pregunta: pregunta,
        respuesta: respuesta,
        id :id

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

/*interactivas */


const agregarRespuestaInteractivas = async (pregunta, respuesta, id) => {
  try {
      const response = await axios.post(`${ruta}/agregarRespuesta`,{
        pregunta: pregunta,
        respuesta: respuesta,
        id :id

      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}



/* JUEGOS */
const verRespuestaJuego = async (idTema) => {
  try {
    const response = await axios.get(`${ruta}/verRespuesta/${idTema}`, {
      headers: {
        Authorization: token,
      },
    })
  } catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
};


const borrarJuegos = async (id) => {
  try {
      const response = await axios.delete(`${ruta}/borrarJuegos`,{
        id:id,
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


/*ORDENALO YA */


const agregarOrdenalo = async (parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, idTema ) => {
  try {
      const response = await axios.post(`${ruta}/agregarOrdenalo`,{
        parrafo1: parrafo1,
        parrafo2: parrafo2,
        parrafo3: parrafo3,
        parrafo4: parrafo4,
        parrafo5: parrafo5,
        idTema: idTema 
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

const agregarRespuestaOrdenalo = async (orden1, orden2, orden3, orden4, orden5, id ) => {
  try {
      const response = await axios.post(`${ruta}/agregarRespuesta`,{
        orden1: orden1,
        orden2: orden2,
        orden3: orden3,
        orden4: orden4,
        orden5: orden5,
        id: id //id-tabla-juegos
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

/* RULETA */
const agregarRuleta = async (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, idTema) => {
  try {
      const response = await axios.post(`${ruta}/agregarRuleta`,{
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4 : pregunta4,
        pregunta5 : pregunta5,
        idTema : idTema
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const respuestaRuleta = async (pregunta, respuesta, id ) => {
  try {
      const response = await axios.post(`${ruta}/respuestaRuleta`,{
        pregunta: pregunta,
        respuesta : respuesta,
        id : id // tabla juegos
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


/* significado */

const agregarSignificado = async (lectura, idTema) => {
  try {
      const response = await axios.post(`${ruta}/agregarSignificado`,{
        lectura:lectura,
        idTema: idTema
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const respuestaSignificado = async (palabra1, palabra2, palabra3, significado1, significado2, significado3, id) => {
  try {
      const response = await axios.post(`${ruta}/respuestaSignificado`,{
        palabra1: palabra1,
        palabra2: palabra2,
        palabra3: palabra3,
        significado1 : significado1,
        significado2 : significado2,
        significado3 : significado3,
        id : id
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


/* TEMAS */
const actualizarTemas = async (id, nombre, descripcion, lectura ) => {
  try {
      const response = await axios.put(`${ruta}/actualizarTemas`,{
        id: id, // ID de la tabla tema 
        nombre:nombre,
        descripcion:descripcion,
        lectura : lectura
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}


const borrarTemas = async (id) => {
  try {
      const response = await axios.post(`${ruta}/borrarTemas`,{
        id : id // id de la tabla tema 
      },{
          headers:{
              Authorization : token
          }
      })
  }catch (error) {
    console.error("Error al obtener los temas:", error);
    setLoading(false); 
  }
}

  return (
    <div>routes</div>
  )
}
