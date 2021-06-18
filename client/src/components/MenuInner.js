import React from "react";

import down from '../static/img/arrow_down.svg';

const MenuInner = ({activePage}) => {

    return <ul className="topMenu__menu">
        <li className="topMenu__item">
            <a className="topMenu__item__link" href="/">Strona główna</a>
        </li>
        {window.innerWidth > 1200 ? <li className="topMenu__item" id={activePage === 'Oferta' ? "border" : ""}>
            <a className="topMenu__item__link" href="#">Oferta</a>
            <img className="topMenu__item__arrow" src={down} alt="na-dol" />
            <ul className="topMenu__dropdown topMenu__dropdown--three">
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/przedszkole">
                        Przedszkole
                    </a>
                </li>
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/zlobek">
                        Żłobek
                    </a>
                </li>
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/zerowka">
                        Zerówka
                    </a>
                </li>
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/wyprawka">
                        Wyprawka
                    </a>
                </li>
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/orzeczenia">
                        Oddział integracyjny
                    </a>
                </li>
            </ul>
        </li> : <span className="below1200"><li className="topMenu__item bt--none" id={activePage === 'Oferta' ? "border" : ""}>
            <a className="topMenu__item__link" href="/przedszkole">Przedszkole</a>
        </li>
            <li className="topMenu__item" id={activePage === 'Oferta' ? "border" : ""}>
                <a className="topMenu__item__link" href="/zlobek">Żłobek</a>
            </li>
            <li className="topMenu__item" id={activePage === 'Oferta' ? "border" : ""}>
                <a className="topMenu__item__link" href="/zerowka">Zerówka</a>
            </li>
            <li className="topMenu__item" id={activePage === 'Oferta' ? "border" : ""}>
                <a className="topMenu__item__link" href="/wyprawka">Wyprawka</a>
            </li>
            <li className="topMenu__item" id={activePage === 'Oferta' ? "border" : ""}>
                <a className="topMenu__item__link" href="/orzeczenia">Oddział integracyjny</a>
            </li>
        </span>}
        <li className="topMenu__item" id={activePage === 'Kadra' ? "border" : ""}>
            <a className="topMenu__item__link" href="/kadra">Kadra</a>
        </li>
        <li className="topMenu__item" id={activePage === 'Kuchnia' ? "border" : ""}>
            <a className="topMenu__item__link" href="/kuchnia">Kuchnia</a>
        </li>
        {window.innerWidth > 1200 ? <li className="topMenu__item" id={activePage === 'Zapisy' ? "border" : ""}>
            <a className="topMenu__item__link" href="#">Zapisy</a>
            <img className="topMenu__item__arrow" src={down} alt="na-dol" />
            <ul className="topMenu__dropdown">
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/zapisy-przedszkole">
                        Przedszkole
                    </a>
                </li>
                <li className="topMenu__dropdown__item">
                    <a className="topMenu__item__link" href="/zapisy-zlobek">
                        Żłobek
                    </a>
                </li>
            </ul>
        </li> : <span className="below1200">
            <li className="topMenu__item bt--none" id={activePage === 'Zapisy' ? "border" : ""}>
                <a className="topMenu__item__link" href="/zapisy-przedszkole">Zapisy do przedszkola</a>
            </li>
            <li className="topMenu__item" id={activePage === 'Kuchnia' ? "border" : ""}>
                <a className="topMenu__item__link" href="/zapisy-zlobek">Zapisy do żłobka</a>
            </li>
        </span>}
        <li className="topMenu__item" id={activePage === 'Strefa rodzica' ? "border" : ""}>
            <a className="topMenu__item__link" href="/strefa-rodzica">Strefa rodzica</a>
        </li>
        <li className="topMenu__item" id={activePage === 'Galeria' ? "border" : ""}>
            <a className="topMenu__item__link" href="/galeria">Galeria</a>
        </li>
        <li className="topMenu__item" id={activePage === 'Kontakt' ? "border" : ""}>
            <a className="topMenu__item__link" href="/kontakt">Kontakt</a>
        </li>
    </ul>
}

export default MenuInner;