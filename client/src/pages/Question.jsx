import { useState } from "react";

const Questions = () => {
    // Estado para rastrear qué acordeón está abierto
    const [openIndex, setOpenIndex] = useState(null);

    // Alternar la apertura/cierre de un acordeón
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="preguntas"
            className="py-16 bg-[#F5E9E2] mt-20"
        >
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Contenido del texto */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-red-500">
                            PREGUNTAS FRECUENTES
                        </h1>
                        <p className="text-gray-700 mt-4">
                            Aquí tienes respuestas a las preguntas más comunes sobre nuestra
                            plataforma. Encuentra información esencial de manera rápida y
                            clara.
                        </p>
                    </div>

                    {/* Acordeón */}
                    <div className="bg-[#FF5F5F] rounded-lg shadow-lg overflow-hidden">
                        {accordionData.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-none">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left px-6 py-4 text-white font-medium flex justify-between items-center hover:bg-[#FF7575] transition-colors"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`accordion-content-${index}`}
                                >
                                    {item.question}
                                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div
                                        id={`accordion-content-${index}`}
                                        className="px-6 py-4 text-white transition-all"
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Imagen */}
                <div className="w-full lg:w-1/2 px-4 flex justify-center">
                    <img
                        src="https://www.institutohes.com/wp-content/uploads/estudiar-psicologia-clinica.jpg"
                        alt="Preguntas frecuentes"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};

// Datos del acordeón
const accordionData = [
    {
        question: "¿Qué tipo de información sobre salud mental puedo encontrar en la plataforma?",
        answer:
            "En nuestra plataforma, puedes encontrar recursos sobre diversas temáticas de salud mental, incluyendo estrategias de bienestar emocional, manejo del estrés, y guías para la atención de problemas psicológicos comunes.",
    },
    {
        question: "¿Dónde puedo encontrar las sedes disponibles?",
        answer:
            "Puedes acceder a la sección de 'Sedes' en nuestra plataforma, donde encontrarás un listado con la ubicación, horarios de atención y servicios disponibles en cada una de ellas.",
    },
    {
        question: "¿Es gratuita la información que se proporciona?",
        answer:
            "Sí, toda la información y recursos sobre salud mental en nuestra plataforma son completamente gratuitos para el usuario.",
    },
    {
        question: "¿Cómo puedo contactar si tengo más preguntas?",
        answer:
            "Si tienes más preguntas, puedes contactarnos a través del correo electrónico info@healthymind.com. También estamos disponibles en nuestras redes sociales para responder a tus inquietudes.",
    },
];

export default Questions;