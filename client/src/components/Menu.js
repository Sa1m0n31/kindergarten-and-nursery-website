import React, { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap/all';

import logo from '../static/img/zlobek-logo.png'
import close from '../static/img/close.png'

import MenuInner from "./MenuInner";

const Menu = ({activePage}) => {
    const menuRef = useRef(null);
    const x = useRef(null);
    let menuInner;

    useEffect(() => {
        menuInner = document.querySelector(".menuMobile>.topMenu__menu");
    }, []);

    const openMenu = () => {
        const tl = gsap.timeline();
        gsap.set(menuRef.current, { display: "block" });
        tl.to(menuRef.current, { height: "100vh", duration: .4 });
        tl.to([x.current, menuInner], { opacity: 1, duration: .4 });
    }

    const closeMenu = () => {
        const tl = gsap.timeline();
        tl.to([x.current, menuInner], { opacity: 0, duration: .4 });
        tl.to(menuRef.current, { height: 0, duration: .4 });
        tl.to(menuRef.current, { display: "none" });
    }

    const scrollToTop = () => {
        window.location.href = "/";
    }

    return <menu className="topMenu">
        <button className="topMenu__logoContainer" onClick={() => scrollToTop()}>
            <img className="topMenu__logoImg" src={logo} alt="zlobek-i-przedszkole-nauki-i-sztuki" />
        </button>

        <MenuInner activePage={activePage} />

        {/*Mobile menu*/}
        <div className="hamburgerMenu" onClick={() => { openMenu() }}>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
        </div>

        <div className="menuMobile" ref={menuRef}>
            <button className="menuMobile__closeBtn" onClick={() => closeMenu()} ref={x}>
                <img className="menuMobile__closeBtn__img" src={close} alt='wyjdz' />
            </button>

            <MenuInner />
        </div>
    </menu>
}

export default Menu;