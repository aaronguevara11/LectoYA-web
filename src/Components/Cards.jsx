import image from '../assets/images/fondo.webp'

export const Cards = () => {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-80 h-1/3 mx-auto py-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:h-1/2 xl:h-1/3 mb-4 bg-gray-500 rounded overflow-hidden shadow-lg">
        <div className="px-4 mt-3">
          <div className="font-bold text-[25px]">Lectura 1</div>
          <p className="text-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="btn flex justify-center my-3">
          <button class="bg-bluef text-white w-5/6 h-1/3 hover:bg-blue-700 font-bold py-2 px-4 rounded">Entrar</button>
        </div>
      </div>
      <div className="w-80 h-1/3 mx-auto px-2 py-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:h-1/2 xl:h-1/3 mb-4 bg-gray-500 rounded overflow-hidden shadow-lg">
        <div className="px-4 mt-3">
          <div className="font-bold text-[25px]">Lectura 1</div>
          <p className="text-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="btn flex justify-center my-3">
          <button class="w-5/6 h-1/3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entrar</button>
        </div>
      </div>
    </div>
  )
}
