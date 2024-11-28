import React, { useState } from "react";

const SectionTwo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="py-10  bg-red-500 mt-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mt-8 md:mt-0 md:mr-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Bienvenido a Healthy Mind!</h1>
                    <p className="text-lg md:text-xl mb-4">
                        Descubre cómo podemos ayudarte a mejorar tu bienestar
                    </p>
                    <button
                        onClick={openModal}
                        className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md"
                    >
                        Ver video
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://wp.uaslp.mx/sinergia/wp-content/uploads/sites/4/2023/10/Salud-mental.jpg"
                        alt="Ceviche peruano"
                        className="w-72 h-64 md:w-96 md:h-80 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Modal que contiene el video de YouTube */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-4xl relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-black text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <div className="flex justify-center">
                            <iframe
                                width="800"
                                height="450"
                                src="https://www.youtube.com/embed/3p-5Qe0rDzk"
                                title="Video YouTube"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionTwo;
