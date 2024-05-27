import { List, ListItem, Button } from "@material-tailwind/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import "./css/sidebar.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ token }) => {
  const closeSession = () => {
    localStorage.removeItem("jwtdata");
    window.location.href = "/Login";
  };
  const decoded = jwtDecode(token);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navega a la vista anterior
  };
  return (
    <section className="w-full h-screen bg-[#2c2c2c] m-0">
      <div className="flex justify-center h-[25%] w-full" id="hdsb"></div>
      <div className="titulo h-[10%] flex items-center justify-center">
        <h1 className="uppercase text-[65px] mt-5 tracking-tight text-center font-mono font-semibold text-[#ffffff]">
          Lecto<span className=" text-[#C02B49] px-1">YA </span>
        </h1>
        {/* <h1 className=" text-3xl text-center font-normal text-white  flex flex-col items-center">
          Bienvenido<span className="mt-2">{decoded.nombre} </span> 
        </h1> */}
      </div>

      <div className="datos h-[45%] w-full flex justify-center px-2 items-start ml-0 mt-0">
        <List className="text-white grid py-4 w-full text-[20px] mt-0 pt-0">
          <ListItem className="py-6 flex items-center">
            <PersonOutlineRoundedIcon className="mr-4 mt-1" />
            {decoded.nombre}{" "}
          </ListItem>
          <ListItem className="py-6 flex items-start">
            <PeopleAltOutlinedIcon className="mr-4 mt-1" />
            {decoded.apaterno}
          </ListItem>

          <ListItem className="py-6 flex items-center">
            <CallOutlinedIcon className="mr-4 mt-1" />
            {decoded.numero}
          </ListItem>
          <ListItem className="py-6 flex items-start">
            <MarkEmailUnreadOutlinedIcon className="mr-4 mt-1" />
            {decoded.correo}{" "}
          </ListItem>
        </List>
      </div>

      <div className="btn h-[20%] flex flex-col gap-6 justify-center items-center relative bottom-0">
      <button 
      className=" hover:bg-[#676767] text-white font-semibold w-4/5 h-14 border-[1px] rounded-xl shadow mb-5 border-white"
      variant="outlined"
      onClick={handleGoBack}>
      Regresar
    </button>
        <Button
          className=" hover:bg-[#676767] text-white font-semibold w-4/5 h-14 border-[1] rounded-xl shadow mb-5"
          variant="outlined"
          onClick={closeSession}
        >
          Cerrar sesión
        </Button>
      </div>
    </section>
  );
};
