import React, { useState } from "react";

const Semaforo = () => {
    //    variable setter    valor inicial (cualquier valor)
    const [color, setColor] = useState("red");


    return (
        <div id="semaforo-agrupado">
            <div id="trafficTop"></div>
            <div id="container">
                <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " selected" : "")}></div>
                <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " selected" : "")}></div>
                <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " selected" : "")}></div>
            </div>
        </div>
    );
};

export default Semaforo