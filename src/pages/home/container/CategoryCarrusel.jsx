import React from 'react';
import Slider from 'react-slick';
import { MdOutlineForest, MdOutlineBeachAccess, MdOutlineTempleBuddhist, MdOutlineCastle, MdOutlineTempleHindu, MdOutlineHotTub, MdOutlineSurfing, MdKayaking, MdHiking, MdOutlineRamenDining, MdOutlineCoffee, MdOutlineShoppingBag  } from "react-icons/md";
import { PiBirdBold, PiCross, PiStarOfDavid, PiPawPrint, PiEyeBold, PiHandEyeLight } from "react-icons/pi";
import { TbTorii, TbBuildingMonument } from "react-icons/tb";
import { FaRegMoon, FaPersonSkiing, FaRegStar } from "react-icons/fa6";
import { GiGreekTemple, GiAncientRuins, GiYinYang, GiGrapes, GiProtectionGlasses, GiPartyPopper, GiSamuraiHelmet  } from "react-icons/gi";
import { LiaCocktailSolid, LiaGamepadSolid } from "react-icons/lia";
import { BsRobot } from "react-icons/bs";
import { VscOctoface } from "react-icons/vsc";
import { LuFerrisWheel } from "react-icons/lu";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
    { icon: <MdOutlineForest />, title: 'Naturaleza' },
    { icon: <MdOutlineBeachAccess />, title: 'Playa' },
    { icon: <TbBuildingMonument />, title: 'Monumento' },
    { icon: <MdOutlineRamenDining  />, title: 'Gastronomía' },
    { icon: <LiaCocktailSolid  />, title: 'Noche' },
    { icon: <GiGreekTemple />, title: 'Museo' },
    { icon: <MdOutlineCoffee />, title: 'Cafés' },
    { icon: <MdOutlineShoppingBag />, title: 'Shooping' },
    { icon: <FaRegStar />, title: 'Ocio' },
    { icon: <GiPartyPopper />, title: 'Festival' },
    { icon: <BsRobot />, title: 'Tecnología' },
    { icon: <LiaGamepadSolid  />, title: 'Juegos' },
    { icon: <VscOctoface  />, title: 'Anime' },
    { icon: <LuFerrisWheel  />, title: 'Parques temáticos' },
    { icon: <GiSamuraiHelmet  />, title: 'Samurai' },
    { icon: <MdOutlineTempleBuddhist />, title: 'Templo Budista' },
    { icon: <PiBirdBold />, title: 'Reserva de Aves' },
    { icon: <MdOutlineCastle />, title: 'Castillos' },
    { icon: <PiCross />, title: 'Templo Cristiano' },
    { icon: <TbTorii />, title: 'Templo Sintoísta' },
    { icon: <MdOutlineTempleHindu />, title: 'Templo Hindu' },
    { icon: <PiHandEyeLight />, title: 'Templo Jainita' },
    { icon: <FaRegMoon />, title: 'Templo islámico' },
    { icon: <PiStarOfDavid />, title: 'Templo judío' },
    { icon: <GiYinYang />, title: 'Templo Taoísta' },
    { icon: <GiAncientRuins />, title: 'Ruinas' },
    { icon: <MdOutlineHotTub />, title: 'Onsen' },
    { icon: <GiGrapes />, title: 'Viñedos' },
    { icon: <PiPawPrint />, title: 'Vida Silvestre' },
    { icon: <PiEyeBold />, title: 'Punto de interés' },
    { icon: <MdOutlineSurfing />, title: 'Surf' },
    { icon: <MdKayaking/>, title: 'Kayak' },
    { icon: <FaPersonSkiing/>, title: 'Esquí' },
    { icon: <GiProtectionGlasses/>, title: 'Buceo' },
    { icon: <MdHiking/>, title: 'Senderismo' },

];

const CategoryCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className="category-carousel my-12 p-6">
            <h2 className="text-left mb-4 text-2xl">Navega por categoría</h2>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className="p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-container mb-4 bg-white shadow-lg rounded-full flex justify-center items-center" style={{ width: '80px', height: '80px' }}>
                                {React.cloneElement(category.icon, { color: '#fa5564', size: '2em' })}
                            </div>
                            <span className="text-[#8F9BB3]">{category.title}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategoryCarousel;