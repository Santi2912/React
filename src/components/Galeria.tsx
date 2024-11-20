import React from "react";
import Persona from "./Persona";

interface PersonaData {
    nombre: string;
    edad: number;
    foto: string;
    descripcion: string;
}

interface GaleriaProps {
    personas: PersonaData[];
}

const Galeria: React.FC<GaleriaProps> = ({ personas }) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {personas.map((persona, index) => (
                    <div className="col-md-4 d-flex justify-content-center" key={index}>
                        <Persona
                            nombre={persona.nombre}
                            edad={persona.edad}
                            foto={persona.foto}
                            descripcion={persona.descripcion}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;
