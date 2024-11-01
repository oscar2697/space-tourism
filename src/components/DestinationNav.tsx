import data from '../../public/data.json';

type DestinationNavProps = {
    currentDestination: string;
    onDestinationChange: (destination: string) => void;
}

const DestinationNav = ({ currentDestination, onDestinationChange }: DestinationNavProps) => {
    const destinations = data.destinations.map(dest => dest.name.toUpperCase());
    
    return (
        <nav>
            <ul className="flex gap-8">
                {destinations.map((destination) => (
                    <li key={destination}>
                        <button 
                            onClick={() => onDestinationChange(destination)}
                            className={`text-white text-sm tracking-widest pb-2 border-b-[3px] transition-colors duration-300 ${
                                currentDestination === destination 
                                    ? 'border-white' 
                                    : 'border-transparent hover:border-white/50'
                            }`}
                        >
                            {destination}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DestinationNav; 