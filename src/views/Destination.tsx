import { useState } from 'react'
import DestinationNav from '../components/DestinationNav'
import data from '../../public/data.json'
import backgroundImageDestination from '../../public//assets/destination/background-destination-desktop.jpg'

const Destination = () => {
    const [currentDestination, setCurrentDestination] = useState('MOON')

    const destination = data.destinations.find(
        dest => dest.name.toUpperCase() === currentDestination
    );

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-32 pb-8 px-8"
            style={{ backgroundImage: `url(${backgroundImageDestination})` }}
        >
            <h1 className="text-2xl tracking-widest mb-20 pl-40">
                <span className="text-gray-600 font-bold mr-4">01</span>
                PICK YOUR DESTINATION
            </h1>

            <div className="grid grid-cols-2 gap-24 max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <img 
                        src={destination?.images.png} 
                        alt={destination?.name}
                        className="w-[400px] h-[400px] object-contain"
                    />
                </div>

                <div className="pt-8">
                    <DestinationNav 
                        currentDestination={currentDestination}
                        onDestinationChange={setCurrentDestination}
                    />
                    
                    <h2 className="text-8xl mt-8 mb-4 font-bellefair">{destination?.name}</h2>
                    
                    <p className="text-[#D0D6F9] text-lg mb-12 leading-relaxed max-w-xl">
                        {destination?.description}
                    </p>

                    <hr className="border-[#383B4B] mb-8" />

                    <div className="flex gap-16">
                        <div>
                            <p className="text-[#D0D6F9] text-sm tracking-wider mb-3">AVG. DISTANCE</p>
                            <p className="text-2xl font-bellefair">{destination?.distance}</p>
                        </div>

                        <div>
                            <p className="text-[#D0D6F9] text-sm tracking-wider mb-3">EST. TRAVEL TIME</p>
                            <p className="text-2xl font-bellefair">{destination?.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination
