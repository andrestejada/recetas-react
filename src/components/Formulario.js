import React , {useContext,useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext}  from '../context/RecetasContext'

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext)
    const {buscarRecetas , guardarConsultar} = useContext(RecetasContext)

    const [busqueda,guardaBusqueda]= useState({
        nombre:'',
        categoria:''
    })

    const obtenerDatosReceta = (e)=>{
        guardaBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })

    }
    
    return ( 
        <form 
            className='col-12'
            onSubmit={ e =>{
                e.preventDefault();
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }

            }
        >
            <fieldset className='text-center'>
                <legend>Busca bebida por categoria o por ingrediente</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        type='text'
                        name='nombre'
                        placeholder='busca por ingrediente'
                        className='form-control' 
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className='col-md-4 '>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatosReceta}
                    >
                        <option value=''>--Seleciona Una Categoria--</option>
                       {categorias.map( categoria =>(
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                       ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        value='Buscar Receta'
                        className='btn btn-primary btn-block'
                    /> 
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;