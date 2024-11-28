import React from "react";

const SectionTwo = () => {
    return (
        <div className="py-10 bg-indigo-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mt-8 md:mt-0 md:mr-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Cuida tu salud mental!</h1>
                    <p className="text-lg md:text-xl mb-4">
                        Aprende sobre cómo cuidar tu bienestar emocional y mental con nuestros recursos confiables.
                    </p>
                    <a
                        href="https://www.unicef.org/mexico/cómo-cuidar-tu-salud-mental"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md">
                            Aprende más sobre salud mental
                        </button>
                    </a>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://metodopiecito.com/wp-content/uploads/2023/10/LA-IMPORTANCIA-DE-LA-RELACION-ENTRE-SALUD-MENTAL-Y-SALUD-FISICA.webp"
                        alt="Salud mental"
                        className="w-72 h-64 md:w-96 md:h-80 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
