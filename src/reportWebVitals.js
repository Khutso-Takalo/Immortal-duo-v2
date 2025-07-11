import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import Analytics from './utils/analytics';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

// Enhanced Web Vitals reporting with Analytics
export const reportWebVitalsToAnalytics = () => {
  function sendToAnalytics({ name, delta, value, id }) {
    // Send performance metrics to Google Analytics
    Analytics.sendEvent('web_vitals', 'Performance', name, Math.round(value));
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${name}: ${value} (delta: ${delta})`);
    }
  }

  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

export default reportWebVitals;
