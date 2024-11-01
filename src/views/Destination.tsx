import { useState } from 'react'
import DestinationNav from '../components/DestinationNav'
import data from '../../public/data.json'
import backgroundImageDestination from '../../public//assets/destination/background-destination-desktop.jpg'
import backgroundImageDestinationMobile from '../../public//assets/destination/background-destination-mobile.jpg'
import backgroundImageDestinationTablet from '../../public//assets/destination/background-destination-tablet.jpg'

const Destination = () => {
    const [currentDestination, setCurrentDestination] = useState('MOON')

    const destination = data.destinations.find(
        dest => dest.name.toUpperCase() === currentDestination
    )

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-24 md:pt-32 pb-8 px-4 md:px-8"
            style={{ backgroundImage: `url(${window.innerWidth < 768 
                ? backgroundImageDestinationMobile
                : window.innerWidth < 1024 
                    ? backgroundImageDestinationTablet 
                    : backgroundImageDestination})` }}
        >
            <h1 className="text-base md:text-2xl tracking-widest mb-8 md:mb-14 text-center md:text-left md:pl-24 lg:pl-40 uppercase">
                <span className="text-gray-600 font-bold mr-4">01</span>
                Pick your destination
            </h1>

            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-24 max-w-7xl mx-auto">
                <div className="flex items-center justify-center mb-8 md:mb-0">
                    <img 
                        src={destination?.images.png} 
                        alt={destination?.name}
                        className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <div className="w-full flex justify-center md:justify-start">
                        <DestinationNav 
                            currentDestination={currentDestination}
                            onDestinationChange={setCurrentDestination}
                        />
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl lg:text-8xl mt-5 md:mt-8 mb-2 md:mb-4 font-bellefair text-center md:text-left uppercase">
                        {destination?.name}
                    </h2>
                    
                    <p className="text-[#D0D6F9] text-[15px] md:text-lg mb-8 md:mb-12 leading-relaxed max-w-xl text-center md:text-left">
                        {destination?.description}
                    </p>

                    <hr className="border-[#383B4B] w-full mb-8" />

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start w-full">
                        <div className="text-center md:text-left">
                            <p className="text-[#D0D6F9] text-sm tracking-wider mb-3 uppercase">Avg. Distance</p>
                            <p className="text-2xl font-bellefair uppercase">{destination?.distance}</p>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-[#D0D6F9] text-sm tracking-wider mb-3 uppercase">Est. Travel Time</p>
                            <p className="text-2xl font-bellefair uppercase">{destination?.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
