import React from 'react'
import { SideBar } from "../Components/SideBar";
import { RouteChange } from "../pages/RouteChange";
export const Views = () => {
  return (
    <>
      <div className="flex-shrink-0 w-72 bg-blue-950 text-white">
        <SideBar />
      </div>
      <div className="flex flex-grow overflow-auto bg-gray-100 relative w-full justify-center">
        {/* <Modulos /> */}

       <RouteChange /> 
      </div>
    </>
  )
}
