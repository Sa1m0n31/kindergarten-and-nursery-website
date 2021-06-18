import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const Zerowka = () => {
    return <>
        <Menu activePage="Oferta" />
        <div className="pageContainer">
            <PurpleHeader text="Zerówka" />

            <div className="adaptacjaInner zerowkaInner">
                <p>
                    Od września 2021 nasze przedszkole prowadzi zerówkę, dedykowaną dzieciom, które zgodnie z
                    rozporządzeniem MEN z dnia 23 grudnia 2008 są objęte obowiązkowym rocznym przygotowaniem
                    przed podjęciem nauki w klasie pierwszej szkoły podstawowej. Nasza kadra pedagogiczna wspomoże
                    rozwój dzieci tak, aby osiągnęły dojrzałość szkolną.
                </p>
                <p>
                    W naszej zerówce dzieci uczą się dwóch języków, rozszerzonego <b>języka angielskiego</b> oraz <b>języka
                    hiszpańskiego</b>.
                </p>
                <p>
                    Sale wyposażone są w tablicę interaktywną, rzutnik multimedialny, komputer ze stałym łączem do
                    internetu, oraz nagłośnienie, dzięki temu nauka i zabawa staje się bardziej atrakcyjna, a dzieci szybciej
                    i lepiej przyswajają wiedze. Takie połączenie daje bardzo ciekawy zestaw dydaktyczny, którego
                    możliwości nie można z niczym porównać. Zerówkowicze przy rozpoznawaniu figur geometrycznych
                    wciągane są do zabawy poprzez wskazywanie odpowiedniej figury, która zmienia kolor. Przy nauce
                    liczenia wykorzystywana jest np. gra w żabki. Dziecko musi wskazać, na który listek ma skoczyć żabka,
                    by pokonać podaną liczbę listków. Na zajęciach językowych dzieci korzystają z programów
                    przystosowanych do współpracy z interaktywnymi tablicami . Umożliwiają one np. poznawanie nazw
                    kolorów, literek itp. Gra w pary wyrabia spostrzegawczość i uczy nazw przedmiotów. Dzieci korzystają
                    z pisaka, przesuwają wyrazy po tablicy i tak np. uczą się budować proste zdania. Im starsze dzieci tym
                    więcej możliwości. Tablica interaktywna staje się bramą do skarbca edukacyjnych możliwości.
                </p>
                <p>
                    Przedszkole Językowe zaprasza wszystkie dzieci do naszej zerówki, w której w bezpiecznych
                    przedszkolnych warunkach będą realizowały szeroki program nauczania z wykorzystaniem tablicy
                    interaktywnej.
                </p>
                <p>
                    <b>Już przyjmujemy zapisy!</b>
                </p>
                <p>
                    <b>Zapraszamy!</b>
                </p>
            </div>


            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Zerowka;