import React, {useEffect, useRef} from 'react'

import bulb from './../static/img/bulb.svg'
import brain from './../static/img/brain.svg'
import baby from './../static/img/baby-boy.svg'

import {gsap, ScrollTrigger} from "gsap/all";

const StwarzamyWarunki = () => {
    let stwarzamyWarunkiRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();
            gsap.to(stwarzamyWarunkiRef.current, { x: 0, duration: .5, ease: "ease-in-out", scrollTrigger: {
                    trigger: ".stwarzamyWarunki",
                    start: "top 80%"
                }});
        }, 1000);
    }, []);

    return <section className="stwarzamyWarunki" ref={stwarzamyWarunkiRef}>
        <h2 className="stwarzamyWarunki__header">
            Stwarzamy warunki do
        </h2>

        <div className="stwarzamyWarunki__inner">
            <div className="stwarzamyWarunki__item">
                <div className="stwarzamyWarunki__imgWrapper">
                    <img className="stwarzamyWarunki__img" src={bulb} alt="zarowka" />
                </div>

                <p className="stwarzamyWarunki__text">
                    stymulowania <b>zdolności twórczych</b> dziecka w różnych dziedzinach jego aktywności
                </p>
            </div>

            <div className="stwarzamyWarunki__item">
                <div className="stwarzamyWarunki__imgWrapper">
                    <img className="stwarzamyWarunki__img" src={baby} alt="dziecko" />
                </div>

                <p className="stwarzamyWarunki__text">
                    wszechstronnego <b>rozwoju psychofizycznego i społecznego</b> dziecka
                </p>
            </div>

            <div className="stwarzamyWarunki__item">
                <div className="stwarzamyWarunki__imgWrapper">
                    <img className="stwarzamyWarunki__img" src={brain} alt="rozwoj" />
                </div>

                <p className="stwarzamyWarunki__text">
                    podejmowania działań przez dziecko, które <b>wzbogacają</b> jego <b>doświadczenia i wiedzę</b>
                </p>
            </div>
        </div>
    </section>
}

export default StwarzamyWarunki;