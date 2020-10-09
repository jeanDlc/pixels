import React from 'react';
import styled from '@emotion/styled';
/**styled components*********************************************************** */
const Div=styled.div`
    display: grid;
    max-width:600px;
    margin: 1rem auto;
    gap: 1rem;
    @media(min-width: 920px){
        grid-template-columns: repeat(2,1fr);
    }
`;
const Boton=styled.button`
    transition: all .3s ease-out;
    font-size: 1.5rem;
    border-color:#333;
    &:hover{
        transform: scale(1.05);
        transform: rotate(3deg);
    }
`;
/**component*********************************************************** */
const Paginacion = ({guardarPaginacion, paginacion}) => {
    const cambiarPagina=e=>{
        
        if(e.target.id==='btnAnterior'){
            guardarPaginacion(paginacion-1);
        }else {
            guardarPaginacion(paginacion+1);
        }        
    }
    let habilitado= paginacion<=1? true : false;
    return ( 
        <Div >
            <Boton className="btn btn-light mr-3 anterior" disabled={habilitado}
                id="btnAnterior"
                onClick={cambiarPagina}
            >
                <i className="fas fa-arrow-circle-left"></i> ..Anterior Pág.
            </Boton>
                
            <Boton className="btn btn-light siguiente" id="btnSiguiente"
                onClick={cambiarPagina}
            >
                Siguiente Pág.. <i className="fas fa-arrow-circle-right"></i>
            </Boton>
        </Div>
     );
}
 
export default Paginacion;