import { HdModulos } from "../Components/Headers/HdModulos"
import store from "../assets/images/store.png"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
export const Modulos = () => {
  return (
    <section className="w-full h-4/5 justify-center">
      <HdModulos/>

      <div className='w-full h-50 grid justify-center grid-cols-5'>
        
        <div className="  h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center m-5">
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

        <div className="  h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center  m-5">
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

        <div className="  h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center  m-5">
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


        <div className="  h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center  m-5">
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

        <div className="  h-60 bg-gray-200 rounded overflow-hidden shadow-lg flex justify-center items-center  m-5">
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



        <div class=" bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl shadow-md p-4 h-32 w-[260px] ml-xl relative overflow-hidden m-5">
          {/* <img src={store} alt="" className="w-40 absolute right-[-30px] bottom-[-30px]"/> */}
          <SportsSoccerIcon className="w-500 absolute right-[-15px] bottom-[-20px] text-violet-800" style={{ fontSize: 140}}/>

          <div class="card-content w-4/5 h-full flex justify-center items-center flex-col">
            <h2 class="card-title font-bold text-2xl text-white text-left w-full ml-4 text
            ">Sports</h2>
            <p class="card-description text-white text-opacity-70 text-left w-full ml-4 -m-1"> __</p>
          </div>
        </div>






      </div>
    </section>
  )
}