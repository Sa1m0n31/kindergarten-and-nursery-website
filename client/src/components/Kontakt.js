import React, {useEffect, useRef} from "react";

import location from './../static/img/location.svg'
import phone from './../static/img/phone.svg'
import clock from './../static/img/clock.svg'
import {gsap, ScrollTrigger} from "gsap/all";

const Kontakt = () => {
    let kontakt1 = useRef(null);
    let kontakt2 = useRef(null);
    let kontakt3 = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();
            gsap.to(kontakt1.current, { opacity: 1, duration: .5, ease: "ease-in-out", scrollTrigger: {
                    trigger: ".kontakt",
                    start: "top 80%"
                }})
                .then(() => {
                    gsap.to(kontakt2.current, { opacity: 1, duration: .5, ease: "ease-in-out", scrollTrigger: {
                            trigger: ".kontakt",
                            start: "top 80%"
                        }})
                        .then(() => {
                            gsap.to(kontakt3.current, { opacity: 1, duration: .5, ease: "ease-in-out", scrollTrigger: {
                                    trigger: ".kontakt",
                                    start: "top 80%",

                                }});
                        });
                });
        }, 1000);
    }, []);

    return <section className="kontakt">
        <div className="kontakt__item" ref={kontakt1}>
            <img className="kontakt__item__img" src={location} alt="lokalizacja" />
            <h4 className="kontakt__data">
                <span className="bold">Żłobek i Przedszkole 123 Nauki i Sztuki</span>
                <span>ul. Kórnicka 123</span>
                <span>62-020 Swarzędz</span>
            </h4>
        </div>

        <div className="kontakt__item" ref={kontakt2}>
            <img className="kontakt__item__img" src={clock} alt="czas-otwarcia" />
            <h4 className="kontakt__data">
                <span className="bold">Godziny otwarcia:</span>
                <span>6:30 - 17:30</span>
            </h4>
        </div>

        <div className="kontakt__item" ref={kontakt3}>
            <img className="kontakt__item__img" src={phone} alt="dane-kontaktowe" />
            <h4 className="kontakt__data">
                <span className="bold">Dane kontaktowe:</span>
                <span>504 111 224</span>
                <span>przedszkolenaukiisztuki@interia.pl</span>
            </h4>
        </div>
    </section>
}

export default Kontakt;