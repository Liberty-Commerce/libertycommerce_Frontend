import React from 'react'
import TemplateDataRegister from '../../components/Register/TemplateDataRegister'
import { TemplateInputExpecialPais, TemplatesInputText } from '../../components/Register/TemplatesInput'
import {AiFillFlag} from 'react-icons/ai'

function LogisticaRegister() {
    return (
        <div>
            <TemplateDataRegister text = 'Logistica de registro' t_class='flex'>
                <AiFillFlag size={'25px'} style={{marginRight : '10px'}}/>
                <TemplateInputExpecialPais t_name='Pais'>
                    <option value="1">Colombia</option>
                    <option value="2">Argentina</option>
                    <option value="3">Ecuador</option>
                </TemplateInputExpecialPais>
            </TemplateDataRegister>
        </div>
    )
}

export default LogisticaRegister
