import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 backdrop-blur-md text-white">
            <div className="flex gap-8 text-sm">
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

                <Link to={'/'}  className="flex items-center">
                    <span className="text-xs mr-2">03</span>
                    TECHNOLOGY
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
