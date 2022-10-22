
// import PropTypes from "prop-types";

import { useState } from "react";



export const CounterApp = ({value}) => {

 const [counter ,setCounter] = useState(value);

const handleAdd = ()=> setCounter (counter + 1);
   // setCounter ( (c)=> c + 1);
const restar = ()=> setCounter (counter -1);
const reset = () => setCounter (value);

 

     return (
    <>
        <h1>CounterApp</h1>
         <h2> {counter}</h2> 

      <button onClick={ handleAdd }>+1</button> 
      <button onClick={ restar }>-1</button> 
      <button onClick={reset}>Reset</button> 
        
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

