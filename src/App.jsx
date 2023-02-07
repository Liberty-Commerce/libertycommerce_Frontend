import React from 'react';

import Perfil from './container/Perfil';

import Form from './components/Form';
import ProfyleTipe from './components/ProfileType/ProfileType';
//comentario:develop-barera

function App() {

  return (
    <>
    {/* HEAD */}
    <div className="">
      <Perfil />
      <Form />
      <ProfyleTipe />
      {/* develop-barera */}
    </div>
    </>
  );
}

export default App;
