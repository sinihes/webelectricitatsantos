import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import global_cat from './translations/cat/global.json';
import global_es from './translations/es/global.json';
/* Traducciones */
import i18Next from 'i18next';
import {I18nextProvider} from 'react-i18next';

i18Next.init({
  interpolation: { escapeValue: false },
  lng:"cat",
  resources:{
    cat: {
      global: global_cat
    },

    es:{
      global: global_es
    }

  }
})


ReactDOM.render(

  <React.StrictMode>
    <I18nextProvider i18n={i18Next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

