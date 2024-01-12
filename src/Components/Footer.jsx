import "../stylesheets/Footer.css"

const columnInfo = [
    ["Support", "Make up address here", "fakityfake@email.com", "+9999 88888 777"],
    ["My account", "Login/Register", "Cart", "Wishlist", "Shop"],
    ["Quick Link", "Privacy Policy", "Terms of Use", "FAQ", "Contact"]
]

const FooterColumn = ({ contents }) => {
    return (
        <div className="footer-column">
            {contents.map((content, i) => <div key={i}>{content}</div>)}
        </div>
    )
}

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                {columnInfo.map((contents, i) => <FooterColumn key={i} contents={contents} />)}
            </div>
            <div className="copyright">©  Copyright Rimel 2022. All right reserved</div>
        </div>
    )
}