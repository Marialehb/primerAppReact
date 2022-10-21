// import React from 'react';
// import {createRoot} from 'react-dom/client';


//     function App () {
//     // document.createElement...
//     return (<h1>Hola Mundo!!!</h1>);
// }

// ReactDOM.createRoot( document.getElementById('root') ).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

import React from "react";
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
import FirstAPP from "./FirstApp";
// import HelloWorldApp from "./HelloWorldApp";

import "./styles.css";

 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        
        {/* <HelloWorldApp /> */}
        <FirstAPP title="Hola soy Ale" subTitle={123}/>

    </React.StrictMode>
);

