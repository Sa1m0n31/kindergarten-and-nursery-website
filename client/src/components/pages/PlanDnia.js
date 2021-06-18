import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

import { PlanDniaPrzedszkole, RozkladDnia } from "../../helpers/PlanDniaPrzedszkole";
import PlanDniaZLobek from "../../helpers/PlanDniaZlobek";
import PlanDniaTemplate from "../PlanDniaTemplate";

const PlanDnia = () => {
    return <>
        <Menu activePage="Strefa rodzica" />
        <div className="pageContainer">
            <PurpleHeader text="Ramowy plan dnia" />

            <div className="planDniaContainer">
                <h3 className="planDnia__header">
                    Przedszkole
                </h3>

                <PlanDniaTemplate planDnia={PlanDniaPrzedszkole} />

                <h3 className="planDnia__header">
                    Rozkład dnia w przedszkolu według nowej podstawy programowej
                </h3>

                <div className="planDnia__rozkladDnia">
                    W nowej podstawie programowej wychowania przedszkolnego jest zapis, że pobyt
                    dzieci w przedszkolu podzielony został na pięć części:
                    <ul className="planDnia__rozkladDnia__list">
                        <li>
                            co, najmniej jedna piąta pobytu dziecka w przedszkolu powinna być przeznaczona na
                            dowolną zabawę dziecka (dzieci mogą bawić się w dowolny sposób, przy dyskretnym
                            udziale nauczyciela)
                        </li>
                        <li>
                            co najmniej jedną piątą dzieci powinny spędzać w ruchu, np. w ogrodzie, na boisku, w
                            parku (mogą być organizowane zajęcia sportowe, gry i zabawy ruchowe, obserwacje
                            przyrodnicze, prace ogrodnicze i porządkowe)
                        </li>
                        <li>
                            jedna piątą można przeznaczyć na zajęcia dydaktyczne
                        </li>
                        <li>
                            pozostałe dwie piąte pobytu dziecka w przedszkolu nauczyciel może
                            zagospodarować dowolnie ( czynności opiekuńcze, samoobsługowe, organizacyjne)
                            Według nowej postawy programowej podstawowymi formami organizacyjnymi zajęć w
                            przedszkolu są: zabawy dowolne dzieci oraz zabawy/ruch na świeżym powietrzu. Dzieci
                            uczestniczą także w zajęciach dodatkowych, organizowanych na terenie przedszkola.
                            Ramowy rozkład dnia w przedszkolu przedstawia integrację treści wychowawczo-
                            dydaktycznych, jakie przedszkole oferuje dzieciom.
                        </li>
                    </ul>
                </div>

                <h3 className="planDnia__header">
                    Żłobek
                </h3>

                <PlanDniaTemplate planDnia={PlanDniaZLobek} />
            </div>


            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default PlanDnia;