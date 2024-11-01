import { useState } from 'react';
import backgroundImageCrew from '../../public/assets/crew/background-crew-desktop.jpg'
import data from '../../public/data.json';
import CrewNav from '../components/CrewNav';

const Crew = () => {
    const [crew, setCrew] = useState('DOUGLAS HURLEY')

    const currentCrew = data.crew.find(
        dest => dest.name.toUpperCase() === crew
    );

    return (
        <div>
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-32 pb-8 px-8"
                style={{ backgroundImage: `url(${backgroundImageCrew})` }}
            >
                <h1 className="text-2xl tracking-widest mb-20 pl-40">
                    <span className="text-gray-600 font-bold mr-4">02</span>
                    MEET YOUR CREW
                </h1>

                <div className="grid grid-cols-2 gap-24 max-w-7xl mx-auto">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-gray-500 text-3xl uppercase mb-4 font-bellefair">
                            {currentCrew?.role}
                        </h3>
                        <h2 className="text-8xl mb-8 font-bellefair">{currentCrew?.name}</h2>

                        <p className="text-[#D0D6F9] text-lg mb-12 leading-relaxed max-w-xl">
                            {currentCrew?.bio}
                        </p>

                        <div className="mt-auto">
                            <CrewNav
                                crew={crew}
                                onCrewChange={setCrew}
                                className="flex gap-4 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-end justify-center">
                        <img
                            src={currentCrew?.images.png}
                            alt={currentCrew?.name}
                            className="w-[550px] h-[550px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew
