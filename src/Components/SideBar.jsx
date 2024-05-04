import { List, ListItem } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/images/logosidebar.png"
import PersonOutlineRoundedIcon  from '@mui/icons-material/PersonOutlineRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
export const SideBar = ({token}) => {
  const navigate = useNavigate();
  const closeSession=()=>{
    localStorage.removeItem("jwtdata");
    navigate('/LoginDocente')
  }
  const decoded = jwtDecode(token);
  console.log(decoded)

  return (
    <section className="w-full h-max bg-blue-950">
      <div className="titulo h-2/12 flex items-center flex-col justify-center">
        <img src={logo} alt="LOGO DE LA EMPRESA" className="rounded-[100%] overflow-hidden w-[120px] h-[120px] border-solid border-2 rounded-lg border-slate-950 mt-5 " />
        <h1 className="text-[50px] text-center font-semibold text-[#ffffbf] mt-4">
          LECTO <span className=" text-[#ff0000]">YA </span> 
        </h1>
        {/* <h1 className=" text-3xl text-center font-normal text-white  flex flex-col items-center">
          Bienvenido<span className="mt-2">{decoded.nombre} </span> 
        </h1> */}
      </div>


      <div className="datos grid h-4/5 ml-0 mt-0">
        <List className="text-white grid py-4 text-[20px] mt-0 pt-0">
          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Perfil</ListItem>
          <ListItem className="py-6 flex items-start"><MenuBookRoundedIcon className="mr-4 mt-1"/> Cursos</ListItem>

          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Perfil</ListItem>
          <ListItem className="py-6 flex items-start"><MenuBookRoundedIcon className="mr-4 mt-1"/> Cursos</ListItem>

          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Perfil</ListItem>
          <ListItem className="py-6 flex items-start"><MenuBookRoundedIcon className="mr-4 mt-1"/> Cursos</ListItem>

          <ListItem className="py-6 flex items-center"><PersonOutlineRoundedIcon className="mr-4 mt-1"/> Perfil</ListItem>


          {/* <ListItem className="py-6 flex flex-col items-start">Apellido Materno: <span className="mt-2">{decoded.amaterno} </span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Correo: <span className="mt-2">{decoded.correo}</span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Dni: <span className="mt-2">{decoded.dni}</span></ListItem>
          <ListItem className="py-6 flex flex-col items-start">Numero: <span className="mt-2">{decoded.numero}</span></ListItem> */}
        </List>
      </div>


      <div className="btn flex justify-center items-end relative bottom-0">
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold w-4/5 h-14 border border-none rounded-xl shadow" onClick={closeSession}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};
