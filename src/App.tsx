import React from "react";
import Galeria from "./components/Galeria";
import anaFoto from "../public/images/ana.jpg";
import luisFoto from "../public/images/luis.jpg";
import marioFoto from "../public/images/mario.jpg";

const App: React.FC = () => {
    const personas = [
        {
            nombre: "Ana",
            edad: 25,
            foto: anaFoto,
            descripcion: "Estudiante de React.",
        },
        {
            nombre: "Luis",
            edad: 30,
            foto: luisFoto,
            descripcion: "Desarrollador Frontend.",
        },
        {
            nombre: "Mario",
            edad: 28,
            foto: marioFoto,
            descripcion: "Diseñador UX/UI.",
        },
    ];

    return (
        <div>
            <header className="bg-primary text-white text-center py-4">
                <h1>Galería de Personas</h1>
            </header>
            <Galeria personas={personas} />
        </div>
    );
};

export default App;
