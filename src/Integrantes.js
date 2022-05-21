import React from "react";
import './App.css'
export default function Integrantes({equipo}){
    return(
        <>
            {equipo.map((miembro)=>{
                const{id, nombre, fotoURL} =miembro;
                return (
                    <div className="tarjeta" key={id}>
                        <img src={fotoURL} alt={nombre} />
                        <p>{nombre}</p>
                    </div>
                )
            })}
        </>
    )
}