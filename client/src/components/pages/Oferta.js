import React from "react";
import PurpleHeader from "../PurpleHeader";
import Menu from "../Menu";

import { gsap } from 'gsap/all';

import plus from '../../static/img/plus_circle.svg'
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";
import AdaptacjaPrzedszkole from "../AdaptacjaPrzedszkole";
import AdaptacjaZlobek from "../AdaptacjaZlobek";

const Oferta = ({offer}) => {
    const toggleOffer = (n) => {
        const offerToToggle = document.querySelector(`.offerItem:nth-child(${n+1})>.offerItem__text>p`);
        const tl = gsap.timeline();
        if(offerToToggle.style.opacity !== '1') {
            /* Show */
            tl.to(offerToToggle, { height: "auto", paddingTop: "25px", duration: .2 });
            tl.to(offerToToggle, { opacity: 1, duration: .2 });
        }
        else {
            /* Hide */
            tl.to(offerToToggle, { opacity: 0, duration: .2 });
            tl.to(offerToToggle, { height: 0, paddingTop: 0, duration: .2 });
        }
    }

    return <>
        <Menu activePage="Oferta" />
        <div className="pageContainer">
            <PurpleHeader text={offer.title} />

            <div className="priceListContainer">
                {offer.priceList.blocks.map((item, i) => {
                    return <div className="priceListItem" key={i}>
                        <h3 className="priceListItem__header">
                            {item.title} - <span className="priceListItem__small">{item.subtitle}</span>
                        </h3>
                        <h3 className="priceListItem__header">
                            {item.cost} PLN
                        </h3>
                        {item.extraFee1 || item.extraFee1 === 0 ? <div className="priceListItem__extraFeeContainer">
                            <h4 className="priceListItem__extraFee">
                                + {item.extraFee1} zł stawka żywieniowa
                            </h4>
                        </div> : ""}
                    </div>
                })}
            </div>

            <PurpleHeader text="Oferta w ramach czesnego" />

            <div className="offerContainer">
                {offer.offer.map((item, i) => {
                    return <div className="offerItem" key={i}>
                        <div className="offerItem__header">
                            <h4 className="offerName">
                                {item.title}
                            </h4>
                            <div className="offerItem__right">
                                <h5 className="offerHint">
                                    Rozwiń opis
                                </h5>
                                <button className="offerBtn" onClick={() => toggleOffer(i)}>
                                    <img className="offerBtn__img" src={plus} alt="rozwin" />
                                </button>
                            </div>
                        </div>
                        <div className="offerItem__text">
                            <p className="offerItem__text__p">
                                {item.text}
                            </p>
                        </div>
                    </div>
                })}
            </div>


            {offer.title === 'Oferta przedszkola' ?
                <AdaptacjaPrzedszkole />
             : <AdaptacjaZlobek />}

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Oferta;