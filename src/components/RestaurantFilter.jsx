import React, { useState } from 'react';
import { FaTrain, FaPlane, FaLandmark, FaWifi, FaUtensils, FaDog, FaLeaf, FaFish, FaChild } from 'react-icons/fa';

const countries = ["Ciudad", "Tokyo", "Kyoto", "Osaka", "Hiroshima", "Sapporo", "Nagasaki", "Fukuoka"];
const restaurantTypes = ["Restaurantes tradicionales", "Cadenas de comida rápida", "Cafeterías y cafés", "Restaurantes de alta cocina", "Food trucks"];
const cuisines = ["Cocina japonesa tradicional", "Internacional", "Fusión", "Cocina vegetariana/vegana", "Cocina sin gluten", "Cocina halal", "Cocina kosher", "Rápida", "Cocina de autor", "Con espectáculo", "Familiar", "Romántica", "Negocios", "Ocasiones especiales"];
const priceRanges = ["Económico", "Moderado", "De lujo"];
const services = [
    { icon: FaWifi, label: "Wi-Fi gratis" },
    { icon: FaUtensils, label: "Menú en inglés" },
    { icon: FaUtensils, label: "Reservas en línea" },
    { icon: FaUtensils, label: "Entregas a domicilio" },
    { icon: FaUtensils, label: "Terraza o comedor al aire libre" },
    { icon: FaUtensils, label: "Opciones de comida para llevar" },
    { icon: FaDog, label: "Admite mascotas" },
    { icon: FaLeaf, label: "Ingredientes orgánicos" },
    { icon: FaFish, label: "Mariscos frescos" },
    { icon: FaChild, label: "Menús infantiles" }
];

const RestaurantFilter = () => {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

        return (
            <div className="p-4 border-2 border-[#FF4A5A] rounded-lg mt-5 mr-24 ml-24">
            <div className="flex flex-col items-center text-center mb-4 mt-3">
            <h2 className="text-3xl mb-2">Restaurantes</h2>
                <span>Filtra por tus gustos preferidos</span>
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
                <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                    <label className="mr-2">Estrellas:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        <option>5 estrellas</option>
                        <option>4 estrellas</option>
                        <option>3 estrellas y menos</option>
                    </select>
                </div>
            </div>

            <div className="mb-4 flex flex-col md:flex-row flex-wrap w-full">
                <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                    <label className="mr-2">Tipo de Restaurante:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        {restaurantTypes.map((type, index) => (
                            <option key={index}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                    <label className="mr-2">Tipo de Cocina:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        {cuisines.map((cuisine, index) => (
                            <option key={index}>{cuisine}</option>
                        ))}
                    </select>
                </div>

                <div className="mr-4 mt-3 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                    <label className="mr-2">Rango de Precios:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        {priceRanges.map((range, index) => (
                            <option key={index}>{range}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
            <button 
                type="button" 
                onClick={() => setMostrarFiltros(!mostrarFiltros)} 
                className="mt-2 mb-2 text-[#FF4A5A] text-center w-full"
            >
                {mostrarFiltros ? 'Ocultar Filtros' : 'Mostrar Más Filtros'}
            </button>

            {mostrarFiltros && (
                <div>
                    <div className="mb-4">
                        <label className="block mb-2">Filtros por Ubicación Específica:</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <label>
                                <input type="checkbox" className="mr-2" />
                                <FaTrain className="inline-block mr-2" color="#FF4A5A" /> Cerca de estaciones de tren o metro
                            </label>
                            <label>
                                <input type="checkbox" className="mr-2" />
                                <FaPlane className="inline-block mr-2" color="#FF4A5A" /> Cerca de aeropuertos
                            </label>
                            <label>
                                <input type="checkbox" className="mr-2" />
                                <FaLandmark className="inline-block mr-2" color="#FF4A5A" /> Cerca de áreas de puntos de interés
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Servicios Disponibles:</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {services.map((service, index) => (
                                <label key={index}>
                                    <input type="checkbox" className="mr-2" />
                                    <service.icon className="inline-block mr-2" color="#fa5564" /> {service.label}
                                </label>
                            ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div>
                    <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                </div>
            </form>
        </div>
    );
};

export default RestaurantFilter;