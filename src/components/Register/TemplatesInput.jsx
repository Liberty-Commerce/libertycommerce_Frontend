import React from 'react'

function TemplatesInputText({t_type, t_placeholder, t_name}, t_class) {
    return (
        <input 
            type={t_type} 
            name={t_name} 
            placeholder={t_placeholder} 
            className={t_class + 'border-none outline-none'}
        />
    )
}

function TemplateInputExpecialPais({t_name,t_img,children} ){
    return(
        <div>
            <select name={t_name} className='text-black w-80'>
                <img src={t_img} alt={t_img} />
                {children}
            </select>
        </div>
    )
}

export {TemplatesInputText, TemplateInputExpecialPais}


