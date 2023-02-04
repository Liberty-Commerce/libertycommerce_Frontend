import React from "react";
import person from '../assets/person.jpg'
import SocialMedia from '../components/SocialMedia';

function Perfil(){
    return (
        <>
            <div className="w-100 h-96 p-3 bg-white text-slate-900 flex justify-around">
                {/* img */}
                <div className="w-56 relative left-16 top-12">
                    <div className="relative">
                        <img className="object-cover rounded-full w-96 h-56 absolute" src={person} alt="person" />
                    </div>
                    <div className="bg-emerald-700 w-20 h-20 text-white absolute bottom-28 left-20 p-3" style={{borderRadius : '50%'}}>
                        <h2 className="text-center mt-4">3245</h2>
                    </div>
                </div>
                {/* info */}
                <div className="w-64  ml-32 h-40 mt-24 mr-24">
                    <h2 className="text-3xl font-bold mb-5">Nombre Usuario</h2>
                    <p className="p-1 px-10 text-white bg-teal-500 inline-block rounded-2xl mb-5">Rol</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                {/* medial social */}
                <div>
                    {<SocialMedia/>}
                </div>
            </div>
        </>
    )
}

export default Perfil
