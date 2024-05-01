import React from 'react'

export const Curso = ({ChangeHome,dataTopic}) => {
  const data = dataTopic
  
  return (

    <>
      <div className='w-full h-full'>
            <h1>{data.titulo}</h1>
            <p>{data.docente}</p>
      </div>
    </>
  )
}
