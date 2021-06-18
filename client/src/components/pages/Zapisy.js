import React from 'react'
import Menu from "../Menu";
import PurpleHeader from "../PurpleHeader";
import ZapisyForm from "../ZapisyForm";
import Payment from "../Payment";
import Kontakt from "../Kontakt";
import GoogleMaps from "../GoogleMaps";
import Footer from "../Footer";

const Zapisy = ({text}) => {
    return <>
        <Menu activePage="Zapisy" />
        <div className="pageContainer">
            <PurpleHeader text="Zapisy na rok szkolny 2021/2022" />
            <h3 className="ordinaryTextHeader">
                Wypełnij poniższy formularz, aby zapisać swoje dziecko do <b>{text}</b> na rok szkolny 2021/2022.
            </h3>
            <ZapisyForm oddzial={text === "przedszkola" ? "przedszkole" : "żłobek"} />
            <Payment />
            <Kontakt />
        </div>
        <GoogleMaps />
        <Footer />
    </>
}

export default Zapisy;