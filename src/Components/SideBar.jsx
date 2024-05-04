import { List, ListItem, Button } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PersonOutlineRoundedIcon  from '@mui/icons-material/PersonOutlineRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import './css/sidebar.css'

export const SideBar = ({token}) => {
  const navigate = useNavigate();
  const closeSession=()=>{
    localStorage.removeItem("jwtdata");
    navigate('/LoginDocente')
  }
  const decoded = jwtDecode(token);
  console.log(decoded)

  return (
    <section className="w-full h-max bg-black m-0">
      <div className="flex justify-center h-[200px] w-full" id="hdsb">
      </div>
      <div className="titulo h-[91px] flex items-center justify-center">
        <h1 className="uppercase text-[65px] mt-5 tracking-tight text-center font-mono font-semibold text-[#ffffff]">
          Lecto<span className=" text-[#C02B49] px-1">YA </span> 
        </h1>
        {/* <h1 className=" text-3xl text-center font-normal text-white  flex flex-col items-center">
          Bienvenido<span className="mt-2">{decoded.nombre} </span> 
        </h1> */}
      </div>


      <div className="datos h-[526px] w-full flex justify-center px-2 items-start ml-0 mt-0">
        <List className="text-white grid py-4 w-full text-[20px] mt-0 pt-0">
          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Nombreeeeeeeeeee</ListItem>
          <ListItem className="py-6 flex items-start"><MenuBookRoundedIcon className="mr-4 mt-1"/> Apellido</ListItem>

          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Nombreeeeeeeeeee</ListItem>
          <ListItem className="py-6 flex items-start"><MenuBookRoundedIcon className="mr-4 mt-1"/> Apellido</ListItem>


          {/* <ListItem className="py-6 flex flex-col items-start">Apellido Materno: <span className="mt-2">{decoded.amaterno} </span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Correo: <span className="mt-2">{decoded.correo}</span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Dni: <span className="mt-2">{decoded.dni}</span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Numero: <span className="mt-2">{decoded.numero}</span></ListItem> */}
        </List>
      </div>


      <div className="btn h-[128px] flex justify-center items-center relative bottom-0">
        <Button className=" hover:bg-blue-950 text-white font-semibold w-4/5 h-14 border-[1] rounded-xl shadow" variant="outlined" onClick={closeSession}>
          Cerrar sesión
        </Button>
      </div>
    </section>
  );
};
