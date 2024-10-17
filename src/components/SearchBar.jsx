import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { LuMapPin, LuMap } from 'react-icons/lu'

const regionCities = {
    "Hokkaido": ["Sapporo", "Hakodate", "Otaru", "Asahikawa", "Furano"],
    "Kanto (Tokyo y alrededores)": ["Tokio", "Yokohama", "Kamakura", "Kawasaki", "Chiba"],
    "Kansai (Kyoto, Osaka)": ["Kioto", "Osaka", "Nara", "Kobe", "Himeji"],
    "Chubu (Monte Fuji, Alpes Japoneses)": ["Nagoya", "Kanazawa", "Takayama", "Matsumoto", "Fujinomiya"],
    "Tohoku (Norte de Honshu)": ["Sendai", "Aomori", "Morioka", "Akita", "Fukushima"],
    "Chugoku (Hiroshima)": ["Hiroshima", "Okayama", "Matsue", "Tottori", "Yamaguchi"],
    "Shikoku": ["Matsuyama", "Takamatsu", "Tokushima", "Kochi", "Uwajima"],
    "Kyushu": ["Fukuoka", "Nagasaki", "Kumamoto", "Beppu", "Kagoshima"],
    "Okinawa y las Islas Ryukyu": ["Naha", "Ishigaki", "Miyako", "Nago", "Urasoe"]
};

const regions = Object.keys(regionCities);

const SearchBar = () => {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [cities, setCities] = useState([]);

    const handleRegionChange = (event) => {
        const region = event.target.value;
        setSelectedRegion(region);
        setCities(regionCities[region] || []);
    };

    return (
        <div>
            <form className="flex flex-col gap-4 ">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                    <div className="relative flex items-center w-full md:w-9/10 lg:w-19/20 mb-4 md:mb-0">
                        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <input type="text" placeholder="¿Qué estás buscando?" className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" />
                    </div>
                    <div className="relative flex items-center w-full md:w-2/3 lg:w-3/4 mb-4 md:mb-0">
                        <LuMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <select onChange={handleRegionChange} className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" style={{ color: '#4F4F4F' }}>
                            <option value="">Región</option>
                            {regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative flex items-center w-full md:w-3/4 lg:w-5/6 mb-4 md:mb-0">
                        <LuMap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <select className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" style={{ color: '#4F4F4F' }}>
                            <option value="">Ciudades</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full md:w-1/5 lg:w-1/6 md:ml-4 mb-4 md:mb-0">
                        <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SearchBar