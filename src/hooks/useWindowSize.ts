import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };

        // Throttle para mejor rendimiento
        let timeoutId: NodeJS.Timeout;

        const throttledResize = () => {
            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = setTimeout(handleResize, 100)
        };

        window.addEventListener('resize', throttledResize);
        return () => window.removeEventListener('resize', throttledResize)
    }, [])

    return windowSize
}