import React, { useState } from "react";

const Sedes = () => {
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (modalId) => {
        if (activeModal === modalId) {
            setActiveModal(null);
        } else {
            setActiveModal(modalId);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-center text-3xl font-bold mb-6 mt-20" style={{ color: '#FF5F5F' }}>
                Sedes:
            </h1>

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

            {/* Modal para cada sede */}
            {activeModal === "modal-1" && (
                <Modal
                    title="Hospital Víctor Larco Herrera"
                    content={
                        <>
                            <p>
                                El Hospital Víctor Larco Herrera brinda servicios especializados en salud mental y
                                tiene como misión atender con excelencia a sus pacientes.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.1221130528024!2d-77.0662705!3d-12.0979034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9afc96756a9%3A0x7943f552aa5606bb!2sHospital%20Minsa%20-%20Víctor%20Larco%20Herrera!5e0!3m2!1ses!2spe!4v1693418768191"
                                    title="Google Maps Hospital Víctor Larco Herrera"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Hospital+Minsa+-+Víctor+Larco+Herrera/@-12.0981957,-77.0656462,870m/data=!3m1!1e3!4m6!3m5!1s0x9105c9afc96756a9:0x7943f552aa5606bb!8m2!3d-12.0979034!4d-77.0662705!16s%2Fg%2F1q675qgxf?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}

            {activeModal === "modal-2" && (
                <Modal
                    title="Hospital Hermilio Valdizán"
                    content={
                        <>
                            <p>
                                El Hospital Hermilio Valdizán es reconocido por su atención integral en salud mental y
                                cuenta con especialistas en diversas áreas. Ofrece servicios para pacientes ambulatorios y
                                hospitalización.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2343199715936!2d-76.9457065!3d-12.0466384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c699c02434eb%3A0x4e207a01877634e1!2sHospital%20Hermilio%20Valdiz%C3%A1n!5e0!3m2!1ses!2spe!4v1693418795673"
                                    title="Google Maps Hospital Hermilio Valdizán"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Hospital+Hermilio+Valdizan/@-12.0468036,-76.9456194,435m/data=!3m1!1e3!4m6!3m5!1s0x9105c699c02434eb:0x4e207a01877634e1!8m2!3d-12.0466384!4d-76.9457065!16s%2Fg%2F11bz0b9xlq?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}

            {activeModal === "modal-3" && (
                <Modal
                    title="Instituto Nacional de Salud Mental 'Honorio Delgado-Hideyo Noguchi'"
                    content={
                        <>
                            <p>
                                El Instituto Nacional de Salud Mental "Honorio Delgado-Hideyo Noguchi" es un centro de atención especializado en
                                salud mental, que brinda servicios médicos y terapéuticos para el tratamiento de diversas condiciones psiquiátricas
                                y psicológicas. Cuenta con un equipo de profesionales altamente capacitados para ofrecer atención integral a sus
                                pacientes.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2343199715936!2d-77.0581019!3d-12.020233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cedff5de225b%3A0x57994041649783d2!2sInstituto%20Nacional%20de%20Salud%20Mental%20%22Honorio%20Delgado-Hideyo%20Noguchi%22!5e0!3m2!1ses!2spe!4v1693418795673"
                                    title="Google Maps Instituto Nacional de Salud Mental"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Instituto+Nacional+de+Salud+Mental+%22Honorio+Delgado-Hideyo+Noguchi%22/@-12.020233,-77.0581019,870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105cedff5de225b:0x57994041649783d2!8m2!3d-12.020233!4d-77.0555216!16s%2Fg%2F1td1whz1?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}


            {activeModal === "modal-4" && (
                <Modal
                    title="Hospital de Emergencias José Casimiro Ulloa"
                    content={
                        <>
                            <p>
                                El Hospital de Emergencias José Casimiro Ulloa es un hospital especializado en atención de emergencias médicas,
                                proporcionando atención inmediata a pacientes con condiciones graves o urgentes. Cuenta con un equipo de profesionales
                                altamente capacitados para ofrecer atención de calidad a los pacientes en situaciones de emergencia.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2343199715936!2d-77.0204733!3d-12.1280204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c802421bc6e1%3A0x58ed361ef9eb36c2!2sHospital%20de%20Emergencias%20José%20Casimiro%20Ulloa!5e0!3m2!1ses!2spe!4v1693418795673"
                                    title="Google Maps Hospital de Emergencias José Casimiro Ulloa"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Hospital+de+Emergencias+José+Casimiro+Ulloa/@-12.1280204,-77.0204733,870m/data=!3m1!1e3!4m10!1m2!2m1!1sHospital+de+Emergencia+Casimiro+Ulloa!3m6!1s0x9105c802421bc6e1:0x58ed361ef9eb36c2!8m2!3d-12.1281188!4d-77.0177211!15sCiVIb3NwaXRhbCBkZSBFbWVyZ2VuY2lhIENhc2ltaXJvIFVsbG9hkgEQZ2VuZXJhbF9ob3NwaXRhbOABAA!16s%2Fg%2F11bc7qx8bw?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}
            {activeModal === "modal-5" && (
                <Modal
                    title="Hospital María Auxiliadora"
                    content={
                        <>
                            <p>
                                El Hospital María Auxiliadora es un centro médico dedicado a la atención integral de pacientes, ofreciendo
                                servicios de diagnóstico, tratamiento y prevención de enfermedades. Con un equipo médico especializado, el hospital
                                garantiza atención de calidad para una amplia gama de condiciones médicas.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2343199715936!2d-77.0204733!3d-12.1280204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c802421bc6e1%3A0x58ed361ef9eb36c2!2sHospital%20de%20Emergencias%20José%20Casimiro%20Ulloa!5e0!3m2!1ses!2spe!4v1693418795673"
                                    title="Google Maps Hospital María Auxiliadora"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Hospital+María+Auxiliadora/@-12.145352,-76.9940748,7070m/data=!3m1!1e3!4m10!1m2!2m1!1sHospital+María+Auxiliadora!3m6!1s0x9105b8fa03ffffff:0x20b1a410d73c66!8m2!3d-12.1611333!4d-76.9584172!15sChtIb3NwaXRhbCBNYXLDrWEgQXV4aWxpYWRvcmGSAQhob3NwaXRhbOABAA!16s%2Fg%2F11b8d47nyl?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}

            {activeModal === "modal-6" && (
                <Modal
                    title="Hospital Minsa Santa Rosa"
                    content={
                        <>
                            <p>
                                El Hospital Minsa Santa Rosa es un centro de salud público que ofrece atención médica integral, incluyendo
                                servicios de urgencias, consultas externas y procedimientos especializados. Este hospital está comprometido con
                                la calidad en la atención y la mejora continua de sus servicios para la comunidad.
                            </p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Encuéntranos aquí:</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2343199715936!2d-77.0204733!3d-12.1280204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c802421bc6e1%3A0x58ed361ef9eb36c2!2sHospital%20de%20Emergencias%20José%20Casimiro%20Ulloa!5e0!3m2!1ses!2spe!4v1693418795673"
                                    title="Google Maps Hospital Minsa Santa Rosa"
                                    width="100%"
                                    height="250"
                                    className="border-0 rounded-md shadow-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="https://www.google.com/maps/place/Hospital+Minsa+Santa+Rosa/@-12.0719884,-77.0636188,870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c91c6643e501:0x37e96489ee60b02b!8m2!3d-12.0719884!4d-77.0610385!16s%2Fg%2F1tj7xfrk?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </>
                    }
                    closeModal={() => setActiveModal(null)}
                />
            )}


        </div>
    );
};

const Card = ({ image, title, phone, address, modalId, toggleModal }) => (
    <div
        className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
        onClick={() => toggleModal(modalId)}
    >
        <img className="w-full h-48 object-cover rounded-md" src={image} alt={title} />
        <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">{title}</h2>
            <br />
            <p className="text-sm text-black font-bold">Teléfono:</p>

            <p className="text-sm text-gray-500">{phone}</p>
            <br />
            <p className="text-sm text-black font-bold">Dirección:</p>
            <p className="text-sm text-gray-500">{address}</p>
            <br />
            <p className="text-sm text-gray-500 text-center">(presioname)</p>
        </div>
    </div>
);


const Modal = ({ title, content, closeModal }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="mb-6">{content}</div>
            <div className="text-right">
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Cerrar
                </button>
            </div>
        </div>
    </div>
);

export default Sedes;
