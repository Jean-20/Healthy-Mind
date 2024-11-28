import React, { useState } from "react";

const Sedes = () => {
    // Estado para los modales de cada sede
    const [activeModal, setActiveModal] = useState(null);

    // Función para abrir y cerrar el modal
    const toggleModal = (modalId) => {
        if (activeModal === modalId) {
            setActiveModal(null); // Cierra el modal si ya está abierto
        } else {
            setActiveModal(modalId); // Abre el modal correspondiente
        }
    };

    return (
        <div className="container mx-auto p-6">
            {/* Título "Sedes:" en la parte superior */}
            <h1 className="text-center text-3xl font-bold mb-6 mt-20" style={{ color: '#FF5F5F' }}>
                Sedes:
            </h1>

            {/* Tarjetas de sedes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card
                    image="https://cdn.www.gob.pe/uploads/document/file/5224061/2.jpeg"
                    title="Hospital Víctor Larco Herrera"
                    phone="(01) 2615303"
                    address="Av. del Ejército 600, Magdalena del Mar 15076"
                    googleMapsURL="https://www.google.com/maps?q=Av.+del+Ej%C3%A9rcito+600,+Magdalena+del+Mar+15076"
                    modalId="modal-1"
                    toggleModal={toggleModal}
                />
                <Card
                    image="https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LH2T7IBDCJHZ7NEAM33KPC6NAI.jpg"
                    title="Hospital Hermilio Valdizán"
                    phone="(01) 7481990"
                    address="Ctra. Central 1315, Santa Anita 15011"
                    googleMapsURL="https://www.google.com/maps?q=Ctra.+Central+1315,+Santa+Anita+15011"
                    modalId="modal-2"
                    toggleModal={toggleModal}
                />
                <Card
                    image="https://cdn.www.gob.pe/uploads/document/file/5904040/standard_909837-foto-insm.jpeg"
                    title="Instituto Nacional de Salud Mental"
                    phone="(01) 7485600"
                    address="Av. Eloy Espinoza Saldaña 709, San Martín de Porres 15102"
                    googleMapsURL="https://www.google.com/maps?q=Av.+Eloy+Espinoza+Saldaña+709,+San+Martín+de+Porres+15102"
                    modalId="modal-3"
                    toggleModal={toggleModal}
                />
                <Card
                    image="https://www.infobae.com/new-resizer/9yKCgRIBAxI56tLKIfPJTWgR3Jg=/arc-anglerfish-arc2-prod-infobae/public/JCEQ5R4CLVGM3HRWDSKPG5ZWDI.png"
                    title="Hospital de Emergencia Casimiro Ulloa"
                    phone="(01) 2040900"
                    address="Av. República de Panamá 6355-6375, Miraflores 15047"
                    googleMapsURL="https://www.google.com/maps?q=Av.+República+de+Panamá+6355-6375,+Miraflores+15047"
                    modalId="modal-4"
                    toggleModal={toggleModal}
                />
                <Card
                    image="https://cdn.www.gob.pe/uploads/document/file/4817240/IMG_0546.jpeg"
                    title="Hospital María Auxiliadora"
                    phone="(01) 2171818"
                    address="Av. Miguel Iglesias 968, San Juan de Miraflores 15801"
                    googleMapsURL="https://www.google.com/maps?q=Av.+Miguel+Iglesias+968,+San+Juan+de+Miraflores+15801"
                    modalId="modal-5"
                    toggleModal={toggleModal}
                />
                <Card
                    image="https://dirislimacentro.gob.pe/wp-content/uploads/Lima-Centro-Hospital-Santa-Rosa-fortalece-12-servicios-remodelados-para-mejorar-la-demanda-de-atenciones_Nota-de-prensa_-02.jpg"
                    title="Hospital Santa Rosa"
                    phone="(01) 6158200"
                    address="Av. Simón Bolívar cdra. 8, Pueblo Libre 15084"
                    googleMapsURL="https://www.google.com/maps?q=Av.+Simón+Bolívar+cdra.+8,+Pueblo+Libre+15084"
                    modalId="modal-6"
                    toggleModal={toggleModal}
                />
            </div>

            {/* Modal a pantalla completa para cada sede */}
            {activeModal === "modal-1" && (
                <Modal
                    title="Hospital Víctor Larco Herrera"
                    content={
                        <>
                            <p>Información detallada del Hospital Víctor Larco Herrera.</p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4 text-white">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/place/Hospital+Minsa+-+Víctor+Larco+Herrera/@-12.0980252,-77.0655463,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMeZeN8lBLqaF4KHX2dOL59qFbZHFz8mMBYYc0!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMeZeN8lBLqaF4KHX2dOL59qFbZHFz8mMBYYc0%3Dw203-h122-k-no!7i1600!8i963!4m7!3m6!1s0x9105c9afc96756a9:0x7943f552aa5606bb!8m2!3d-12.0979034!4d-77.0662705!10e5!16s%2Fg%2F1q675qgxf?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                                    title="Google Maps D'Peñas"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps?q=Av.+del+Ej%C3%A9rcito+600,+Magdalena+del+Mar+15076"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}
            {/* Repetir el patrón para otras sedes */}
        </div>
    );
};

// Componente de tarjeta
const Card = ({ image, title, phone, address, googleMapsURL, modalId, toggleModal }) => {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {/* Imagen */}
            <div className="flex justify-center">
                <img src={image} alt={title} className="w-[700px] h-[250px]" />
            </div>

            {/* Título */}
            <h2 className="text-center text-lg font-semibold mt-2">{title}</h2>

            {/* Contenido */}
            <div className="mt-4 text-center">
                <p className="font-bold">Teléfono:</p>
                <p className="text-gray-600">{phone}</p>
                <p className="font-bold mt-2">Dirección:</p>
                <p className="text-gray-600">{address}</p>
            </div>

            {/* Botón */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => toggleModal(modalId)}
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                    Visitar sitio
                </button>
            </div>
        </div>
    );
};

// Componente Modal
const Modal = ({ title, content, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-4/5 md:w-1/2 rounded-lg">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div>{content}</div>
                <button
                    onClick={closeModal}
                    className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Sedes;
