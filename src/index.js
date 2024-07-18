/* The entry point of the application. */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import TopBarProgress from 'react-topbar-progress-indicator';

import AppRouter from './router/Router';
import { TOP_BAR_PROGRESS_COLOR } from './constant/constant';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* A progress bar color that shows the loading of the page. */
TopBarProgress.config({
  barColors: {
    0: TOP_BAR_PROGRESS_COLOR,
    '1.0': TOP_BAR_PROGRESS_COLOR,
  },
  shadowBlur: 5,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<TopBarProgress />}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </BrowserRouter>
        </I18nextProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
