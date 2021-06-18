import React, {useEffect, useRef} from 'react'
import {gsap, ScrollTrigger} from "gsap/all";

const DlaczegoMy = () => {
    let dlaczegoMyRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(dlaczegoMyRef.current, { x: 0, duration: .5, ease: "ease-in-out", scrollTrigger: {
                    trigger: ".dlaczegoMy",
                    start: "top 80%"
                }});
        }, 1000);
    }, []);

    return <section className="dlaczegoMy" ref={dlaczegoMyRef}>
        <h2 className="dlaczegoMy__header">
            Dlaczego my?
        </h2>

        <div className="dlaczegoMy__section">
            <h3 className="dlaczegoMy__section__header">
                Organizacja
            </h3>

            <ul className="dlaczegoMy__list">
                <li className="dlaczegoMy__listItem">
                    Przedszkole i Żłobek „123 Nauki i Sztuki” znajduje się w wolno stojącym budynku (1-piętrowym) oddalone od ruchu ulicznego.
                </li>
                <li className="dlaczegoMy__listItem">
                    Placówka otoczona jest dużym, zabezpieczonym ogrodem, wyposażonym w piaskownice oraz nowy, drewniany sprzęt ogrodowy.
                </li>
                <li className="dlaczegoMy__listItem">
                    Przedszkole posiada system monitorowania osób postronnych. Zainstalowano elektroniczny system otwierania bramki wejściowej na teren placówki oraz domofon przy drzwiach głównych do obiektu.
                </li>
                <li className="dlaczegoMy__listItem">
                    Przedszkole przyjmuje swoich małych interesantów od poniedziałku do piątku w godzinach od 6:30 do 17:30.
                </li>
                <li className="dlaczegoMy__listItem">
                    Przedszkole funkcjonuje przez cały rok szkolny
                </li>
                <li className="dlaczegoMy__listItem">
                    Liczebność grup wynosi w żłobku 8 dzieci a, w przedszkolu od 15 do 21 dzieci. W grupie „0” ilość dzieci może zostać zwiększona do 23 w oddziale.
                </li>
                <li className="dlaczegoMy__listItem">
                    W grupie dzieci najmłodszych (trzyletnich) nie praktykujemy leżakowania (spania). W ciągu całego dnia pobytu dziecka w przedszkolu przewiduje się czas na relaks oraz odpoczynek wg indywidualnych potrzeb
                </li>
            </ul>
        </div>

        <div className="dlaczegoMy__section">
            <h3 className="dlaczegoMy__section__header">
                Baza
            </h3>

            <ul className="dlaczegoMy__list">
                <li className="dlaczegoMy__listItem">
                    Każda grupa przedszkolna posiada własną, przestronną salę dydaktyczną wraz z sanitariatami.
                </li>
                <li className="dlaczegoMy__listItem">
                    Sale wyposażone są w wysokiej jakości sprzęt meblowy zgodny z unijnymi normami, pomoce i materiały dydaktyczne, księgozbiory, zabawki, dostosowane odpowiednio do poszczególnych grup wiekowych.
                </li>
                <li className="dlaczegoMy__listItem">
                    Biblioteka przedszkolna
                </li>
                <li className="dlaczegoMy__listItem">
                    Sala gimnastyczno-terapeutyczna
                </li>
                <li className="dlaczegoMy__listItem">
                    Pracownia doświadczalna
                </li>
                <li className="dlaczegoMy__listItem">
                    Wydzielone szatnie
                </li>
                <li className="dlaczegoMy__listItem">
                    Zaplecze kuchenne i jadalnia
                </li>
            </ul>
        </div>

        <button className="dlaczegoMy__btn">
            <a href="/dlaczego-my">
                Dowiedz się więcej
            </a>
        </button>
    </section>
}

export default DlaczegoMy;