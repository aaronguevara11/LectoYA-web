import { HdModulos } from "../Components/Headers/HdModulos"

export const Modulos = () => {
  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos/>
      <div className='w-full h-4/5 grid justify-center grid-cols-4 px-9'>
        
        <div className="w-80 h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center">
          <div className="informacion w-full px-3">
            <div className="px-4 mt-3">
              <div className="font-bold text-[33px]">Titulo</div>
              <p className="text-gray text-[21px]">Nombre del docente</p>
            </div>
            <div className="btn flex justify-center w-full my-4 h-[45px]">
              <button class="bg-black text-white hover:bg-neutral-700 w-full mx-3 ml-3 font-bold py-2 px-4 rounded text-[20px]">Entrar</button>
            </div>
          </div>
        </div>
        
        
        <div className="w-1/4 h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center">
          <div className="informacion w-full px-3">
            <div className="px-4 mt-3">
              <div className="font-bold text-[33px]">Titulo</div>
              <p className="text-gray text-[21px]">Nombre del docente</p>
            </div>
            <div className="btn flex justify-center w-full my-4 h-[45px]">
              <button class="bg-black text-white hover:bg-neutral-700 w-full mx-3 ml-3 font-bold py-2 px-4 rounded text-[20px]">Entrar</button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
