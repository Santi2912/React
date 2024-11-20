import React from "react";

interface PersonaProps {
    nombre: string;
    edad: number;
    foto: string;
    descripcion: string;
}

const Persona: React.FC<PersonaProps> = ({
                                             nombre,
                                             edad,
                                             foto,
                                             descripcion,
                                         }) => {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img src={foto} className="card-img-top" alt={nombre} />
            <div className="card-body text-center">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
};

export default Persona;
