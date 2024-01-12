import { useState, useEffect } from "react";

export default function useCountdown() {
    const finishTimestamp = 10 ** 13
    const now = new Date()
    const [seconds, setSeconds] = useState(finishTimestamp - now.getTime())

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