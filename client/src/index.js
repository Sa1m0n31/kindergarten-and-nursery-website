import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Helmet from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
      <Helmet>
          <title>Przedszkole i Żłobek 123 Nauki i Sztuki w Swarzędzu</title>
          <meta name="description" content="Przdszkole i Żłobek 123 Nauki i Sztuki w Swarzędzu. Najlepsze przedszkole i żłobek w Swarzędzu i okolicach" />
      </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
