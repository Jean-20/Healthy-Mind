import React from "react";

const MissionAndVision = () => {
    return (
        <div className="py-10 bg-cyan-400">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Misión y Visión</h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="w-72 h-72 bg-purple-600 text-white flex flex-col items-center justify-center rounded-full shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                        <p className="text-lg">
                            Promover la importancia del bienestar mental a través de la concienciación, educación y acceso a recursos de apoyo.                        </p>
                    </div>

                    <div className="w-72 h-72 bg-purple-600 text-white flex flex-col items-center justify-center rounded-full shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
                        <p className="text-lg">
                            Ser una plataforma líder en el apoyo a la salud mental, reconocida por proporcionar información accesible y sedes confiables.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;
