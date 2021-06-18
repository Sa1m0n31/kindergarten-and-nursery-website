import React from 'react'
import PurpleHeader from "./PurpleHeader";

const AdaptacjaZlobek = () => {
    return <div className="adaptacja">
        <PurpleHeader text="Adaptacja dziecka w nowym środowisku" />

        <div className="adaptacjaInner">
            <h4 className="adaptacja__inner__header">
                Pierwsze dni w żłobku
            </h4>
            <p>
                Pierwsze dni pobytu dziecka w żłobku dla każdego malucha są bardzo trudne. Okres adaptacji
                do nowego miejsca, otoczenia zależny jest od wielu czynników i tak naprawdę ciężko jest
                określić ile on będzie trwał. Dla niektórych dzieci będzie trwało to tydzień, dla innych miesiąc
                lub dłużej. Ważną rolę odgrywają tutaj rodzice ponieważ powinni oni mieć na uwadze, że
                rozpoczęcie uczęszczania do żłobka przez dziecko to dla niego duże wyzwanie. Nie należy
                oczekiwać od dziecka że szybko przyzwyczai się do nowego miejsca, osób a przede wszystkim
                separacji od rodzica. Pozwólmy dziecku spokojnie oswoić się z nową sytuacją jaką jest
                uczęszczanie do żłobka. Zadaniem rodziców jest zminimalizować stresy związane z nową
                nieznaną dziecku sytuacją. Dobrze jest wcześniej rozmawiać z dzieckiem o zmianach, które
                mają nastąpić w jego życiu, mówiąc mu, co je czeka, tłumacząc powody rozłąki. Wskazane,
                żeby początki kontaktów malucha ze żłobkiem nastąpiły dużo wcześniej niż powrót mamy do
                pracy, gdyż warto dziecko zapoznawać z nowymi sytuacjami powoli.
            </p>

            <h4 className="adaptacja__inner__header">
                Jak powinien zachować się rodzic przy rozstaniu z dzieckiem?
            </h4>
            <p>
                Przy rozstaniach ważne jest, aby rodzice byli zdecydowani, z jednej strony nie spieszyli się by w
                ten sposób dać dziecku poczucie bezpieczeństwa ale jednocześnie nie przedłużali tego
                rozstania. Oczywiście dzieci w tym czasie mogą płakać by w ten sposób wyrazić swoje
                niezadowolenie z rozstania, ale przedłużanie go wzbudzać będzie jeszcze większy niepokój u
                dziecka. Rodzic powinien dać szansę opiekunom na uspokojenie maluszka, to pozwoli dziecku
                poczuć się dobrze w nowym miejscu i zaufać osobom, które teraz będą w jego otoczeniu. To z
                kolei przyspieszy tworzenie ciepłych relacji z opiekunami.
            </p>

            <h4 className="adaptacja__inner__header">
                Dlaczego dziecko płacze kiedy zostaje w żłobku?
            </h4>
            <p>
                Dziecko na początku może się skupiać jedynie na rozstaniu z rodzicem, i stąd takie emocje i
                płacz, ale wcale nie oznacza to, że maluszek nie lubi żłobka. Maluszek może właśnie w ten
                sposób reagować na zmiany, ale z czasem przyzwyczai się do środowiska, w którym się znalazł.
                Rodzice martwią się gdy widzą swoje dziecko płaczące zaraz przy powitaniu, to wcale nie musi
                oznaczać nic złego, często są to po prostu łzy szczęścia z ponownego spotkania z mamą lub
                tatą a czasem zwyczajne zmęczenie. Taki płacz może również oznaczać, że wszelkie negatywne
                emocje udało się dziecku odłożyć- chociażby na moment spotkania z rodzicem. Taka reakcja
                jest bardzo dojrzała emocjonalnie i przyspiesza proces adaptacji w żłobku, gdyż pozwala mu
                się ona skupić na tym co wokół niego się dzieje i zdobywaniu poczucia bezpieczeństwa.
            </p>

            <h4 className="adaptacja__inner__header">
                Plusy uczęszczania do żłobka
            </h4>
            <ul>
                <li>
                    Dzieci które uczęszczają do żłobka stają się dużo bardziej aktywne.
                </li>
                <li>
                    Uczą się interakcji z innymi dziećmi i dorosłymi.
                </li>
                <li>
                    Rozwijają współczucie i zrozumienie dla innych.
                </li>
                <li>
                    Uczą się zachowania niezależności, ale i współdziałania z innymi dziećmi.
                </li>
                <li>
                    Żłobek zapewnia stałość godzin zabawy, posiłków, snu –a to bardzo ważne w
                    prawidłowym rozwoju.
                </li>
                <li>
                    Dziecko uczy się przez obserwacje, jakie zachowania są naganne, nieakceptowane, i
                    przynoszące krzywdę innym.
                </li>
            </ul>
        </div>
    </div>
}

export default AdaptacjaZlobek;