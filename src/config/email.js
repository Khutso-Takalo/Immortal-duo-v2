// EmailJS Configuration
// To use this, you need to:
// 1. Create an account at https://www.emailjs.com/
// 2. Create a service (Gmail, Yahoo, etc.)
// 3. Create a template
// 4. Get your public key from account settings
// 5. Replace the constants below with your actual values

export const EMAIL_CONFIG = {
  PUBLIC_KEY: '88RwKe7qOx5CsIfcy',
  SERVICE_ID: 'service_001fp1z',
  TEMPLATE_ADMIN: 'template_admin_notify',
  TEMPLATE_USER_REPLY: 'template_user_reply'
};

// Template variables expected by EmailJS:
// - from_name: User's name
// - from_email: User's email
// - event_type: Type of event
// - message: User's message
// - to_email: Your email (can be set in EmailJS template)
