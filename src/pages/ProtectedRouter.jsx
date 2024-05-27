import React from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

export const ProtectedRoute = ({jwtdatalocal,children}) => {
  const navigate = useNavigate();

  const verifyToken = () => {
    const token = localStorage.getItem('jwtdata');
    if (!token) {
      navigate('/login');
      return false;
    }

    try {
      const { exp } = jwtDecode(token);
      if (exp < Date.now() / 1000) {
        navigate('/login');
        return false;
      }
    } catch (e) {
      navigate('/login');
      return false;
    }

    return true;
  };

  React.useEffect(() => {
    verifyToken();
  }, [navigate]);

  let tokenLocal = localStorage.getItem('jwtdata');
  let tkvl = localStorage.getItem('tkvl');

  // Validar si jwt en el local storage es valido
  if (jwtdatalocal === "1" || jwtdatalocal === undefined) {
    return <Navigate to="/Login" />;
  } else if (jwtdatalocal !== "1" && tkvl === "123") {
    return children ? children : <Outlet />;
  } else if (jwtdatalocal !== "1" && tkvl === "validar") {
    if (tkvl === "validar") {
      navigate("/validar/:token");
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
