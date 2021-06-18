import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const WizjaPrzedszkola = () => {
    return <>
        <Menu />
        <div className='pageContainer'>
            <PurpleHeader text="Wizja przedszkola" />

            <main className="pageInFooterContainer">
                <section className="inFooter__section">
                    <ul className="inFooter__text inFooter__list">
                        <li>
                            Nasze przedszkole jest otwarte na potrzeby zarówno dzieci jak i rodziców, jest miejscem
                            świetnej zabawy, zdobywania wiedzy oraz pewności siebie.
                        </li>
                        <li>
                            Staramy się dać  każdemu dziecku szansę rozwoju  na miarę  jego
                            możliwości.
                        </li>
                        <li>
                            Staramy się cały czas ulepszać i unowocześniać nasze przedszkole, aby dzieci wyniosły z
                            niego jak największy bagaż pozytywnych doświadczeń oraz wiedzy.
                        </li>
                        <li>
                            Chcemy, zapewnić solidne podstawy do kontynuowania nauki  języków obcych w
                            miarę możliwości rozwojowych dziecka.
                        </li>
                        <li>
                            Zapewniamy naukę w odpowiednich grupach wiekowych.
                        </li>
                        <li>
                            Pragniemy w każdym dziecku rozbudzać ciekawość świata i ludzi, spostrzegawczość
                            oraz wrażliwość.
                        </li>
                        <li>
                            Uczymy dzieci poczucia własnej wartości, wiary we własne możliwości oraz koleżeństwa.
                        </li>
                        <li>
                            Staramy się zapewnić wszechstronny rozwój umysłowy, fizyczny, emocjonalny oraz
                            społeczny dziecka.
                        </li>
                    </ul>

                    <blockquote className="inFooter__quote">
                        NASZYM NAJWIĘKSZYM DOBREM JEST DOBRO DZIECKA, STARAMY SIĘ
                        PRZYGOTOWAĆ JE DO ODNOSZENIA SUKCESÓW EDUKACYJNYCH I
                        JĘZYKOWYCH NA MIARĘ ICH INDYWIDUALNYCH MOŻLIWOŚCI.
                    </blockquote>
                </section>
            </main>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default WizjaPrzedszkola;