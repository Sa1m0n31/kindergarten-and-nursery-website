import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

import k1 from '../../static/img/kuchnia1.jpg'
import k2 from '../../static/img/kuchnia2.jpg'

const Kuchnia = () => {
    return <>
        <Menu activePage="Kuchnia" />
        <div className="pageContainer">
            <PurpleHeader text="Kuchnia" />
            <div className="kuchniaInner">
                <h3 className="kuchnia__header">
                    Gotujemy u siebie. Świadomie. Zdrowo. Świeżo.
                </h3>
                <p className="kuchnia__text">
                    To kolejny punkt, dla którego warto wybrać Żłobek i Przedszkole 123 Nauki i Sztuki!​
                    Zdrowa, urozmaicona i pełna składników odżywczych dieta dzieci to podstawa w​
                    naszej placówce – na tym polu nie ma dla nas kompromisów ani miejsca na​
                    negocjacje :) Nie tylko wspieramy rozwój dzieci dzięki zdrowym jadłospisom, ale i​
                    robimy co możemy, aby kształtować dobre postawy żywieniowe, budować​
                    zdrowe nawyki, pokazywać nowe smaki, inspirować i zachęcać do​
                    eksperymentów.
                </p>

                <img className="kuchnia__img" src={k1} alt="kuchnia" />

                <h3 className="kuchnia__header">
                    Dieta opracowana przez specjalistów
                </h3>
                <p className="kuchnia__text">
                    Zdrowo gotujemy, a posiłki podawane dzieciom przez cały dzień są odpowiednio​
                    zbilansowane do ich potrzeb i wieku – wszystkie nasze jadłospisy są ustalane​
                    przez dietetyka dziecięcego z dużym doświadczeniem. Nic dziwnego, że nasze​
                    maluchy rosną jak na drożdżach ;)
                </p>

                <h3 className="kuchnia__header">
                    Gotujemy zdrowo
                </h3>
                <p className="kuchnia__text">
                    Ograniczone smażenie, mało cukru, niewiele soli. Mięso? Tylko dobrej jakości,​
                    dwa razy w tygodniu – chcemy, aby Wasze dzieci pokochały również warzywa,​
                    także te strączkowe. Słodziki? Znamy i korzystamy z lepszych niż cukier.​
                    Urozmaicona, zdrowa dieta to podstawa naszej kuchni. Jadłospis na ten tydzień?​
                    Sprawdź go w naszej placówce.
                </p>

                <h3 className="kuchnia__header">
                    Bez glutenu, bez laktozy, wege? Nie ma problemu
                </h3>
                <p className="kuchnia__text">
                    Jesteśmy otwarci na różne potrzeby żywieniowe naszych podopiecznych.​
                    Wszystkie potrawy przygotowane przez naszą kuchnie są zdrowe i​
                    pełnowartościowe, a do tego uwzględniamy indywidualne potrzeby Twojego​
                    dziecka, nie zapominając o alergiach. A Ty o nic nie musisz się martwić!
                </p>

                <img className="kuchnia__img" src={k2} alt="kuchnia" />

                <h3 className="kuchnia__header">
                    Pijemy wodę!
                </h3>
                <p className="kuchnia__text">
                    Woda + ziołowe herbatki od czasu do czasu. To napoje, które podajemy naszym​
                    dzieciom, szczególnie zachęcając ich do picia w upały. U nas nie ma soczków i​
                    dosładzanych kompocików – tego możecie być pewni!
                </p>

                <h3 className="kuchnia__header">
                    Edukujemy o jedzeniu
                </h3>
                <p className="kuchnia__text">
                    Warsztaty Kuchcikowo – pełne zabawy i wspólnego gotowania remedium na​
                    każdego niejadka. Nauka samodzielnego jedzenia, opowieści o witaminach i​
                    składnikach odżywczych, wiedza o zdrowiu – staramy się budować świadomość​
                    żywieniową Młodego Pokolenia. I chętnie angażujemy w to rodziców,​
                    przygotowując tygodnie „bez słodyczy” i inne akcje, które promują zdrowe​
                    odżywianie u naszych podopiecznych ;)
                </p>

                <h3 className="kuchnia__header">
                    Wyprawka?
                </h3>
                <p className="kuchnia__text">
                    Wcale jej nie potrzebujesz. Śliniaczki, sztućce​
                    Masz pytania? Wątpliwości?​
                    Skontaktuj się z nami! :)
                </p>
            </div>
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Kuchnia;
