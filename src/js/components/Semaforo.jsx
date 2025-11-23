import React, { useState } from "react";

const Semaforo = () => {
    //    variable setter    valor inicial (cualquier valor)
    const [color, setColor] = useState("red");
    // Estoy agregando el Hook useState para el boton purpura. El useState es una SUPER VARIABLE
    const [mostrarPurpura, setMostrarPurpura] = useState(false);

    // Creamos una funcion flecha que nos permite alternar los colores al darle click al boton.
    const arternarLuz = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else if (color === "green") setColor("purple");
        else setColor("red");
    };


    return (
        // Los "id" nos permiten crear estilos en el css para poder crear el cuerpo del semaforo
        <div id="semaforo-agrupado">
            <div id="trafficTop"></div>
            <div id="container">
                <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " selected" : "")}></div>
                <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " selected" : "")}></div>
                <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " selected" : "")}></div>
            </div>

            {mostrarPurpura ? (<div onClick={() => setColor("purple")} className={"light purple" + (color === "purple" ? " selected" : "")}></div>)
                : null
            }
            <button className="btn btn-outline-secondary mt-5" onClick={() => setColor(null)}>Sin luz</button>            
            <button className="btn btn-outline-secondary mt-3" onClick={() => setMostrarPurpura(true)}>Agregar purpura</button>
            <button className="btn btn-outline-secondary mt-3" onClick={arternarLuz}>Alterna luz</button>
        </div>
    );
};

export default Semaforo