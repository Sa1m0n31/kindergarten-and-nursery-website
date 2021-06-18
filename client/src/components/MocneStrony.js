import React, { useState, useEffect, useRef } from "react";

import girl from '../static/img/girl.png'

import { gsap, ScrollTrigger } from 'gsap/all'

const MocneStrony = () => {
    const mocneStrony = useRef(null);
    const moreListSpan = useRef(null);

    let [fullList, setFullList] = useState(false);

    useEffect(() => {
       setTimeout(() => {
           gsap.registerPlugin(ScrollTrigger);
           const tl = gsap.timeline();
           gsap.to(mocneStrony.current, { x: 0, duration: .5, ease: "ease-in-out", scrollTrigger: {
                   trigger: ".mocneStrony",
                   start: "top 60%"
               }});
       }, 1000);
    }, []);

    const moreList = () => {
        if(fullList) {
            setFullList(false);
            moreListSpan.current.style.opacity = "0";
            moreListSpan.current.style.height = "0";
        }
        else {
            setFullList(true);
            moreListSpan.current.style.opacity = "1";
            moreListSpan.current.style.height = "auto";
        }
    }

    return <section className="mocneStrony" ref={mocneStrony}>
        <div className="mocneStrony__description">
            <h2 className="mocneStrony__header">
                Mocne strony
            </h2>

            <ul className="mocneStrony__list">
                <li className="mocneStrony__listItem">
                    stosujemy zasadę indywidualnego – podmiotowego traktowania każdego dziecka, z zachowaniem jego potrzeb, możliwości oraz zainteresowań;
                </li>
                <li className="mocneStrony__listItem">
                    wychowujemy małego człowieka, akceptującego siebie, wrażliwego, szanującego drugiego człowieka, radzącego sobie w trudnych sytuacjach, pełnego energii i pozytywnych emocji;
                </li>
                <li className="mocneStrony__listItem">
                    kształcimy kreatywne, twórcze dziecko poprzez stymulowanie zdolności w rożnych dziedzinach jego aktywności;
                </li>
                <li className="mocneStrony__listItem">
                    kierujemy edukacją przedszkolną na poszczególnych etapach rozwoju dziecka tak, aby uzyskało wysoka gotowość szkolną;
                </li>
                <li className="mocneStrony__listItem">
                    wspomagamy rozwój każdego dziecka, wyrównując jego szanse edukacyjne poprzez zajęcia korekcyjno-kompensacyjne, współprace z nauczycielem-wychowawcą, psychologiem, logopedą, poradnią pedagogiczno-psychologiczną;
                </li>
                <li className="mocneStrony__listItem">
                    wszystkie działania wychowawczo-edukacyjne prowadzone są przez kreatywną, profesjonalną, systematycznie doskonaląca swoją wiedzę i umiejętności kadrę pedagogiczną;
                </li>
                <li className="mocneStrony__listItem">
                    tworzymy sprzyjająca atmosferę w placówce, wpływającą na pełną aklimatyzację i adaptację dziecka w warunkach przedszkolnych;
                </li>


                <span className="mocneStrony__moreList" ref={moreListSpan}>
                    <li className="mocneStrony__listItem">
                    systematycznie dostosowujemy naszą bazę dydaktyczną i wyposażenie placówki do wysokich standardów edukacyjnych;
                    </li>
                    <li className="mocneStrony__listItem">
                        posiadamy duży, ogrodzony, monitorowany, samodzielny, zadbany ogród przedszkolny, wyposażony w nowe, bezpieczne urządzenia rekreacyjne, położony w spokojnym i zielonym otoczeniu;
                    </li>
                    <li className="mocneStrony__listItem">
                        posiadamy duży, ogrodzony, monitorowany, samodzielny, zadbany ogród przedszkolny, wyposażony w nowe, bezpieczne urządzenia rekreacyjne, położony w spokojnym i zielonym otoczeniu;
                    </li>
                    <li className="mocneStrony__listItem">
                        wspomagamy rodziców w przygotowywaniu indywidualnych diet żywieniowych, według indywidualnych zaleceń – wskazań rodziców, lekarza.
                    </li>
                </span>

                <button className="mocneStrony__moreBtn" onClick={() => moreList()}>
                    {fullList ? "Zwiń" : "Rozwiń"}
                </button>
            </ul>
        </div>

        <div className="mocneStrony__imgWrapper">
            <img className="mocneStrony__img" src={girl} alt="dziewczynka" />
        </div>
    </section>
}

export default MocneStrony;