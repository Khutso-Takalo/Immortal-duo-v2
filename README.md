# 🎵 Immortal Duo - Professional DJ Website

A modern, feature-rich React website for the Immortal Duo DJ group, built with professional marketing, analytics, and engagement features.

![Immortal Duo Website](./src/assets/Immorta_duo.jpg)

## 🚀 Features

### Core Features
- **Responsive Design** - Mobile-first approach with beautiful UI
- **React Router** - Smooth navigation between pages
- **Lazy Loading** - Optimized performance with code splitting
- **Modern Icons** - Lucide React icon library
- **Custom Animations** - Smooth transitions and loading states

### Marketing & Analytics
- **Google Analytics 4** - Comprehensive tracking and insights
- **Performance Metrics** - Real-time dashboard with key metrics
- **SEO Optimization** - Sitemap, robots.txt, and meta tags
- **Social Media Integration** - Live social feed and platform links

### Contact & Engagement
- **EmailJS Integration** - Professional contact form with email delivery
- **Newsletter Signup** - Stay connected with fans
- **Event Calendar** - Showcase upcoming performances
- **Music Platform Integration** - Spotify widget and streaming links

### Technical Features
- **PWA Support** - Installable web app with offline functionality
- **Service Worker** - Caching and offline support
- **Error Boundaries** - Graceful error handling
- **Toast Notifications** - User-friendly feedback system
- **Loading States** - Custom music-themed loading animations

### DevOps & Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **Build Optimization** - Production-ready builds
- **Security** - Regular dependency updates and vulnerability fixes

## 🎯 Pages

1. **Home** - Hero section, DJ profiles, music integration, events, newsletter
2. **About** - Detailed information about the DJ duo
3. **Mixtapes** - Collection of music releases and mixes
4. **Media** - Photo gallery and video content
5. **Events** - Upcoming performances and event calendar
6. **Contact** - Professional contact form and social links

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks and concurrent features
- **React Router 7** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **EmailJS** - Email service integration
- **Google Analytics 4** - Advanced analytics tracking
- **CSS3** - Modern styling with gradients and animations
- **Service Workers** - PWA functionality

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Khutso-Takalo/Immortal-duo.git
cd Immortal-duo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## ⚙️ Configuration

Before deploying, configure the following services:

### EmailJS Setup
1. Create an account at [EmailJS](https://emailjs.com)
2. Set up your email service and template
3. Update `src/config/email.js` with your credentials

### Google Analytics
1. Create a GA4 property
2. Get your Measurement ID
3. Update `src/utils/analytics.js` with your ID

### Music Platform Integration
1. Get your Spotify artist/playlist URIs
2. Update the embed URLs in `src/pages/Home/Home.js`
3. Add your social media links

See `SETUP.md` for detailed configuration instructions.

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Enable GitHub Pages in your repository settings
2. Push your code to the main branch
3. GitHub Actions will automatically build and deploy

### Manual Build
```bash
npm run build
# Deploy the build folder to your hosting service
```

## 📊 Performance Metrics

The website includes a comprehensive performance dashboard tracking:
- Total page views and unique visitors
- Monthly listeners and music engagement
- Social media followers and engagement rates
- Event attendance and booking inquiries
- Newsletter subscriptions and email open rates

## 🎨 Customization

### Theme Colors
Update the CSS variables in your stylesheet:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Content
- Replace images in `src/assets/` with your own
- Update text content in each page component
- Modify the event calendar data in `EventCalendar.js`
- Customize the social media feed in `SocialFeed.js`

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary/   # Error handling
│   ├── EventCalendar/   # Event management
│   ├── LoadingSpinner/  # Loading animations
│   ├── Newsletter/      # Email subscription
│   ├── SocialFeed/      # Social media integration
│   └── Toast/           # Notification system
├── pages/               # Page components
├── utils/               # Utility functions
├── config/              # Configuration files
└── assets/              # Images and media
```

### Available Scripts
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🔐 Security

- Regular dependency updates
- Vulnerability scanning with npm audit
- Secure email handling with EmailJS
- Protected API keys and sensitive data

## 🎵 Music Integration

### Supported Platforms
- Spotify (embedded player)
- Podomatic (podcast platform)
- HearThis.at
- Apple Podcasts
- YouTube
- Custom streaming links

### Features
- Embedded music player
- Track listings
- Platform links
- Play count tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Created for the Immortal Duo DJ group
- Built with React and modern web technologies
- Deployed with GitHub Pages
- Analytics powered by Google Analytics 4
- Email service by EmailJS

## 📞 Support

For support and questions:
- Check the [SETUP.md](SETUP.md) guide
- Open an issue on GitHub
- Contact the development team

---

## 🎧 Ready to Rock!

Your professional DJ website is now ready with:
- ✅ Professional design and branding
- ✅ Contact form with email delivery
- ✅ Event calendar and booking system
- ✅ Music platform integration
- ✅ Social media engagement
- ✅ Analytics and performance tracking
- ✅ PWA functionality
- ✅ Automated deployment

**Let the music play!** 🎵🎸🎧

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
