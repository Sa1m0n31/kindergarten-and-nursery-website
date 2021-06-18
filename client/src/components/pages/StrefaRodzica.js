import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";

import planDnia from '../../static/img/plan.svg'
import jadlospis from '../../static/img/restaurant.svg'
import galeria from '../../static/img/gallery.svg'
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const StrefaRodzica = () => {
    return <>
        <Menu activePage="Strefa rodzica" />
        <div className="pageContainer">
            <PurpleHeader text="Strefa rodzica" />
            <div className="strefaRodzicaInner">
                <div className="strefaRodzica__item">
                    <h3 className="strefaRodzica__header">
                        Ramowy plan dnia
                    </h3>
                    <div className="strefaRodzica__imgWrapper">
                        <img className="strefaRodzica__img" src={planDnia} alt="ramowy-plan-dnia" />
                    </div>
                    <button className="strefaRodzica__button">
                        <a href="/ramowy-plan-dnia">
                            Zobacz
                        </a>
                    </button>
                </div>

                    <div className="strefaRodzica__item">
                        <h3 className="strefaRodzica__header">
                            Jadłospis
                        </h3>
                        <div className="strefaRodzica__imgWrapper">
                            <img className="strefaRodzica__img" src={jadlospis} alt="jadlospis" />
                        </div>
                        <button className="strefaRodzica__button">
                            <a href="/jadlospis">
                                Zobacz
                            </a>
                        </button>
                    </div>

                    <div className="strefaRodzica__item">
                        <h3 className="strefaRodzica__header">
                            Galeria
                        </h3>
                        <div className="strefaRodzica__imgWrapper">
                            <img className="strefaRodzica__img" src={galeria} alt="galeria" />
                        </div>
                        <button className="strefaRodzica__button">
                            <a href="/galeria">
                                Zobacz
                            </a>
                        </button>
                    </div>
            </div>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default StrefaRodzica;