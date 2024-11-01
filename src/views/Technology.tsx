import { useState } from 'react'
import backgroundImageCrew from '../../public/assets/technology/background-technology-desktop.jpg'
import data from '../../public/data.json'
import TechNav from '../components/TachNav'

const Technology = () => {
    const [technology, setTechnology] = useState('LAUNCH VEHICLE')

    const currentTech = data.technology.find(
        tech => tech.name.toUpperCase() === technology
    );

    return (
        <div>
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-32 pb-8 px-8"
                style={{ backgroundImage: `url(${backgroundImageCrew})` }}
            >
                <h1 className="text-2xl tracking-widest mb-20 pl-40">
                    <span className="text-gray-600 font-bold mr-4">03</span>
                    SPACE LAUNCH 101
                </h1>

                <div className="grid grid-cols-[auto_1fr_1fr] gap-20 max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <TechNav
                            technology={technology}
                            onTechChange={setTechnology}
                            className="flex flex-col gap-8 transition-all duration-300"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-gray-500 text-3xl uppercase mb-4 font-bellefair">
                            {currentTech?.name}
                        </h3>
                        <h2 className="text-8xl mb-8 font-bellefair">{currentTech?.name}</h2>

                        <p className="text-[#D0D6F9] text-lg mb-12 leading-relaxed max-w-xl">
                            {currentTech?.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-end">
                        <img
                            src={currentTech?.images.portrait}
                            alt={currentTech?.name}
                            className="w-[550px] h-[550px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
