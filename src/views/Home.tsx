import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../public/assets/home/background-home-desktop.jpg'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex flex-col items-start justify-center h-screen px-24 gap-24">
                <div className="max-w-md">
                    <h2 className="text-gray-300 tracking-wider text-xl mb-6">
                        SO, YOU WANT TO TRAVEL TO
                    </h2>
                    <h1 className="text-white text-8xl font-serif mb-8">
                        SPACE
                    </h1>
                    <p className="text-gray-300 leading-relaxed">
                        Let's face it; if you want to go to space, you might as well genuinely go
                        to outer space and not hover kind of on the edge of it. Well sit back,
                        and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>

                <div className="absolute bottom-24 right-24">
                    <button 
                        onClick={() => navigate('/destination')}
                        className="w-48 h-48 rounded-full bg-white text-xl tracking-wider hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] transition-shadow duration-300"
                    >
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
