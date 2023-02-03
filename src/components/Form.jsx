import React, {useState} from 'react'

function Form() {

    const inicialState = {
        textName : '',
        password : ''
    }

    const [user, setUser] = useState(inicialState);

    const getDataInput = (e) =>{
        const {name , value} = e.target;
        setUser({...user, [name]:value});
    }

    const handleForm = (e) => {
        e.preventDefault;
        const userName = user.textName;
        const userPassword = user.password;

        console.log(userName, userPassword);
    }


    return (
        <div className='p-5'>
            <h2>Formulario</h2>
            <form action="" onSubmit={handleForm}>
                <input type="text" placeholder='Nombre' name='textName' className='mr-3' value = {user.textName} onChange={getDataInput}/> 
                <input type="password" placeholder='Contraseña' name='password' className='mr-3' value={user.password} onChange={getDataInput}/>
                <input type="submit" value="Enviar" className='text-white' />
            </form>
        </div>
    )
}

export default Form

