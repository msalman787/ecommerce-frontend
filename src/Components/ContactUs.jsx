import "../stylesheets/ContactUs.css";
import RedButton from "./RedButton";

const Input = (props) => {
    return (
        <input {...props} />
    )
}

export default function ContactUs() {
    return (
        <div>
            <div className="contact-us-container">
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
                <form>
                    <div>
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input type="number" placeholder="Your Phone" pattern="" />
                    </div>
                    <Input type="text" placeholder="Name" />
                    <RedButton text="Send Message" clickFn={() => { }} />
                </form>
            </div>
        </div>
    )
}