import { useState, useEffect } from 'react'
import data from '../../public/data.json'

import backgroundImageDesktop from '../../public/assets/technology/background-technology-desktop.jpg'
import backgroundImageTablet from '../../public/assets/technology/background-technology-tablet.jpg'
import backgroundImageMobile from '../../public/assets/technology/background-technology-mobile.jpg'
import TechNav from '../components/TachNav'

const Technology = () => {
    const [technology, setTechnology] = useState('LAUNCH VEHICLE')
    const [backgroundImage, setBackgroundImage] = useState(backgroundImageDesktop)

    const currentTech = data.technology.find(
        tech => tech.name.toUpperCase() === technology
    )

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth >= 1024) {
                setBackgroundImage(backgroundImageDesktop) 
            } else if (window.innerWidth >= 768) {
                setBackgroundImage(backgroundImageTablet) 
            } else {
                setBackgroundImage(backgroundImageMobile) 
            }
        }

        updateBackgroundImage()

        window.addEventListener('resize', updateBackgroundImage)

        return () => window.removeEventListener('resize', updateBackgroundImage)
    }, [])

    return (
        <div>
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-24 md:pt-32 pb-8"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h1 className="text-base md:text-2xl tracking-widest mb-8 md:mb-20 text-center md:text-left md:pl-40">
                    <span className="text-gray-600 font-bold mr-4">03</span>
                    SPACE LAUNCH 101
                </h1>

                <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-20 max-w-7xl mx-auto">
                    <div className="order-1 lg:order-3 lg:col-start-3 flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
                        <img
                            src={currentTech?.images.landscape}
                            alt={currentTech?.name}
                            className="w-full h-auto lg:hidden" 
                        />
                        <img
                            src={currentTech?.images.portrait}
                            alt={currentTech?.name}
                            className="hidden lg:block w-[550px] h-[550px] object-contain" 
                        />
                    </div>

                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <TechNav
                            technology={technology}
                            onTechChange={setTechnology}
                            className="flex flex-row lg:flex-col gap-4 lg:gap-8 transition-all duration-300"
                        />
                    </div>

                    <div className="order-3 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-0">
                        <h3 className="text-[#D0D6F9] text-sm md:text-base uppercase mb-2 tracking-widest">
                            THE TERMINOLOGY...
                        </h3>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl mb-4 font-bellefair uppercase">
                            {currentTech?.name}
                        </h2>
                        <p className="text-[#D0D6F9] text-base md:text-lg leading-relaxed max-w-xl">
                            {currentTech?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
