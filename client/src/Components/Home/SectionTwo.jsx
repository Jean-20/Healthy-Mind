import React from "react";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
    const navigate = useNavigate();
    const irmenu = () => {
        navigate("/sedes");
    };

    return (
        <div className="py-14 bg-emerald-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between m-8">
                <div className="flex flex-col items-center md:items-start w-[1000px]">
                    <img
                        src="https://www.unicef.org/mexico/sites/unicef.org.mexico/files/styles/hero_desktop/public/Mental%20Health%20%28Facebook%20ad%29%20%281%29.jpg.webp?itok=rmflvCkS" alt="Frapuccino"
                        className="w-72 h-64 md:w-96 md:h-80 rounded-lg shadow-lg"
                    />
                </div>

                <div className="mt-8 md:mt-0 md:ml-12 text-white text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Sé parte del cambio con HealthyMind!</h1>
                    <p className="text-lg md:text-xl mb-4 text-white">
                        Amplía tu impacto como profesional de la salud mental con HEALTHYMIND, una plataforma innovadora que te permite brindar terapias personalizadas y acceder a herramientas avanzadas para el monitoreo del progreso de tus pacientes, todo desde un solo lugar.
                    </p>
                    <button
                        onClick={irmenu}
                        className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md">
                        Unete ya!
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SectionOne;
