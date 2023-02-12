import React, { useState } from "react";

function ProfyleTipe() {

    const bgWhite = 'flex-initial border text-center bg-white rounded-lg text-xs text-black mr-2 mt-2 px-4 cursor-pointer'

    const bgOrange = 'flex-initial border text-center bg-teal-600 rounded-lg text-xs text-black mr-2 mt-2 pl-4 pr-4 cursor-pointer'

    const [ selected, setSelected ] = useState('Admin');

    const handleClick = (type) => {
        setSelected(type);
    }
  
  return (
    <div className="flex mt-2">
      <div
        className={ selected === 'Admin' ? bgOrange : bgWhite }
        onClick = { () => handleClick('Admin') }
      >
        Admin
      </div>
      <div
        className={ selected === 'Speaker' ? bgOrange : bgWhite }
        onClick = { () => handleClick('Speaker') }
      >
        Speaker
      </div>
      <div
        className={ selected === 'AMA' ? bgOrange : bgWhite }
        onClick = { () => handleClick('AMA') }
      >
        AMA
      </div>
    </div>
  );
}

export default ProfyleTipe;
