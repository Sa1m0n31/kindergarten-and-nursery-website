import React, { useState, useEffect } from 'react';
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Gallery from "../../helpers/Gallery";
import Kontakt from "./../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const Galeria = () => {
    let [isOpen, setIsOpen] = useState(false);
    let [photoIndex, setPhotoIndex] = useState(0);
    let [zlobek, setZlobek] = useState(false);

    useEffect(() => {
        const galeriaZlobek = document.querySelectorAll(".galeriaZlobek");
        const galeriaPrzedszkole = document.querySelectorAll(".galeriaPrzedszkole");
        if(zlobek) {
            galeriaZlobek.forEach(item => {
                item.style.display = "block";
            });
            galeriaPrzedszkole.forEach(item => {
                item.style.display = "none";
            });
        }
        else {
            galeriaZlobek.forEach(item => {
                item.style.display = "none";
            });
            galeriaPrzedszkole.forEach(item => {
                item.style.display = "block";
            });
        }
    }, [zlobek]);

    const openGallery = (n) => {
        setPhotoIndex(n);
        setIsOpen(true);
    }

    return <>
        {isOpen &&
        <Lightbox mainSrc={Gallery[photoIndex]}
                  nextSrc={Gallery[(photoIndex + 1) % Gallery.length]}
                  prevSrc={Gallery[(photoIndex + Gallery.length - 1) % Gallery.length]}
                  onMovePrevRequest={() =>
                      setPhotoIndex((photoIndex + Gallery.length - 1) % Gallery.length)
                  }
                  onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % Gallery.length)
                  }
                  onCloseRequest={() => setIsOpen(false)} />}
        <Menu activePage="Galeria" />
        <div className="pageContainer">

            <PurpleHeader text="Galeria" />

            <div className="galeriaButtons">
                <button id={zlobek ? "" : "galeriaBtn--dark"} className="galeriaBtn" onClick={() => setZlobek(false)}>
                    Przedszkole
                </button>
                <button id={zlobek ? "galeriaBtn--dark" : ""} className="galeriaBtn" onClick={() => setZlobek(true)}>
                    Żłobek
                </button>
            </div>

            <main className="galeriaContainer">
                {Gallery.map((item, i) => {
                    return <div className={i % 2 ? "galeriaWrapper galeriaZlobek" : "galeriaWrapper galeriaPrzedszkole"} key={i} onClick={() => { openGallery(i) }}>
                        <img className="galeriaItem" src={item} alt="przedszkole-nauki-i-sztuki" />
                    </div>
                })}
            </main>
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Galeria;