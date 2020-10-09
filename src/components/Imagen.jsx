import React from 'react';
import styled from '@emotion/styled';
/**styled componentes************************************************** */
const Parrafo=styled.p`
    font-size: 1.3rem;
    text-align:center;  
    margin-bottom: 0.5rem;  
`;
const Boton=styled.a`
    font-size: 1.3rem;
    transition: all .3s ease-out;
    &:hover{
        transform: scale(1.05);
    }
`;
const ContenedorImagen=styled.div`
    @media(min-width: 720px){
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
/**componentes******************************************************** */
const Imagen = ({imagen}) => {
    
    const {pageURL, user, likes, views, largeImageURL}=imagen;    
    return ( 
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="p-3 border rounded">
                <ContenedorImagen>
                    <img 
                        src={largeImageURL}
                        alt="Img not found"
                        className="mw-100 mb-2"    
                    />
                </ContenedorImagen>
                <Parrafo>
                    <i className="far fa-thumbs-up text-info"></i> Likes: {likes}
                </Parrafo>
                <Parrafo>
                    <i className="fas fa-eye"></i> Vistas: {views}
                </Parrafo>
                <Parrafo>
                    <i className="fas fa-user text-success"></i> : {user}
                </Parrafo>
                <Boton href={pageURL} 
                    target="_blank" 
                    className="btn btn-block btn-primary mt-3"
                >Ver Imagen</Boton>
            </div>
        </div>
     );
}
 
export default Imagen;