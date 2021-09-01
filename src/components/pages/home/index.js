import React from 'react';
import Button from '../../atoms/button';

function Home() {
    const handleButtonAccept=()=>{
        alert("Aceptado!!!");
    }
    const handleButtonCancel=()=>{
        alert("Cancelado!!!");
    }
    return (
        <div>
            <h1>Hola mundo!</h1>
            <Button variant="primary" handleClick={handleButtonAccept}>Aceptar</Button>
            <Button variant="danger" handleClick={handleButtonCancel}>Cancelar</Button>
        </div>
    )
}

export default Home
