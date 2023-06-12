import { useState, useEffect } from "react"

const useScrollPosition = () => {
    const [ scrollPosition, setScrollPosition ] = useState({"prev": 0, "current": 0})

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(prev => {
                return { "prev": prev.current, "current": window.pageYOffset }
            })
        }

        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
}


export default useScrollPosition;