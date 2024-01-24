import { useState, useEffect } from "react";

export default function useCountdown() {
    const now = new Date()
    const finishTimestamp = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    const [seconds, setSeconds] = useState(Math.floor((finishTimestamp.getTime() - now.getTime()) / 1000))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return seconds
}