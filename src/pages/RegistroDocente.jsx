import React from 'react'

export const RegistroDocente = () => {
  return (
    <>


      <section className="bg-slate-800 dark:bg-gray-900 h-full w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-[65px] text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                        LECTO<span className='text-red-900 px-2'>YA</span>
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Nombre:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Apellido paterno:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Apellido materno:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">DNI:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div><div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Telefono:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Correo electronico:</label>
                            <input type="email" name="email" id="email" className="h-[45px] bg-slate-100 focus:bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required="" value={correo} onChange={handleInputChangeCorreo}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-[18px] font-medium text-gray-900 dark:text-white">Contraseña:</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="h-[45px] bg-slate-100 focus:bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:focus:text-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  value={contraseña} onChange={handleInputChangeContraseña}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" checked={isChecked}   onChange={handleCheckboxChange}/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">SOY ALUMNO</label>
                                </div>
                            </div>
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-white text-[18px]">Ya tengo cuenta</a>
                        </div>
                        <button type="submit" className="w-full h-[50px] text-white bg-blue-500 border-solid border-black  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Registrar 
                        
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

    </>
  )
}
