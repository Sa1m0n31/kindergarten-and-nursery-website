import Menu from "../Menu";
import Landing from "../Landing";
import MocneStrony from "../MocneStrony";
import StwarzamyWarunki from "../StwarzamyWarunki";
import DlaczegoMy from "../DlaczegoMy";
import KadraPedagogiczna from "../KadraPedagogiczna";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";
import KontaktForm from "../KontaktForm";
import PurpleHeader from "../PurpleHeader";

import facebookBtn from '../../static/img/facebook.png';

const FrontPage = () => {
    return <div className="App frontPage">
        <Menu />
        <div className="container">
            <a className="facebookBtn" href="https://m.facebook.com/Żłobek-i-Przedszkole-123-Nauki-i-Sztuki-106174148241228/" target="_blank">
                <img className="facebookBtn__img" src={facebookBtn} alt="facebook" />
            </a>
            <Landing />
            <MocneStrony />
            <StwarzamyWarunki />
            <DlaczegoMy />
            <KadraPedagogiczna />
            <PurpleHeader text="Kontakt" />
            <KontaktForm animation={true} />
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </div>
}

export default FrontPage;