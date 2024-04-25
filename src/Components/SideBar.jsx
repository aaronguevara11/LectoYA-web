import { List, ListItem } from "@material-tailwind/react";

export const SideBar = () => {
  return (
    <section className="w-full h-max bg-blue-950">
      <div className="titulo h-2/12">
        <h1 className="text-[48px] text-center font-semibold text-white mt-4">
          LectoYA
        </h1>
      </div>

      <div className="datos grid h-4/5 ml-8 mt-8">
        <List className="text-white grid py-4 text-[20px]">
          <ListItem className="py-6">Nombre completo</ListItem>
          <ListItem className="py-6">Apellido paterno</ListItem>
          <ListItem className="py-6">Apellido materno</ListItem>
          <ListItem className="py-6">Correo</ListItem>
          <ListItem className="py-6">Dni</ListItem>
          <ListItem className="py-6">Telefono</ListItem>
        </List>
      </div>

      <div className="btn flex justify-center items-end">
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold w-4/5 h-14 border border-none rounded-xl shadow">
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};