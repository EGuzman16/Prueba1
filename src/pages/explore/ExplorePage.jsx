import React, { useState } from 'react';
import Hero from './container/Hero';
import MainLayout from '../../components/MainLayout';
import Aside from './container/Aside';
import Main from './container/Main';

const ExplorePage = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    return (
        <MainLayout>
            <Hero />
            <div className="flex mt-24 md:mt-12">
                <button 
                    className="block md:hidden p-2 bg-blue-500 text-white rounded"
                    onClick={toggleAside}
                >
                    Filtros
                </button>
                <div className={`fixed inset-0 bg-white z-50 p-4 ${isAsideOpen ? 'mt-24' : 'mt-12'} transform ${isAsideOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:relative md:translate-x-0 md:w-1/5`}>
                    <button 
                        className="block md:hidden p-2 bg-red-500 text-white rounded mb-4"
                        onClick={toggleAside}
                    >
                        Cerrar
                    </button>
                    <Aside />
                </div>
                <div className="w-full md:w-4/5">
                    <Main />
                </div>
            </div>
        </MainLayout>
    );
};

export default ExplorePage;