import React, {useState, useEffect} from 'react'

function fetchData(Api){

    const [state, setState] = useState([]);

    const getData = async ()=>{
        const data = await fetch(Api);
        const res = await data.json();
        setState(res.response[0].data);
    }

    useEffect(()=>{
        try{
            getData();
        }catch(e){
            console.log('hubo un problema con la conexion del servidor', e);
        }
    },[])

    return [ state, setState]
}

export default fetchData;