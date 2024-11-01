import data from '../../public/data.json';

interface CrewNavProps {
    crew: string;
    onCrewChange: (crew: string) => void;
    className?: string;
}

const CrewNav = ({ crew, onCrewChange, className }: CrewNavProps) => {
    const people = data.crew.map(person => person.name.toUpperCase());

    return (
        <div className={className}>
            <nav>
                <ul className="flex items-center gap-4">
                    {people.map((crewMember) => (
                        <li key={crewMember}>
                            <button 
                                onClick={() => onCrewChange(crewMember)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                    crew === crewMember 
                                        ? 'bg-white' 
                                        : 'bg-white/20 hover:bg-white/50'
                                }`}
                                aria-label={`Seleccionar ${crewMember}`}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CrewNav; 