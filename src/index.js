import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reportWebVitalsToAnalytics } from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('Immortal Duo is now available offline!');
  },
  onUpdate: () => {
    console.log('New content available. Please refresh.');
  }
});

// Report Web Vitals to Analytics
reportWebVitalsToAnalytics();
