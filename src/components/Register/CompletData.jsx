import React from 'react'
import TemplateDataRegister from './TemplateDataRegister'
import { TemplateInputExpecial, TemplatesInputText } from './TemplatesInput'

import {BsBank} from 'react-icons/bs'

function CompletData() {
    return (
        <div>
            <TemplateDataRegister text = 'Complete los datos'>
                <TemplatesInputText t_type='email' t_name='email' t_placeholder='Correo electronico'/>
                <TemplatesInputText t_type='text' t_name='name' t_placeholder='Nombre de Usuario'/>
                <TemplatesInputText t_type='Password' t_name='password' t_placeholder='Contraseña'/>
                <TemplatesInputText t_type='Password' t_name='passwordRepet' t_placeholder='Repetir Contraseña'/>
            </TemplateDataRegister>
        </div>
    )
}

export default CompletData
