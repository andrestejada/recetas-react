import React , {createContext, useEffect , useState } from 'react';
import axios from 'axios'


//crear un context

export const CategoriasContext =  createContext();

//provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props)=>{
    //crear el state del context

    const [categorias,guardarCategorias]= useState([])

    useEffect(()=>{
        const obtenerCategoria = async()=>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const respuesta = await axios.get(url)

            guardarCategorias(respuesta.data.drinks)

            
        }
        obtenerCategoria()
    
    },[])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
                }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}


export default CategoriasProvider;
