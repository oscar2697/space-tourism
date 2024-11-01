import { useState } from "react"
import { Link } from "react-router-dom"
import iconHamburger from "/assets/shared/icon-hamburger.svg"
import iconClose from "/assets/shared/icon-close.svg"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between p-4 backdrop-blur-md text-white">
            <div className="flex gap-8 text-sm hidden md:flex">
                <Link to={'/'}  className="flex items-center">
                    <span className="text-xs mr-2">00</span>
                    HOME
                </Link>

                <Link to={'/destination'}  className="flex items-center">
                    <span className="text-xs mr-2">01</span>
                    DESTINATION
                </Link>

                <Link to={'/crew'}  className="flex items-center">
                    <span className="text-xs mr-2">02</span>
                    CREW
                </Link>

                <Link to={'/technology'}  className="flex items-center">
                    <span className="text-xs mr-2">03</span>
                    TECHNOLOGY
                </Link>
            </div>

            <div className="md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="z-50 relative"
                >
                    <img 
                        src={isMenuOpen ? iconClose : iconHamburger} 
                        alt="menu" 
                        className="w-6 h-6"
                    />
                </button>

                <div 
                    className={`
                        fixed top-0 right-0 h-screen w-[254px]
                        bg-[#151923]/90 backdrop-blur-2xl
                        flex flex-col pt-[118px] pl-8
                        transform transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <Link 
                        to={'/'} 
                        className="flex items-center text-base tracking-[2.7px] mb-8"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="font-bold mr-3">00</span>
                        HOME
                    </Link>

                    <Link 
                        to={'/destination'} 
                        className="flex items-center text-base tracking-[2.7px] mb-8"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="font-bold mr-3">01</span>
                        DESTINATION
                    </Link>

                    <Link 
                        to={'/crew'} 
                        className="flex items-center text-base tracking-[2.7px] mb-8"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="font-bold mr-3">02</span>
                        CREW
                    </Link>

                    <Link 
                        to={'/technology'} 
                        className="flex items-center text-base tracking-[2.7px]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="font-bold mr-3">03</span>
                        TECHNOLOGY
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
