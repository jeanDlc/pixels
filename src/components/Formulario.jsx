import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
/**styled components*************************************************** */
const MiForm=styled.form`
    max-width: 500px;
    width: 100%;
    margin: 1rem auto;  
`;
const Input=styled.input`
    font-size:1.3rem;
`;

/**componentes********************************************************* */
const Formulario = ({guardarBusqueda, guardarPaginacion}) => {
    
    const [categoria, guardarCategoria]=useState(''); 
    const [error, mostrarError]=useState(false);
    //submit
    const handleSubmit=e=>{
        e.preventDefault();
        if(categoria.trim()===''){
            mostrarError(true);
            return;
        }
        guardarPaginacion(1);
        mostrarError(false);
        //llevarlo a componente principal para hacer la búsqueda de imágenes
        guardarBusqueda(categoria.trim());
        //limpiar formulario
        guardarCategoria('');
    }
    
    return ( 
        <div className="p-3 bg-primary text-center">
            <h1 className="text-light mb-0 display-3">
                Pixels <i className="fas fa-image"></i>                
            </h1>
            <small className="text-light">Tu galería de imágenes favorita</small>
            <MiForm onSubmit={handleSubmit}>                                 
                <div className="form-group">                    
                    <Input type="text"                     
                        placeholder="¿Qué buscas?"
                        value={categoria}
                        className="form-control"
                        onChange={e=>guardarCategoria(e.target.value)}
                    />                    
                </div>              
                <button 
                    type="submit" 
                    className="btn btn-dark btn-block border"                      
                >Buscar</button>
                {error? <Error mensaje="Escribe algo que te interese!!"/> : null}
            </MiForm>
            
        </div>
     );
}
 
export default Formulario;