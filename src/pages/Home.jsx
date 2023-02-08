import React from 'react';



//container
import Perfil from '../container/Perfil';
import Pasarela from '../container/Pasarela';

import Form from '../components/Form';
import ProfyleTipe from '../components/ProfileType/ProfileType';



//comentario:develop-barera

function Home() {
    return (
        <>
        {/*Esto es un comtario HEAD */}
        <div className="">
          <Perfil />
          {/*Galeria y pasarela de pagos */}
          <Pasarela />
          {/*Form*/}
          <Form />
          <ProfyleTipe />
          
        </div>
        </>
    );
  }
  export default Home;