import React, { useState } from "react";

const Semaforo = () => {
    //    variable setter    valor inicial (cualquier valor)
    const [rojo, setRojo] = useState('Rojo')
    const [amarillo, setAmarillo] = useState('Amarillo')
    const [verde, setVerde] = useState('Verde')
    
    
 return (
    <div className="container mt-4">
        <h1 className="text-primary">Semáforo</h1> 

    </div>




 )

}





export default Semaforo