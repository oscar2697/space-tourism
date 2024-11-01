import { Outlet } from 'react-router-dom'
import Navbar from "../team/Navbar"
import Logo from "../team/Logo"

const AppLayout = () => {
    return (
        <div className="min-h-screen">
            <header className="absolute w-full z-50">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8">
                    <div className="flex items-center justify-between">
                        <div className="w-48">
                            <Logo />
                        </div>

                        <div className="hidden lg:block w-full h-[1px] bg-white/25 ml-16 mr-[-30px] relative z-10" />
                        
                        <nav className="bg-white/5 backdrop-blur-2xl">
                            <Navbar />
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
