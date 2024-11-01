const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 backdrop-blur-md text-white">
            <div className="flex gap-8 text-sm">
                <a href="#" className="flex items-center">
                    <span className="text-xs mr-2">00</span>
                    HOME
                </a>
                <a href="#" className="flex items-center">
                    <span className="text-xs mr-2">01</span>
                    DESTINATION
                </a>
                <a href="#" className="flex items-center">
                    <span className="text-xs mr-2">02</span>
                    CREW
                </a>
                <a href="#" className="flex items-center">
                    <span className="text-xs mr-2">03</span>
                    TECHNOLOGY
                </a>
            </div>
        </nav>
    )
}

export default Navbar
