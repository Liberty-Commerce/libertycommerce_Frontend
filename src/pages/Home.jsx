import React from 'react';

import Perfil from '../container/Perfil';

import Form from '../components/Form';
import ProfyleTipe from '../components/ProfileType/ProfileType';

//comentario:develop-barera

function Home() {
    return (
        <>
        {/*Esto es un comtario HEAD */}
        <div className="">
          <Perfil />
          <Form />
          <ProfyleTipe />
          {/*Esto es un comentario develop-barera */}
        </div>
        </>
    );
  }
  export default Home;