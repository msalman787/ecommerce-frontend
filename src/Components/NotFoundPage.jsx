import { useNavigate } from "react-router-dom";
import "../stylesheets/NotFoundPage.css";

import RedButton from "./RedButton";

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <div className="not-found-page">
            <h1>404 - Not Found!</h1>
            <p>Your visited page not found. You may go home page.</p>
            <RedButton text="Back to home page" clickFn={() => navigate('/')} />
        </div>
    )
}