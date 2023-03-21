import React from 'react'
import TemplateDataRegister from '../../components/Register/TemplateDataRegister'
import { TemplateInputExpecialPais} from '../../components/Register/TemplatesInput'
import { BsBank } from 'react-icons/bs'

function ProvedorRegister() {
    return (
        <div>
            <TemplateDataRegister text='Completa los Datos del Provedor' t_class='flex '>
                <BsBank size={'20px'} style={{marginRight : '20px', marginLeft: '5px'}} />
                <TemplateInputExpecialPais t_name='pais'>
                    <option value="1">Colombia</option>
                    <option value="2">Argentina</option>
                    <option value="3">Ecuador</option>
                </TemplateInputExpecialPais>
            </TemplateDataRegister>
        </div>
    )
}

export default ProvedorRegister
