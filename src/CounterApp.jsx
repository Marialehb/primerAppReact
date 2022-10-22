
// import PropTypes from "prop-types";

import { useState } from "react";


export const CounterApp = ({value}) => {

 const [valor ,setValor] = useState(2);


 
 const cambiarValor =()=>{
    setValor(valor + 1);
 }

 const restar =()=> {
    setValor(valor - 2);
 }

    return (
    <>
        <h1>CounterApppppp</h1>
        <h2>El valor es {valor}</h2> 
        {/* <div className="clasee">{valor}</div> */}
        <button onClick={cambiarValor}>boton para cambiar a 8</button>
        <button onClick={restar}>Restar 2</button>
        
    </>
    );
}
















// export default CounterApp; se importa sin desestructurar

// CounterApp.propTypes = {
    
//     // CounterApp: PropTypes.string.isRequired,
//     value: PropTypes.number.isRequired,
// }

// CounterApp.defaultProps = {
//     // CounterApp: 'No hay contenedor',
//     value: 0,
// }

