import { CambialoYaGame } from "../Components/Games/CambialoYaGame"
import { SideBar } from "../Components/SideBar"
export const CambioYa = ({ruta}) => {
  const token = localStorage.getItem('jwtdata')
  return (
    <>
            <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
            <SideBar token={token} />
        </div>

        <section className="flex flex-col overflow-auto bg-white relative w-full h-full ">
            <CambialoYaGame ruta={ruta} />
        </section>


    </>
  )
}
