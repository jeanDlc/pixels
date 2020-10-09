import React from 'react';
const Error = ({mensaje}) => {
    return ( 
        <div className="alert text-light bg-danger mt-3 mb-2">
            {mensaje}
        </div>
     );
}
 
export default Error;