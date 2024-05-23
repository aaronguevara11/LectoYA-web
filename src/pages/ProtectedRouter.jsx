import { Outlet, Navigate,useNavigate } from "react-router-dom";

export const ProtectedRoute = ({jwtdatalocal,children}) => {
  const navigate = useNavigate();
   let tokenLocal = localStorage.getItem('jwtdata')
   let tkvl = localStorage.getItem("tkvl")
 // Validar si jwt en el local storage es valido gaaaaa
  if (jwtdatalocal == "1" || jwtdatalocal == undefined ) {
    return <Navigate to ="/Login"/>
  }else if(jwtdatalocal != "1" && tkvl == "123"){
    return children?children: <Outlet/>
  }else if(jwtdatalocal != "1" && tkvl == "validar"){
    if(tkvl == "validar"){
      navigate("/validar/:token")
  }}
  
  return children?children: <Outlet/>
};


