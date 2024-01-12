import { getSeconds, getMinutes, getHours, getDays } from "../utils/timeConverter"
import useTime from "../hooks/useTime"
import "../stylesheets/CountDown.css"

const SemiColon = () => {
    return (
        <div className="semi-colon">
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#E07575" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#E07575" />
            </svg>
        </div>
    )
}

export default function CountDown() {
    const seconds = useTime()

    return (
        <div className="count-down-container">
            <div className="count-down-days-container">
                <div>days</div>
                <div>{getDays(seconds).toString().padStart(2, '0')}</div>
            </div>
            <SemiColon />
            <div className="count-down-hours-container">
                <div>hours</div>
                <div>{getHours(seconds).toString().padStart(2, '0')}</div>
            </div>
            <SemiColon />
            <div className="count-down-minutes-container">
                <div>minutes</div>
                <div>{getMinutes(seconds).toString().padStart(2, '0')}</div>
            </div>
            <SemiColon />
            <div className="count-down-seconds-container">
                <div>seconds</div>
                <div>{getSeconds(seconds).toString().padStart(2, '0')}</div>
            </div>
        </div>
    )
}