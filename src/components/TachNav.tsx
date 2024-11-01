import data from '../../public/data.json';

interface CrewNavProps {
    technology: string
    onTechChange: (crew: string) => void
    className?: string
}

const TechNav = ({ technology, onTechChange, className }: CrewNavProps) => {
    const techno = data.technology.map(tech => tech.name.toUpperCase())

    return (
        <div className={className}>
            <nav>
                <ul className="flex flex-col items-center gap-6"> 
                    {techno.map((techs, index) => (
                        <li key={techs}>
                            <button 
                                onClick={() => onTechChange(techs)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    technology === techs 
                                        ? 'bg-white text-black' 
                                        : 'border border-white/50 text-white/50 hover:bg-white/10'
                                }`}
                                aria-label={`Seleccionar ${techs}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default TechNav;
