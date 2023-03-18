import React from "react";

function RolRegister() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-96 bg-zinc-700 w-69 rounded-2xl">
        <h2 className="text-center p-4">¿Como quieres Registrarte</h2>
        <div className="flex flex-col ">
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            Usuario Corriente
          </button>
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            Empresa Logistica
          </button>
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            Provedor
          </button>
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            Servicio
          </button>
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            PYME
          </button>
          <button className="py-2 hover:bg-gray-900 hover:text-white bg-slate-300 text-black">
            Empresa
          </button>
        </div>
      </div>
    </div>
  );
}

export default RolRegister;
