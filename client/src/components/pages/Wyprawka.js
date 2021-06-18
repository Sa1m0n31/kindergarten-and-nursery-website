import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const Wyprawka = () => {
    return <>
        <Menu activePage="Strona główna" />
        <div className="pageContainer">
            <PurpleHeader text="Wyprawka przedszkolaka" />

            <div className="adaptacjaInner zerowkaInner wyprawkaMargin">
                <h4 className="adaptacja__inner__header">
                    Co będzie nieodzowne dla dzielnych przedszkolaków?
                </h4>
                <p>
                    Dziecko powinno być ubrane w wygodny, niekrępujący ruchów ubiór, umożliwiający
                    swobodne ubranie i rozebranie.
                    Ubranie powinno być dostosowane do pory roku i warunków atmosferycznych, pozwalające
                    na codzienny pobyt dziecka na świeżym powietrzu.
                </p>

                <h4 className="adaptacja__inner__header">
                        Ubranka do przedszkola:
                </h4>
                        <ul>
                            <li>kapcie antypoślizgowe zapinane na rzepy lub zatrzaski</li>
                            <li>strój sportowy na gimnastykę w woreczku – dres, koszulka, spodenki</li>
                                    <li>ubrania do przebrania (koszulka z krótkim i z długim rękawem, spodenki/spódniczka, dwie
                                        pary skarpet, dwie pary majteczek, rajstopy) oraz plastikowa torba na brudne ubrania.</li>
                        </ul>

                <h4 className="adaptacja__inner__header">
                        Ubranka do przedszkola:
                </h4>
                        <ul>
                            <li> zimą: ciepła kurtka, ocieplane i najlepiej wodoodporne spodnie, śniegowce, nieprzemakalne
                                rękawiczki, szalik, czapka, sweter lub polar</li>
                            <li>wiosną i jesienią: kurtka przeciwdeszczowa, bluza, czapka, kalosze na deszczowe dni</li>
                            <li>latem: przewiewne ubranie, w słoneczne dni – nakrycie głowy </li>
                        </ul>

                <h4 className="adaptacja__inner__header">
                    Do leżakowania - dla dzieci, które leżakują
                </h4>
                <ul>
                    <li>pościel: poduszka, kołdra lub kocyk z poszewkami, prześcieradło</li>
                    <li>piżamka/dresik</li>
                    <li>przytulanka</li>
                </ul>

                <h4 className="adaptacja__inner__header">
                    Artykuły higieniczne
                </h4>
                <ul>
                    <li>krem do twarzy na mroźne oraz słoneczne dni (z filtrem UV)</li>
                    <li>szczotka do włosów (dla dziewczynek)</li>
                    <li>dla dzieci używających pieluch – pieluchy jednorazowe, oliwka, krem do ciała.</li>
                </ul>

            </div>

            <PurpleHeader text="Wyprawka do żłobka" />

            <div className="adaptacjaInner zerowkaInner">
                <p>
                    Maluszki powinny być ubrane w wygodny, niekrępujący ruchów ubiór, umożliwiający
                    swobodne ubranie i rozebranie. Ubranie powinno być dostosowane do pory roku i
                    warunków atmosferycznych, pozwalające na codzienny pobyt dziecka na świeżym
                    powietrzu.
                </p>
                <h4 className="adaptacja__inner__header">
                    Ubranka do żłobka
                </h4>
                    <ul>
                        <li>
                            kapcie antypoślizgowe zapinane na rzepy lub zatrzaski
                        </li>
                        <li>
                            ubrania do przebrania (koszulka z krótkim i z długim rękawem, spodenki/spódniczka,
                            jedna para skarpet, dwie pary majteczek, getry, rajtki) oraz plastikowa torba na brudne
                            ubrania.
                        </li>
                    </ul>


                <h4 className="adaptacja__inner__header">
                    Ubranka na dwór - odpowiednie do pory roku i pogody
                </h4>
                <ul>
                    <li>
                        zimą: ciepła kurtka, ocieplane i najlepiej wodoodporne spodnie, śniegowce,
                        nieprzemakalne rękawiczki, szalik, czapka, sweter
                    </li>
                    <li>
                        wiosną i jesienią: kurtka przeciwdeszczowa, bluza, czapka, kalosze na deszczowe dni
                    </li>
                    <li>
                        latem: przewiewne ubranie, w słoneczne dni – nakrycie głowy
                    </li>
                </ul>

                <h4 className="adaptacja__inner__header">
                    Do leżakowania
                </h4>
                <ul>
                    <li>
                        pościel: poduszka, kołdra prześcieradło  która prana będzie przez personel Placówki
                        nie rzadziej niż dwa razy w tygodniu.
                    </li>
                    <li>
                        Przytulanka dziecka, lub nasze sówki  które otrzymują dzieci w ramach czesnego
                    </li>
                </ul>

                <h4 className="adaptacja__inner__header">
                    Artykuły higieniczne
                </h4>
                <ul>
                    <li>
                        krem do twarzy na mroźne oraz słoneczne dni (z filtrem UV)
                    </li>
                    <li>
                        kubek –niekapek
                    </li>
                    <li>
                        dla dzieci korzystających z butelki – smoczki i butelki
                    </li>
                    <li>
                        szczotka do włosów
                    </li>
                    <li>
                        oliwka, krem do ciała
                    </li>
                    <li>
                        dla dzieci używających pieluch – pieluchy jednorazowe
                    </li>
                </ul>
            </div>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Wyprawka;