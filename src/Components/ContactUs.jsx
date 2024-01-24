import "../stylesheets/ContactUs.css";
import RedButton from "./RedButton";
import OldPhoneSvg from "./svgComponents/OldPhoneSvg";
import MailSvg from "./svgComponents/MailSvg";
import { useState } from "react";

export default function ContactUs() {
    const [message, setMessage] = useState('')

    return (
        <div className="center-child" style={{ width: '100%', height: '100%', margin: '0', padding: '0', flexDirection: 'column', marginBottom: '8rem' }}>
            <h1 style={{
                color: 'black',
                fontSize: '2rem',
                fontStyle: 'italic',
                marginBottom: '4rem',
            }}>{message}</h1>
            <div className="contact-us-container" style={{ margin: '0', padding: '0' }}>
                <div className="left-panel">
                    <div>
                        <div>
                            <OldPhoneSvg />
                            <h1>Call to us</h1>
                        </div>
                        <div>
                            We are available 24/7, 7 days a week.
                        </div>
                        <div>
                            Phone: +8801611112222
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '0', border: '1px solid rgb(0,0,0,0.5)' }}></div>
                    <div>
                        <div>
                            <MailSvg />
                            <h1>Write to us</h1>
                        </div>
                        <div>
                            Fill out our form and we will contact you within 24 hours.
                        </div>
                        <div>
                            Emails: customer@exclusive.com
                        </div>
                        <div>
                            Emails: support@exclusive.com
                        </div>
                    </div>
                </div>
                <form className="right-panel">
                    <div >
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="number" placeholder="Your Phone" pattern="" />
                    </div>
                    <div>
                        <textarea type="textarea" placeholder="Message" />
                    </div>
                    <RedButton type='submit' text="Send Message" clickFn={(e) => {
                        e.preventDefault()
                        document.querySelector(".contact-us-container form.right-panel").reset();
                        setMessage('Message sent')
                        setTimeout(() => {
                            setMessage('')
                        }, 5000)
                    }} />
                </form>
            </div>
        </div>
    )
}