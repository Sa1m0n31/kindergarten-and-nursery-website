import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import KadraData from "../../helpers/KadraData";
import KadraItem from "../KadraItem";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const Orzeczenia = () => {
    return <>
        <Menu activePage="Strona główna" />
        <div className="pageContainer">
            <PurpleHeader text="Orzeczenia" />

            <div className="adaptacjaInner zerowkaInner">
                <h4 className="adaptacjaInner__header">
                    Przyjmujemy dzieci z orzeczeniami:
                </h4>
                <ul>
                    <li>
                        z zaburzeniami integracji sensorycznej (nadwrażliwością lub podwrażliwością np. dotykową
                    </li>
                    <li>
                        z opóźnieniem i zaburzeniami rozwoju mowy
                    </li>
                    <li>
                        ze specyficznymi trudnościami szkolnymi, takimi jak: dysleksja, dysgrafia, dysortografia
                    </li>
                    <li>
                        z opóźnieniem rozwoju psychoruchowego
                    </li>
                    <li>
                        z ciąż wysokiego ryzyka, przedwcześnie urodzonymi lub znacznie po terminie
                    </li>
                    <li>
                        z niepełnosprawnością umysłową
                    </li>
                    <li>
                        niedowidzącymi i niedosłyszącymi
                    </li>
                    <li>
                        z autyzmem
                    </li>
                    <li>
                        z zespołem Downa, Aspergera, Reta, Williamsa, Turnera, Kinefertera
                    </li>
                    <li>
                        z MPD (mózgowym porażeniem dziecięcym)
                    </li>
                </ul>

                <h4 className="adaptacja__inner__header">
                    Co może nas niepokoić?
                </h4>
                <ul>
                    <li>
                        dziecko jest niespokojne, płaczliwe, ma kłopoty z zaśnięciem
                    </li>
                    <li>
                        ma trudności z samodzielnym piciem, żuciem, przełykaniem pokarmów
                    </li>
                    <li>
                        źle toleruje wykonywanie przy nim czynności
                        pielęgnacyjnych i higienicznych, takich jak: obcinanie paznokci, mycie twarzy, zębów, smarowanie kremem, czesanie
                    </li>
                    <li>
                        wiele czynności samoobsługowych wykonuje z trudem, powoli, niezdarnie
                    </li>
                    <li>
                        ma słabą równowagę: potyka się i upada częściej niż rówieśnicy
                    </li>
                    <li>
                        jest impulsywne, nadwrażliwe emocjonalnie, często się obraża
                    </li>
                    <li>
                        bywa uparte, negatywistyczne
                    </li>
                    <li>
                        wchodząc/schodząc ze schodów częściej niż inne dzieci trzyma się poręczy, niepewnie stawia kroki
                    </li>
                    <li>
                        przejawia duży lęk przed upadkiem lub wysokością
                    </li>

                </ul>
            </div>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Orzeczenia;