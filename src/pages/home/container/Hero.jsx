import { IoSearchOutline, IoCalendarOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import herohome from '../../../assets/herohome.png';
import nube from '../../../assets/nube.png';
import SearchBar from '../../../components/SearchBar';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${herohome})` }}>
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h2 className="text-white text-4xl font-bold mb-4 text-center">Navega Japón a tu manera</h2>
                <img src={nube} alt="Nube" className="mb-4" />
                <div className="bg-[#d7edfc] bg-opacity-50 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3">
                <SearchBar />
                </div>
            </div>
        </section>
    );
};

export default Hero;