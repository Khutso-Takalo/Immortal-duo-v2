import ReactGA from 'react-ga4';

// Google Analytics Configuration
// To use this, you need to:
// 1. Create a Google Analytics 4 property
// 2. Get your Measurement ID (starts with G-)
// 3. Replace the MEASUREMENT_ID below with your actual ID

const MEASUREMENT_ID = 'G-EF9S3MM3W3';

class Analytics {
  static initialize() {
    if (process.env.NODE_ENV === 'production' && MEASUREMENT_ID !== 'G-EF9S3MM3W3') {
      ReactGA.initialize(MEASUREMENT_ID, {
        debug: false,
        titleCase: false,
        gaOptions: {
          anonymizeIp: true,
          cookie_flags: 'SameSite=None;Secure',
        }
      });
    }
  }

  static sendPageview(path) {
    if (process.env.NODE_ENV === 'production' && MEASUREMENT_ID !== 'G-EF9S3MM3W3') {
      ReactGA.send({
        hitType: 'pageview',
        page: path
      });
    }
  }

  static sendEvent(action, category = 'User Interaction', label = '') {
    if (process.env.NODE_ENV === 'production' && MEASUREMENT_ID !== 'G-EF9S3MM3W3') {
      ReactGA.event({
        action: action,
        category: category,
        label: label
      });
    }
  }

  // Custom events for DJ website
  static trackMixtapePlay(mixtapeTitle) {
    this.sendEvent('mixtape_play', 'Media', mixtapeTitle);
  }

  static trackContactFormSubmit(eventType) {
    this.sendEvent('contact_form_submit', 'Contact', eventType);
  }

  static trackSocialClick(platform) {
    this.sendEvent('social_click', 'Social Media', platform);
  }

  static trackBookingInquiry() {
    this.sendEvent('booking_inquiry', 'Business', 'Header CTA');
  }
}

export default Analytics;
