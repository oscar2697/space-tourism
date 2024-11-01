import { useState } from 'react'
import backgroundImageCrew from '../../public/assets/crew/background-crew-desktop.jpg'
import backgroundImageCrewMobile from '../../public/assets/crew/background-crew-mobile.jpg'
import backgroundImageCrewTablet from '../../public/assets/crew/background-crew-tablet.jpg'
import data from '../../public/data.json'
import CrewNav from '../components/CrewNav'

const Crew = () => {
    const [crew, setCrew] = useState('DOUGLAS HURLEY')
    const currentCrew = data.crew.find(dest => dest.name.toUpperCase() === crew)

    return (
        <div>
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
                style={{ 
                    backgroundImage: `url(${
                        window.innerWidth < 768 
                            ? backgroundImageCrewMobile
                            : window.innerWidth < 1024 
                                ? backgroundImageCrewTablet 
                                : backgroundImageCrew
                    })`
                }}
            >
                <div className="flex flex-col lg:hidden min-h-screen">
                    <header className="pt-24 md:pt-32 px-6 md:px-10">
                        <h1 className="text-base md:text-2xl tracking-widest text-center md:text-left">
                            <span className="text-gray-600 font-bold mr-4">02</span>
                            MEET YOUR CREW
                        </h1>
                    </header>

                    <div className="flex flex-col flex-1 px-6 md:px-10">
                        <div className="flex flex-col items-center text-center mt-8 md:mt-12">
                            <h3 className="text-gray-500 text-xl uppercase mb-2 font-bellefair">
                                {currentCrew?.role}
                            </h3>
                            
                            <h2 className="text-2xl md:text-4xl mb-4 font-bellefair">
                                {currentCrew?.name}
                            </h2>

                            <p className="text-[#D0D6F9] text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                                {currentCrew?.bio}
                            </p>

                            <div className="mb-8">
                                <CrewNav
                                    crew={crew}
                                    onCrewChange={setCrew}
                                    className="flex gap-4 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="mt-auto border-t border-gray-600/25">
                            <img
                                src={currentCrew?.images.png}
                                alt={currentCrew?.name}
                                className="mx-auto h-[400px] md:h-[532px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block">
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
            </div>
        </div>
    )
}

export default Crew
