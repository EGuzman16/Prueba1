import React, { useState } from 'react';
import HorizontalCard from '../../../components/HorizontalCard';
import Paginator from '../../../components/Paginator';
import { BiSortUp, BiSortDown } from "react-icons/bi";

const SortComponent = ({ sortOrder, handleSortOrderChange }) => {
    return (
        <div className="mt-4 md:mt-0 flex items-center">
            <label htmlFor="sort" className="mr-2">Ordenar por:</label>
            <select id="sort" className="border border-[#96C6D9] bg-white text-black rounded-full px-4 py-2">
                <option value="precio">precio</option>
                <option value="destacado">destacado</option>
                <option value="comentarios">comentarios</option>
                <option value="ultimos-agregados">últimos agregados</option>
                <option value="favoritos">favoritos</option>
            </select>
            <div className="ml-2 flex">
                <BiSortUp 
                    size={24}
                    className={`cursor-pointer ${sortOrder === 'asc' ? 'text-[#FA5564]' : 'text-[#96C6D9]'}`} 
                    onClick={() => handleSortOrderChange('asc')} 
                />
                <BiSortDown 
                    size={24}
                    className={`cursor-pointer ${sortOrder === 'desc' ? 'text-[#FA5564]' : 'text-[#96C6D9]'}`} 
                    onClick={() => handleSortOrderChange('desc')} 
                />
            </div>
        </div>
    );
};

const Main = () => {
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    return (
        <div className='ml-3 mr-4'>
            <h2 className="text-2xl ml-1 mb-4">Resultados de la búsqueda :</h2>
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 ml-3">
                <div className="flex flex-row">
                    <button className="border border-[#FA5564] text-[#FA5564] bg-white hover:bg-[#FA5564] hover:text-white rounded-l px-4 py-2">
                        Todo
                    </button>
                    <button className="border border-[#FA5564] text-[#FA5564] bg-white hover:bg-[#FA5564] hover:text-white px-4 py-2">
                        Actractivos
                    </button>
                    <button className="border border-[#FA5564] text-[#FA5564] bg-white hover:bg-[#FA5564] hover:text-white px-4 py-2">
                        Restaurantes
                    </button>
                    <button className="border border-[#FA5564] text-[#FA5564] bg-white hover:bg-[#FA5564] hover:text-white rounded-r px-4 py-2">
                        Hoteles
                    </button>
                </div>
                <SortComponent sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} />
            </div>
            <HorizontalCard sortOrder={sortOrder} />
            <HorizontalCard sortOrder={sortOrder} />
            <HorizontalCard sortOrder={sortOrder} />
            <HorizontalCard sortOrder={sortOrder} />
            <Paginator />
        </div>
    );
};

export default Main;