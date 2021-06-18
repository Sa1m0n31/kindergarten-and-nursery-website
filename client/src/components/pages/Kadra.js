import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import KadraItem from "../KadraItem";

import brain from './../../static/img/brain.svg'
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

import KadraData from "../../helpers/KadraData";

const Kadra = () => {
    return <>
        <Menu activePage="Kadra" />
        <div className="pageContainer">
            <PurpleHeader text="Nasza kadra" />

            <p className="kadra__intro">
                Kadrę pedagogiczną tworzy zespół młodych, wykwalifikowanych i
                kreatywnych nauczycieli z wieloletnim doświadczeniem w pracy z dziećmi,
                dbających o ciepłą i przyjazną atmosferę. Pedagodzy naszego przedszkola
                pracują z sercem, niezwykłą pasją i zaangażowaniem. Wspomagają i
                rozwój dzieci mając na uwadze ich wrodzone predyspozycje i zdolności.
                Zajęcia odbywają się w małych grupach w celu lepszego poznania dziecka
                przez nauczyciela, co umożliwia indywidualne podejście do każdego z nich.
                W swojej pracy aktywnie wdrażają nowatorskie osiągnięcia dydaktyki w
                zakresie nauczania, rozwijania zainteresowań, uzdolnień i sprawdzania
                postępów dziecka. Nauczyciele stale podnoszą swoje kwalifikacje, biorąc
                aktywny udział w spotkaniach metodycznych, kursach, szkoleniach, radach
                pedagogicznych oraz studiach podyplomowych.
            </p>

            <div className="kadraInner">
                {KadraData.map(item => {
                    return <KadraItem
                        letter={item.letter}
                        name={item.name}
                        func={item.func}
                        description={item.description} />
                })}
            </div>
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Kadra;