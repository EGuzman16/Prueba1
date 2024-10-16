import { IoSearchOutline, IoCalendarOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import herohome from '../../../assets/herohome.png';
import nube from '../../../assets/nube.png';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${herohome})` }}>
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h2 className="text-white text-4xl font-bold mb-4 text-center">Navega Japón a tu manera</h2>
                <img src={nube} alt="Nube" className="mb-4" />
                <div className="bg-[#d7edfc] bg-opacity-50 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3">
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                            <div className="relative flex items-center w-full md:w-9/10 lg:w-19/20 mb-4 md:mb-0">
                                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                                <input type="text" placeholder="¿Qué estás buscando?" className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base" />
                            </div>
                            <div className="relative flex items-center w-full md:w-2/3 lg:w-3/4 mb-4 md:mb-0">
                                <LuMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                                <input type="text" placeholder="Ciudades" className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base" />
                            </div>
                            <div className="relative flex items-center w-full md:w-3/4 lg:w-5/6 mb-4 md:mb-0">
                                <IoCalendarOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                                <input type="text" placeholder="Fechas de viaje" className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base" />
                            </div>
                            <div className="w-full md:w-1/5 lg:w-1/6 md:ml-4 mb-4 md:mb-0">
                                <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;