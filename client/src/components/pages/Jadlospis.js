import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";
import JadlospisDay from "../JadlospisDay";

import JadlospisData from "../../helpers/JadlospisData";

const Jadlospis = () => {
    return <>
        <Menu activePage="Strefa rodzica" />
        <div className="pageContainer">
            <PurpleHeader text="Jadłospis" />

            <div className="jadlospis__inner">
                {JadlospisData.map((item, i) => {
                    return <JadlospisDay
                        day={item.day}
                        sniadanie={item.sniadanie}
                        obiad={item.obiad}
                        podwieczorek={item.podwieczorek} />
                })}
            </div>

            <div className="captions">
                <h6>* - wyroby własne</h6>
                <h6>Jadłospis może ulec zmianie z przyczyn niezależnych od nas</h6>
            </div>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Jadlospis;