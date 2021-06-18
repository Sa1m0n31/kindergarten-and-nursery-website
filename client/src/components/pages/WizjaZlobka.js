import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const WizjaZlobka = () => {
    return <>
        <Menu />
        <div className='pageContainer'>
            <PurpleHeader text="Wizja żłobka" />

            <main className="pageInFooterContainer">
                <section className="inFooter__section">
                    <h3 className="inFooter__header">
                        Naszym celem jest
                    </h3>

                    <ul className="inFooter__text inFooter__list">
                        <li>
                            zapewnienie dzieciom warunków pobytu jak najbardziej zbliżonych do warunków
                            domowych,
                        </li>
                        <li>
                            zapewnienie dzieciom pełnego bezpieczeństwa,
                        </li>
                        <li>
                            zapewnienie dzieciom opieki wychowawczej i pielęgniarskiej,
                        </li>
                        <li>
                            prowadzenie żywienia dzieci zgodnie z obowiązującymi normami,
                        </li>
                        <li>
                            współdziałanie z rodzicami w sprawach opieki i wychowania celem ujednolicenia
                            metod żywienia i pielęgnacji,
                        </li>
                        <li>
                            wspomaganie indywidualnego rozwoju dzieci,
                        </li>
                        <li>
                            informowanie na temat funkcjonowania i zdrowia dziecka,
                        </li>
                        <li>
                            prowadzenie zajęć edukacyjno – wychowawczych i rozwojowych w salach i na
                            powietrzu,
                        </li>
                        <li>
                            zapewnienie doraznej pomocy psychologicznej i metodycznej,
                        </li>
                        <li>
                            kształtowanie samodzielności,
                        </li>
                        <li>
                            indywidualne podejście do każdego dziecka, poszanowanie jego godności i
                            intymności,
                        </li>
                        <li>
                            uczenie zasad współpracy w grupie oraz właściwych relacji z rówieśnikami,
                        </li>
                        <li>
                            uczenie komunikowania się z otoczeniem,
                        </li>
                        <li>
                            przygotowanie dziecka do pobytu w przedszkolu.
                        </li>
                    </ul>
                </section>

                <section className="inFooter__section">
                    <h3 className="inFooter__header">
                        Naszym zadaniem jest
                    </h3>

                    <p className="inFooter__text">
                        Specjalnie przygotowane zajęcia pozwalają na rozwijanie mowy dziecka, poszerzania
                        słownictwa oraz zapoznawanie dzieci z podstawowymi pojęciami ułatwiającymi zrozumienie
                        dzieciom świata dorosłych. Wesołe ćwiczenia i zabawy pozwalają im rozwijać procesy
                        myślowe takie jak: pamięć, uwaga, koncentracja, zaj. ruchowe, muzyczne, plastyczne
                        prowadzone są w formie wesołych zabaw i ćwiczeń, dzięki czemu dzieci bardzo je lubią i
                        biorą w nich aktywny udział. Wszystko to odbywa się w sposób wykorzystujący naturalną
                        wrażliwość i ciekawość dzieci.
                    </p>
                    <p className="inFooter__text inFooter__text--smallMargin">
                        Chcemy, aby nasze dzieci wyrosły na śmiałe, dobrze radzące sobie w życiu maluchy, mające
                        właściwy kontakt z otoczeniem i dobrze czujące się we współczesnym świecie. Zależy nam,
                        aby dzieci były zadowolone, szczęśliwe, uśmiechnięte i radosne. Zrobimy wszystko, aby
                        maluchy czuły się u nas bezpieczne i kochane.
                    </p>
                </section>
            </main>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default WizjaZlobka;