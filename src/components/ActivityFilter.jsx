import React, { useState } from 'react';
import { MdOutlineForest, MdOutlineBeachAccess } from 'react-icons/md';
import { PiBirdBold } from 'react-icons/pi';

const ActivityFilter = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const countries = ["Ciudad", "Tokyo", "Kyoto", "Osaka", "Hiroshima", "Sapporo", "Nagasaki", "Fukuoka"];
    const experiences = ["Relajante", "Aventura", "Familiar", "Cultural", "Gastronómico"];
    const categories = [
        { icon: <MdOutlineForest />, label: 'Naturaleza' },
        { icon: <MdOutlineBeachAccess />, label: 'Playa' },
        { icon: <PiBirdBold />, label: 'Reserva de Aves' },
        { icon: <MdOutlineForest />, label: 'Naturaleza' },
        { icon: <MdOutlineBeachAccess />, label: 'Playa' },
        { icon: <PiBirdBold />, label: 'Reserva de Aves' },
        { icon: <MdOutlineForest />, label: 'Naturaleza' },
        { icon: <MdOutlineBeachAccess />, label: 'Playa' },
        { icon: <PiBirdBold />, label: 'Reserva de Aves' },
    ];

    return (
        <div className="p-4 border-2 border-[#FF4A5A] rounded-lg mt-5 mr-24 ml-24">
            <div className="flex flex-col items-center text-center mb-4 mt-3">
            <h2 className="text-3xl mb-2">Atractivos</h2>
                <span>Filtra tus actividades o puntos de interes favoritos</span>
            </div>
            <form className=" md:ml-24">
                <div className="mb-4 flex flex-col md:flex-row items-start md:items-center w-full">
                    <label className="mr-2">Buscar por nombre:</label>
                    <input type="text" className="rounded-full p-2 bg-[#96C6D9] w-full md:w-auto" placeholder="" />
                </div>

                <div className="mb-4 flex flex-col md:flex-row flex-wrap w-full">
                    <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Ubicación:</label>
                        <select className='rounded-full p-2 mr-3 mb-3 bg-[#96C6D9] w-full md:w-auto md:mb-0' style={{ color: '#4F4F4F' }}>
                            <option>Región</option>
                            <option>Hokkaido</option>
                            <option>Kanto (Tokyo y alrededores)</option>
                            <option>Kansai (Kyoto, Osaka)</option>
                            <option>Chubu (Monte Fuji, Alpes Japoneses)</option>
                            <option>Tohoku (Norte de Honshu)</option>
                            <option>Chugoku (Hiroshima)</option>
                            <option>Shikoku</option>
                            <option>Kyushu</option>
                            <option>Okinawa y las Islas Ryukyu</option>
                        </select>

                        <select className='rounded-full p-2 mr-3 mb-3 bg-[#96C6D9] w-full md:w-auto md:mb-0' style={{ color: '#4F4F4F' }}>
                            {countries.map((country, index) => (
                                <option key={index}>{country}</option>
                            ))}
                        </select>

                    </div>
                </div>

                <div className="mb-4 flex flex-col md:flex-row flex-wrap w-full">
                    <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Fechas:</label>
                        <input type="date" className="mr-2 p-1 rounded-full bg-[#96C6D9] w-full md:w-auto" style={{ color: '#4F4F4F' }} />
                        <span className="mr-2">a</span>
                        <input type="date" className="mr-2 p-1 rounded-full bg-[#96C6D9] w-full md:w-auto" style={{ color: '#4F4F4F' }} />
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Estaciones del Año:</label>
                        <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                            <option>Primavera</option>
                            <option>Verano</option>
                            <option>Otoño</option>
                            <option>Invierno</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex flex-col md:flex-row flex-wrap w-full">
                    <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Experiencia:</label>
                        <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                            {experiences.map((experience, index) => (
                                <option key={index}>{experience}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Precio:</label>
                        <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                            <option>Gratis</option>
                            <option>Económico</option>
                            <option>Moderado</option>
                            <option>De lujo</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block mb-2">Categorías de Actividades y Atractivos:</label>
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 ${showMore ? '' : 'h-24 overflow-hidden'}`}>
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-start md:items-center mr-1 mb-1 text-sm">
                                <input type="checkbox" className="mr-1" />
                                <span className="mr-1" style={{ color: '#FF4A5A' }}>{category.icon}</span>
                                <span style={{ fontSize: '1em' }}>{category.label}</span>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={toggleShowMore} className="mt-2 text-[#FF4A5A] text-center w-full">
                        {showMore ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>

                <div className="mb-4 flex flex-col md:flex-row items-start md:items-center w-full">
                    <label className="mr-2">Ordenar Resultados:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        <option>Popularidad (de mayor a menor)</option>
                        <option>Mejor calificación</option>
                        <option>Precio (menor a mayor)</option>
                        <option>Precio (mayor a menor)</option>
                        <option>Más recientes</option>
                    </select>

                    <div className="w-full md:w-1/5 lg:w-1/6 md:ml-4 mb-4 mt-4 md:mb-0">
                        <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ActivityFilter;