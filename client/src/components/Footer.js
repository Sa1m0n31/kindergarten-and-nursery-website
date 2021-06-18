import React from "react";

const Footer = () => {
    return <footer className="footer">
        <ul className="footer__menu">
            <li className="footer__menu__item">
                <a href="/dlaczego-my">
                    Dlaczego my
                </a>
            </li>
            <li className="footer__menu__item">
                <a href="/nasza-misja">
                    Nasza misja
                </a>
            </li>
            <li className="footer__menu__item">
                <a href="/wizja-zlobka">
                    Wizja żłobka
                </a>
            </li>
            <li className="footer__menu__item">
                <a href="/wizja-przedszkola">
                    Wizja przedszkola
                </a>
            </li>
            <li className="footer__menu__item">
                <a href="/rodo">
                    RODO
                </a>
            </li>
        </ul>
        <div className="footer__bottom">
            <h6>&copy; Przedszkole 123 Nauki i Sztuki</h6>
            <h6>Projekt i wykonanie: <a href="https://skylo.pl" rel="noreferrer">skylo.pl</a></h6>
        </div>
    </footer>
}

export default Footer;