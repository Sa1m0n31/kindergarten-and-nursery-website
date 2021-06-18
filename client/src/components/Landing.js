import React, { useRef, useEffect } from "react";

import hero from '../static/img/hero.png'

import wave from '../static/img/wave-yellow.png';
import plusRed from '../static/img/plus-red.png'
import circlePurple from '../static/img/circle-purple.png'

import { gsap, ScrollTrigger } from 'gsap/all';

const Landing = () => {
   let landing = useRef(null);
   let landingContent = useRef(null);
   let afterLanding = useRef(null);

   let dek1 = useRef(null);
   let dek2 = useRef(null);
   let dek3 = useRef(null);
   let dek4 = useRef(null);

   useEffect(() => {
       /* Component mount */
      setTimeout(() => {
          gsap.registerPlugin(ScrollTrigger);
          const tl = gsap.timeline();
          tl.to(landing.current, { x: 0, duration: .5 });
          tl.to([landingContent.current, dek1.current, dek2.current, dek3.current, dek4.current], { opacity: 1, duration: .4 });

          gsap.to(afterLanding.current, { opacity: 1, x: 0, duration: .4, scrollTrigger: {
                  trigger: ".afterLanding",
                  start: "top 95%"
              }});
      }, 500);

   }, []);

   return <>
       <div className="landing" ref={landing}>
           {/* Decorations */}
           <img className="decoration decoration1" src={plusRed} alt="plus" ref={dek1} />
           <img className="decoration decoration2" src={circlePurple} alt="plus" ref={dek2} />
           <img className="decoration decoration3" src={wave} alt="plus" ref={dek3} />
           <img className="decoration decoration4" src={plusRed} alt="plus" ref={dek4} />

           <img className="landing__img" src={hero} alt="nauka-i-sztuka" />
           <div className="landingContent" ref={landingContent}>
               <h2 className="landingHeader">
                   Najfajniejszy Żłobek<br/>i Przedszkole w Swarzędzu
               </h2>
               <button className="landingBtn">
                   <a href="/zapisy-przedszkole">
                       Rekrutacja 2021/2022
                   </a>
               </button>
           </div>
       </div>

       <div className="afterLanding" ref={afterLanding}>
           <h2 className="afterLanding__header">
               Nasza misja i zadania
           </h2>
           <p className="afterLanding__text">
               Żłobek i Przedszkole 123 Nauki i Sztuki w Swarzędzu o profilu językowo-artystycznym wychowuje i kształtuje człowieka akceptującego siebie, wrażliwego, szanującego drugiego człowieka oraz środowisko przyrodnicze, gotowego do podjęcia nowych wyzwań w szkole, pragnącego szukać twórczych rozwiązań oraz radzącego sobie w sytuacjach trudnych, pełnego energii i pozytywnych emocji.
           </p>
       </div>

   </>
}

export default Landing;