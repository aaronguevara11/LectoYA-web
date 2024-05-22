import { Outlet, Navigate } from "react-router-dom";

export default ({jwtdatalocal,children}) => {
  if (jwtdatalocal == "1" || jwtdatalocal == undefined ) {
    console.log(jwtdatalocal)
    return <Navigate to ="/Login"/>
  }
  
  return children?children: <Outlet/>
};