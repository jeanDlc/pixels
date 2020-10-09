import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListaImagenes from './components/ListaImagenes';


function App() {
  const [busqueda, guardarBusqueda]=useState('general');
  const [lista, guardarLista]=useState([]);
  const [paginacion, guardarPaginacion]=useState(1);
  //búsqueda
  useEffect(()=>{
    if(busqueda==='') return;
    const consultarApi=async ()=>{
      const apiKey='18641959-67103dd90e4e1d7a10ed64389';
      const url=`https://pixabay.com/api/?q=${busqueda}&key=${apiKey}&page=${paginacion}`;
      const resultado=await fetch(url);
      const imagenes=await resultado.json();
      guardarLista(imagenes.hits);
      
    }
    consultarApi();
  }, [busqueda, paginacion]);

  return (
    <Fragment>
        <Formulario
          guardarBusqueda={guardarBusqueda}
          guardarPaginacion={guardarPaginacion}
        />
        
        <ListaImagenes 
          lista={lista} 
          busqueda={busqueda} 
          guardarPaginacion={guardarPaginacion}
          paginacion={paginacion}
        />  
        
        
    </Fragment>
    
  );
}

export default App;
