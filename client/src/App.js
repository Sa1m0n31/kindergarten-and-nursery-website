import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './static/style/style.css'
import './static/style/mobile.css'

import OfertaPrzedszkola from "./helpers/OfertaPrzedszkola";
import OfertaZlobka from "./helpers/OfertaZlobka";

import FrontPage from "./components/pages/FrontPage";
import Zapisy from "./components/pages/Zapisy";
import Kuchnia from "./components/pages/Kuchnia";
import Kadra from "./components/pages/Kadra";
import StrefaRodzica from "./components/pages/StrefaRodzica";
import Galeria from "./components/pages/Galeria";
import KontaktPage from "./components/pages/KontaktPage";
import Oferta from "./components/pages/Oferta";
import DlaczegoMyPage from "./components/pages/DlaczegoMyPage";
import NaszaMisja from "./components/pages/NaszaMisja";
import WizjaPrzedszkola from "./components/pages/Wizja przedszkola";
import WizjaZlobka from "./components/pages/WizjaZlobka";
import PlanDnia from "./components/pages/PlanDnia";
import Jadlospis from "./components/pages/Jadlospis";
import Zerowka from "./components/pages/Zerowka";
import Wyprawka from "./components/pages/Wyprawka";
import Rodo from "./components/pages/Rodo";
import Orzeczenia from "./components/pages/Orzeczenia";

function App() {
   useEffect(() => {

   }, []);

  return (<Router>
          {/* CATEGORIES */}
      <Route exact path="/">
          <FrontPage />
      </Route>
      <Route path="/przedszkole">
          <Oferta offer={OfertaPrzedszkola} />
      </Route>
      <Route path="/zlobek">
          <Oferta offer={OfertaZlobka} />
      </Route>
      <Route path="/zerowka">
          <Zerowka />
      </Route>
       <Route path="/kuchnia">
            <Kuchnia />
       </Route>
       <Route path="/kadra">
            <Kadra />
       </Route>
      <Route path="/zapisy-przedszkole">
          <Zapisy text="przedszkola" />
      </Route>
      <Route path="/zapisy-zlobek">
          <Zapisy text="żłóbka" />
      </Route>
      <Route path="/strefa-rodzica">
          <StrefaRodzica />
      </Route>
      <Route path="/galeria">
          <Galeria />
      </Route>
      <Route path="/kontakt">
          <KontaktPage />
      </Route>

          {/* SUBCATEGORIES */}
      <Route path="/ramowy-plan-dnia">
            <PlanDnia />
      </Route>
      <Route path="/jadlospis">
            <Jadlospis />
      </Route>

          {/* Footer menu */}
      <Route path="/dlaczego-my">
          <DlaczegoMyPage />
      </Route>
      <Route path="/nasza-misja">
          <NaszaMisja />
      </Route>
      <Route path="/wizja-przedszkola">
          <WizjaPrzedszkola />
      </Route>
      <Route path="/wizja-zlobka">
          <WizjaZlobka />
      </Route>
      <Route path="/wyprawka">
          <Wyprawka />
      </Route>
      <Route path="/rodo">
          <Rodo />
      </Route>
      <Route path="/orzeczenia">
          <Orzeczenia />
      </Route>
  </Router>
  );
}

export default App;
