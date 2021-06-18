import React, {useEffect, useRef} from 'react'

import kadraImg from '../static/img/kadra-pedagogiczna.png'
import {gsap, ScrollTrigger} from "gsap/all";

const KadraPedagogiczna = () => {
    let kadraPedagogicznaRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(kadraPedagogicznaRef.current, { x: 0, duration: .5, ease: "ease-in-out", scrollTrigger: {
                    trigger: ".kadraPedagogiczna",
                    start: "top 80%"
                }});
        }, 1000);
    }, []);

    return <section className="kadraPedagogiczna" ref={kadraPedagogicznaRef}>
        <div className="kadraPedagogiczna__left">
            <h2 className="kadraPedagogiczna__header">
                Kadra pedagogiczna
            </h2>

            <div className="kadraPedagogiczna__text">
                <p className="kadraPedagogiczna__paragraph">
                    Kadra pedagogiczna Przedszkola i Żłobka „123 Nauki i Sztuki” to nauczyciele stale podnoszący swoje kwalifikacje zawodowe, dbający o rozwój dzieci oraz o atmosferę sprzyjającą zabawie i edukacji.
                </p>
                <p className="kadraPedagogiczna__paragraph">
                    Nasi nauczyciele są troskliwi, kreatywni i wrażliwi na potrzeby przedszkolaków. W swojej pracy dydaktyczno-wychowawczej realizują wymagania podstawy programowej wychowania przedszkolnego zatwierdzonej przez Ministerstwo Edukacji Narodowej, wykorzystują nowoczesne metody pracy z dzieckiem, tworzą własne programy i innowacje, uwzględniając indywidualne możliwości i potrzeby swoich wychowanków.
                </p>
                <p className="kadraPedagogiczna__paragraph">
                    Systematycznie uczestniczą w różnego rodzaju kursach, warsztatach i szkoleniach, co pozytywnie wpływa na pracę z dziećmi oraz na podnoszenie jakości pracy placówki. Zatrudniamy nauczycieli, którzy odbywają w naszej placówce awans zawodowy od nauczyciela kontraktowego do dyplomowanego, zdobywając wiedzę i doświadczenie na poszczególnych szczeblach awansu pod opieką i przy wspomaganiu opiekunów stażu.
                </p>
                <p className="kadraPedagogiczna__paragraph">
                    Kadrę placówki wspomagają swoją wiedzą i zaangażowaniem specjaliści – logopeda, psycholog oraz zespół pomocy pedagogiczno-psychologicznej, którzy skupieni są na wspomaganiu dzieci w ich rozwoju oraz rodziców w rozwiązywaniu sytuacji trudnych, a także w rozpoznawaniu uzdolnień i indywidualnych potrzeb każdego dziecka, bowiem naszym nadrzędnym celem jest kompleksowe wsparcie rozwoju wychowanków zgodne z ich potencjałem oraz możliwościami.
                </p>
            </div>

            <a className="kadraPedagogiczna__button" href="/kadra">
                Poznaj naszą kadrę!
            </a>
        </div>

        <div className="kadraPedagogiczna__right">
            <img className="kadraPedagogiczna__img" src={kadraImg} alt="kadra-pedagogiczna" />
        </div>
    </section>
}

export default KadraPedagogiczna;