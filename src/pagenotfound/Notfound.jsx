import React from "react";
import paginanocontrada from "../assets/paginanocontrada.jpg";

function Notfound() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <img className=" p-4 border-4 border-none" src={paginanocontrada} />
        </div>
      </div>
    </>
  );
}

export default Notfound;
