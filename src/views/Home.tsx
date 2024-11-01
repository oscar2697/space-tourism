import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '../hooks/useWindowSize'
import backgroundImageDesktop from '../../public/assets/home/background-home-desktop.jpg'
import backgroundImageTablet from '../../public/assets/home/background-home-tablet.jpg'
import backgroundImageMobile from '../../public/assets/home/background-home-mobile.jpg'

const Home = () => {
    const navigate = useNavigate()
    const { width } = useWindowSize()
    const [backgroundImage, setBackgroundImage] = useState(backgroundImageDesktop)

    const lazyLoadImage = (src: string) => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve(img)
            img.onerror = reject
        })
    }

    const getBackgroundImage = () => {
        if (width < 640) return backgroundImageMobile
        if (width < 1024) return backgroundImageTablet
        return backgroundImageDesktop
    }

    useEffect(() => {
        setBackgroundImage(getBackgroundImage())
    }, [width])

    useEffect(() => {
        lazyLoadImage(backgroundImageMobile)
        lazyLoadImage(backgroundImageTablet)
        lazyLoadImage(backgroundImageDesktop)
    }, [])

    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat transition-[background-image] duration-300 ease-in-out"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center min-h-screen px-6 md:px-24 pb-12">
                <div className="max-w-md md:max-w-[450px] mt-8 md:mt-0">
                    <h2 className="text-[#D0D6F9] tracking-[2.7px] md:tracking-[3.38px] text-base md:text-xl mb-4 md:mb-6 uppercase">
                        So, you want to travel to
                    </h2>
                    <h1 className="text-white text-[80px] md:text-[150px] font-bellefair mb-4 md:mb-8 leading-[100px] md:leading-[150px] uppercase">
                        Space
                    </h1>
                    <p className="text-[#D0D6F9] text-[15px] md:text-base leading-relaxed max-w-[327px] md:max-w-md mx-auto md:mx-0">
                        Let's face it; if you want to go to space, you might as well genuinely go
                        to outer space and not hover kind of on the edge of it. Well sit back,
                        and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>

                <div className="absolute bottom-8 md:bottom-24 md:right-24 lg:right-40">
                    <button
                        onClick={() => navigate('/destination')}
                        className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] rounded-full bg-white text-xl tracking-[2px] uppercase font-bellefair hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] transition-shadow duration-300"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
