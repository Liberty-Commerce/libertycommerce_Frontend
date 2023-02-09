import React from 'react';



//container
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
          {/*Form*/}
          <Form />
          <ProfyleTipe />
        </div>
        </>
    );
  }
  export default Home;