import React from "react";
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const DlaczegoMyPage = () => {
    return <>
        <Menu />
        <div className='pageContainer'>
            <PurpleHeader text="Dlaczego my?" />
                <main className="pageInFooterContainer">
                    <section className="inFooter__section">
                        <h3 className="inFooter__header">
                            Jest kilka powodów, dla których należy realizować wczesną
                            edukację przedszkolną dzieci
                        </h3>
                        <ul className="inFooter__text inFooter__list">
                            <li>
                                większość możliwości intelektualnych i językowych człowieka kształtuje się w
                                pierwszych latach życia,
                            </li>
                            <li>
                                edukacja przedszkolna najefektywniej pomaga wyrównywać szanse edukacyjne i
                                społeczne dzieci,
                            </li>
                            <li>
                                wychowanie przedszkolne pozwala wzbogacić wartości i doświadczenia wyniesione z
                                domu o doświadczenia rówieśników,
                            </li>
                            <li>
                                obecność dziecka w grupie przedszkolnej stwarza nauczycielom okazję do jego
                                profesjonalnej obserwacji i ewentualnego zauważenia niepokojących zachowań,
                            </li>
                            <li>
                                w przedszkolu można skutecznie kształtować gotowość dziecka do nauki szkolnej i
                                przez to zapewnić mu lepsze szanse edukacyjne
                            </li>
                        </ul>

                        <p className="inFooter__text">
                            Dlatego wspólnie budujemy atmosferę wzajemnego zaufania i pełnej akceptacji. Każde
                            dziecko jest dla nas jednakowo ważne i kochane. Zrobimy wszystko by poznawanie świata
                            było przygodą spełniającą dziecięce marzenia, która niesie ze sobą wiele wiedzy i
                            umiejętności. Zrobimy wszystko, by dzieci były radosne, czuły się akceptowane i bezpieczne.
                            Pomożemy im ukierunkować własny rozwój zgodnie z wrodzonym potencjałem i
                            indywidualnymi możliwościami rozwojowymi, aby poznały siebie, stały się samodzielne i
                            otwarte na świat.
                        </p>

                        <blockquote className="inFooter__quote">
                            ,,Dobro dziecka naszym wspólnym celem”
                        </blockquote>
                    </section>

                    <section className="inFooter__section">
                        <h3 className="inFooter__header">
                            Dlatego dzieciom zapewnimy:
                        </h3>
                        <ul className="inFooter__text inFooter__list">
                            <li>
                                miejsce bezpieczne i przyjazne z wysoką jakością edukacji
                            </li>
                            <li>
                                miejsce w którym jest czyste, zdrowe powietrze
                            </li>
                            <li>
                                świetną zabawę w przedszkolu i na ogromnym placu zabaw
                            </li>
                            <li>
                                kompetentną, dobrze wykształconą kadrę pedagogiczną i specjalistyczną,
                            </li>
                            <li>
                                realizację podstawy programowej wychowania przedszkolnego (zgodnie z MEN)
                            </li>
                            <li>
                                naukę języka angielskiego z LITTE EARLY STAGE oraz EARLY STAGE
                            </li>
                            <li>
                                wprowadzanie różnych metod pracy z dziećmi
                            </li>
                            <li>
                                program stymulujący rozwój kreatywności i zdolności twórczych
                            </li>
                            <li>
                                wyposażenie multimedialne wszystkich sal jak tablice interaktywne, telewizory
                            </li>
                            <li>
                                budzenie zdolności tanecznych, plastycznych i językowych
                            </li>
                            <li>
                                pomoc psychologiczną i logopedyczną
                            </li>
                            <li>
                                duży wybór zajęć dodatkowych
                            </li>
                            <li>
                                edukacyjne konkursy, wycieczki do muzeów, teatrów itp.
                            </li>
                            <li>
                                co miesięczne spotkania z teatrzykami i ciekawymi ludźmi
                            </li>
                            <li>
                                zdrowe ekologiczne posiłki i przekąski przygotowywane na miejscu
                            </li>
                            <li>
                                grupy liczące maksymalnie 16 dzieci
                            </li>
                            <li>
                                boisko do gry w piłkę, kosza, siatkówkę oraz tenisa
                            </li>
                            <li>
                                pełną ciepła i radości domową atmosferę
                            </li>
                            <li>
                                duże, świetnie wyposażone sale dydaktyczne
                            </li>
                            <li>
                                jak najlepsze przygotowanie dzieci do rozpoczęcia nauki w szkole
                            </li>
                        </ul>
                    </section>

                    <section className="inFooter__section">
                        <h3 className="inFooter__header">
                            Rodzicom oferujemy:
                        </h3>

                        <ul className="inFooter__text inFooter__list">
                            <li>
                                konsultacje z psychologiem i logopedą
                            </li>
                            <li>
                                codzienny kontakt z wychowawca grupy
                            </li>
                            <li>
                                warsztaty
                            </li>
                            <li>
                                konsultacje z psychologiem i logopedą
                            </li>
                            <li>
                                udział w uroczystościach przedszkolnych
                            </li>
                            <li>
                                uczestnictwo w zajęciach otwartych
                            </li>
                        </ul>
                    </section>
                </main>
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default DlaczegoMyPage;