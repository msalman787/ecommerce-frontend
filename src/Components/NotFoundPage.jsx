import "../stylesheets/NotFoundPage.css";

import RedButton from "./RedButton";

export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <h1>404 - Not Found!</h1>
            <p>Your visited page not found. You may go home page.</p>
            <RedButton text="Back to home page" />
        </div>
    )
}