import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Main = () => {
    return (
        <div className= 'p-12 m-6 md:pl-24 md:pt-24 md:pb-24 md:pr-80'>
            <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1">Nombre*</label>
                    <input
                        type="text"
                        className="w-full p-2 rounded-full bg-[#F2F2F2] border border-gray-300"
                    />
                </div>
                <div>
                    <label className="block mb-1">Contraseña*</label>
                    <input
                        type="password"
                        className="w-full p-2 rounded-full bg-[#F2F2F2] border border-gray-300"
                    />
                </div>
                <div>
                    <label className="block mb-1">Confirmar Contraseña*</label>
                    <input
                        type="password"
                        className="w-full p-2 rounded-full bg-[#F2F2F2] border border-gray-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-[#FA5564] text-white rounded-full"
                >
                    Registrarse
                </button>
                <button
                    type="button"
                    className="w-full p-2 border border-[#FA5564] text-black bg-white rounded-full flex items-center justify-center"
                >
                    <FcGoogle className="mr-2" /> Registrarse con Google
                </button>
            </form>
            <div className="mt-4 text-center">
                <span>¿Ya tienes cuenta? </span>
                <a href="#" className="text-[#FA5564]">Iniciar Sesión</a>
            </div>
        </div>
    );
};

export default Main;