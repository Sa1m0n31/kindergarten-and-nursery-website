import React from 'react';
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

import KontaktForm from "../KontaktForm";

const KontaktPage = () => {
    return <>
        <Menu activePage="Kontakt" />
        <div className="pageContainer oHidden">
            <PurpleHeader text="Kontakt" />

            <KontaktForm animation={false} />

            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default KontaktPage;