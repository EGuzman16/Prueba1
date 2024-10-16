import React, { useState } from 'react';
import { FaHotel, FaCapsules, FaBuilding, FaHome, FaWifi, FaSwimmer, FaParking, FaDumbbell, FaUtensils, FaWheelchair, FaDog, FaTrain, FaPlane, FaLandmark, FaChild, FaHeart, FaBriefcase, FaHiking, FaMountain } from 'react-icons/fa';
import { MdOutlineSpa, MdFreeBreakfast, MdAirportShuttle } from 'react-icons/md';
import { GiBed } from 'react-icons/gi';


const HotelFilter = () => {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const countries = ["Ciudad", "Tokyo", "Kyoto", "Osaka", "Hiroshima", "Sapporo", "Nagasaki", "Fukuoka"];
    const alojamientos = [
        { icon: FaHotel, label: "Hoteles de lujo" },
        { icon: MdOutlineSpa, label: "Ryokan (tradicional)" },
        { icon: FaCapsules, label: "Hoteles cápsula" },
        { icon: FaBuilding, label: "Hoteles de negocios" },
        { icon: FaHome, label: "Apartamentos" },
        { icon: GiBed, label: "Hostales" }
    ];
    const servicios = [
        { icon: FaWifi, label: "Wi-Fi gratis" },
        { icon: MdFreeBreakfast, label: "Desayuno incluido" },
        { icon: FaParking, label: "Aparcamiento gratuito" },
        { icon: MdAirportShuttle, label: "Transporte al aeropuerto" },
        { icon: FaSwimmer, label: "Piscina" },
        { icon: FaDumbbell, label: "Gimnasio" },
        { icon: FaUtensils, label: "Restaurante en el hotel" },
        { icon: FaWheelchair, label: "Accesible" },
        { icon: FaDog, label: "Admite mascotas" }
    ];
    const estilosDeViaje = [
        { icon: FaChild, label: "Familiar" },
        { icon: FaHeart, label: "Luna de miel" },
        { icon: FaBriefcase, label: "De negocios" },
        { icon: FaHiking, label: "Amigable para mochileros" },
        { icon: FaMountain, label: "Para aventureros" }
    ];

    return (
        <div className="p-4 border-2 border-[#FF4A5A] rounded-lg m-12">
            <form>
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
                        <label className="mr-2">Tipo de Habitación:</label>
                        <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                            <option>Habitaciones individuales</option>
                            <option>Habitaciones dobles o matrimoniales</option>
                            <option>Habitaciones familiares</option>
                            <option>Suites</option>
                            <option>Habitaciones con vistas</option>
                        </select>
                    </div>
                    <div className="mr-4 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
                        <label className="mr-2">Rango de Precios:</label>
                        <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                            <option>Económico</option>
                            <option>Moderado</option>
                            <option>De lujo</option>
                        </select>
                    </div>
                </div>

                <div>

                    <button type="button" onClick={() => setMostrarFiltros(!mostrarFiltros)} className="mt-2 mb-2 text-[#FF4A5A] text-center w-full">
                        {mostrarFiltros ? 'Ocultar Filtros' : 'Mostrar Más Filtros'}
                    </button>
                    {mostrarFiltros && (
                        <div>
                            <div className="mb-4">
                                <label className="block mb-2">Tipo de Alojamiento:</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {alojamientos.map((alojamiento, index) => (
                                        <label key={index}>
                                            <input type="checkbox" className="mr-2" />
                                            <alojamiento.icon className="inline-block mr-2" color="#FF4A5A" /> {alojamiento.label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">Servicios Disponibles:</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {servicios.map((servicio, index) => (
                                        <label key={index}>
                                            <input type="checkbox" className="mr-2" />
                                            <servicio.icon className="inline-block mr-2" color="#FF4A5A" /> {servicio.label}
                                        </label>
                                    ))}
                                </div>
                            </div>
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
                                <label className="block mb-2">Estilo de Viaje:</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {estilosDeViaje.map((estilo, index) => (
                                        <label key={index}>
                                            <input type="checkbox" className="mr-2" />
                                            <estilo.icon className="inline-block mr-2" color="#FF4A5A" /> {estilo.label}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb-4 flex flex-col md:flex-row items-start md:items-center w-full">
                    <label className="mr-2">Ordenar Resultados:</label>
                    <select className='rounded-full p-2 bg-[#96C6D9] w-full md:w-auto' style={{ color: '#4F4F4F' }}>
                        <option>Precio: De menor a mayor</option>
                        <option>Precio: De mayor a menor</option>
                        <option>Calificación: De mayor a menor</option>
                        <option>Popularidad: Los hoteles más reservados o recomendados</option>
                    </select>
                    <div className="w-full md:w-1/5 lg:w-1/6 md:ml-4 mb-4 mt-4 md:mb-0">
                    <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                </div> 
                </div>
            </form>
        </div>
    );
}

export default HotelFilter;