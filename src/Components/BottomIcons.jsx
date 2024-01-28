import "../stylesheets/BottomIcons.css"
import CarDeliverySvg from "./svgComponents/CarDeliverySvg.jsx"
import CustomerServiceSvg from "./svgComponents/CustomerServiceSvg.jsx"
import SafeShieldSvg from "./svgComponents/SafeShieldSvg.jsx"


const SvgWrapper = ({ children }) => {
    return (
        <div className="center-child" style={{ width: '70px', height: '70px', backgroundColor: 'black', borderRadius: '50%' }}>
            <div className="center-child" style={{ width: '50px', height: '50px', backgroundColor: '#2F2E30', borderRadius: '50%' }}>
                {children}
            </div>
        </div>
    )
}

const SingleIcon = ({ children, text1, text2 }) => {
    return (
        <div className="single-icon-wrapper">
            <SvgWrapper>
                {children}
            </SvgWrapper>
            <div>{text1}</div>
            <div>{text2}</div>
        </div>
    )
}


export default function BottomIcons() {
    return (
        <div className="bottom-icons">
            <SingleIcon text1="FREE AND FAST DELIVERY" text2="Free delivery for all orders over $140">
                <CarDeliverySvg />
            </SingleIcon>
            <SingleIcon text1="24/7 CUSTOMER SERVICE" text2="Friendly 24/7 customer support">
                <CustomerServiceSvg />
            </SingleIcon>
            <SingleIcon text1="MONEY BACK GUARANTEE" text2="We reurn money within 30 days">
                <SafeShieldSvg />
            </SingleIcon>
        </div>
    )
}