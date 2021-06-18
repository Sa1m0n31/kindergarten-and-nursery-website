import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const NaszaMisja = () => {
    return <>
        <Menu />
        <div className='pageContainer'>
            <PurpleHeader text="Nasza misja" />

            <main className="pageInFooterContainer">
                <section className="inFooter__section">
                    <p className="inFooter__text inFooter__text--center">
                        Naszym najważniejszym zadaniem jest przygotować dzieci do odnoszenia
                        sukcesów zarówno edukacyjnych jak i językowych na miarę ich indywidualnych
                        możliwości.
                    </p>

                    <h3 className="inFooter__header">
                        Dlaczego jeżeli oczekujesz od placówki edukacyjnej:
                    </h3>

                    <ul className="inFooter__text inFooter__list">
                        <li>
                            przemyślanej ścieżki edukacyjnej,
                        </li>
                        <li>
                            bardzo dobrej kadry oraz doświadczenia w pracy z dziećmi,
                        </li>
                        <li>
                            edukacji wykorzystującej nowoczesne technologie,
                        </li>
                        <li>
                            ciekawych projektów edukacyjnych,
                        </li>
                        <li>
                            ekologicznej i zróżnicowanej kuchni,
                        </li>
                        <li>
                            rozwijania pasji sportowych na nowoczesnym boisku z bezpieczna nawierzchnią,
                        </li>
                    </ul>
                </section>

                <section className="inFooter__section">
                    <h3 className="inFooter__header">
                        Chcesz, aby Twoje dziecko:
                    </h3>

                    <ul className="inFooter__text inFooter__list">
                        <li>
                            efektywnie się uczyło,
                        </li>
                        <li>
                            dobrze się bawiło,
                        </li>
                        <li>
                            rozwijało różnorodne umiejętności,
                        </li>
                        <li>
                            czuło się bezpiecznie i było szczęśliwe,
                        </li>
                    </ul>
                </section>

                <section className="inFooter__section">
                    <h3 className="inFooter__header">
                        Chcesz, aby Twoje dziecko w niedalekiej przyszłości:
                    </h3>

                    <ul className="inFooter__text inFooter__list">
                        <li>
                            biegle posługiwało się co najmniej jednym językiem obcym,
                        </li>
                        <li>
                            zdobywało prestiżowe certyfikaty językowe,
                        </li>
                        <li>
                            mogło studiować w środowisku anglojęzycznym,
                        </li>
                        <li>
                            chętnie występowało publicznie,
                        </li>
                        <li>
                            zdobyło wymarzoną pracę,
                        </li>
                    </ul>

                    <p className="inFooter__text inFooter__text--big inFooter__text--center">
                        JEŻELI TAK, OZNACZA TO ŻE JESTEŚMY IDEALNYM PRZEDSZKOLEM
                        DLA TWOJEGO DZIECKA.
                    </p>
                </section>
            </main>

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default NaszaMisja;