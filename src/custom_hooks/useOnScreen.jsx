import { useState, useMemo, useEffect } from "react"

export default function useOnScreen(ref, t = 0.1) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting), { threshold: t }
    ), [ref])


    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}