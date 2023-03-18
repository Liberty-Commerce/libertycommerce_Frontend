import React from 'react'

function TemplateDataRegister({text,children, t_class = 'flex flex-col my-2 w-96'}) {
    return (
        <div className='w-96 bg-slate-900 rounded-lg m-2'>
            <h2 className='text-center text-xl mb-2'>{text}</h2>
            <form action="" className={t_class}> 
                {children}
            </form>
        </div>
    )
}

export default TemplateDataRegister
