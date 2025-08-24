# Southern Buck Lawn Care - Premium Website

A modern, professional lawn care and landscaping services website built with cutting-edge web technologies.

## 🌟 Features

- **Premium Design**: Augusta Lawn Care-inspired layout with custom color palette
- **Responsive**: Fully optimized for all devices (desktop, tablet, mobile)
- **Interactive**: Smooth animations, hover effects, and dynamic form handling
- **Performance**: Optimized with lazy loading and efficient event handling
- **Modern Stack**: Built with Hono, Vite, and Cloudflare Pages

## 🎨 Design System

### Color Palette
- **Primary**: Charcoal Grey (#2C3E50)
- **Accent**: Hunter Safety Orange (#FF6B35)
- **Secondary**: Yellow (#F7DC6F)
- **Success**: Lime Green (#7FFF00)
- **Light**: White (#FFFFFF)

### Typography
- **Headings**: Montserrat (700, 800)
- **Body**: Open Sans (300-600)

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy to Cloudflare Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
/webapp
├── public/              # Static assets
│   ├── index.html      # Main HTML file
│   ├── styles/         # CSS files
│   │   └── main.css    # Premium styles
│   ├── scripts/        # JavaScript files
│   │   └── main.js     # Interactive features
│   ├── images/         # Image assets
│   └── fonts/          # Custom fonts
├── src/                # Source code
│   └── index.ts        # Hono server
├── dist/               # Build output
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── wrangler.jsonc      # Cloudflare configuration
```

## 📱 Sections

### Homepage Layout
1. **Top Bar**: Contact info and social links
2. **Navigation**: Sticky menu with smooth scroll
3. **Hero Section**: Eye-catching introduction with CTAs
4. **Services Grid**: 6 professional services with icons
5. **About Section**: Company information and features
6. **Testimonials**: Customer reviews with ratings
7. **CTA Section**: Conversion-focused call-to-action
8. **Contact Form**: Multi-field form with validation
9. **Footer**: Links, contact info, and social media

## 🛠️ Technologies

- **Framework**: [Hono](https://hono.dev/) - Ultrafast web framework
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - JAMstack platform
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Montserrat, Open Sans)

## ⚡ Performance Features

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Efficient DOM manipulation
- Minified production builds

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Configuration

### Environment Variables
```env
NODE_ENV=development
PORT=3000
```

### PM2 Process Management
The project includes PM2 configuration for process management:
```bash
npx pm2 start ecosystem.config.cjs
npx pm2 status
npx pm2 logs --nostream
```

## 📝 API Endpoints

- `POST /api/contact` - Contact form submission
- `GET /api/health` - Health check endpoint

## 🌐 Deployment

The site is configured for deployment on Cloudflare Pages:

1. Build the project: `npm run build`
2. Deploy to Cloudflare: `npm run deploy`
3. Or use Wrangler CLI directly: `wrangler pages deploy dist`

## 🔐 Security

- Input validation on all forms
- Sanitized user inputs
- HTTPS enforcement
- Content Security Policy headers

## 📄 License

MIT License - Feel free to use this project for your own lawn care business!

## 👥 Support

For questions or support, contact: info@southernbucklawncare.com

---

**Built with ❤️ for Southern Buck Lawn Care**