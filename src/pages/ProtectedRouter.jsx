import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = ({jwtdatalocal,children}) => {
  if (jwtdatalocal == "1" || jwtdatalocal == undefined ) {
    console.log(jwtdatalocal)
    return <Navigate to ="/LoginDocente"/>
  }
  return children?children: <Outlet/>
};