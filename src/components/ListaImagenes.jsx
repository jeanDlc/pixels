import React, {Fragment} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

const ListaImagenes = ({lista, busqueda ,guardarPaginacion,paginacion}) => {
    if(lista.length===0) return null;    
    return ( 
        <Fragment>            
            <div className="container mt-3">
                <h2 className="text-center text-primary mb-3">
                    Pág N° {paginacion}. Resultados Para <span className="text-uppercase"> "{busqueda}"</span>
                </h2>
                <Paginacion 
                    guardarPaginacion={guardarPaginacion}
                    paginacion={paginacion}
                />
                <div className="row">
                    {lista.map(imagen=>(
                        <Imagen key={imagen.id} imagen={imagen}/>
                    ))}
                </div>
            </div>
            <Paginacion 
                guardarPaginacion={guardarPaginacion}
                paginacion={paginacion}
            />
        </Fragment>
     );
}
 
export default ListaImagenes;