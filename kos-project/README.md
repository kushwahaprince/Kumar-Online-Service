# Kumar Online Service — One-Stop Digital Service Center

A modern, fully responsive website for Kumar Online Service offering digital and government documentation services. Built with React, Vite, TailwindCSS, and Firebase Authentication.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Service Catalog**: Browse and search through all available services
- **Contact System**: Easy-to-use contact form with file upload capability
- **Authentication**: Firebase-powered login/signup with Google sign-in option
- **Customer Reviews**: Testimonials carousel with filtering
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form validation
- **Firebase** - Authentication
- **React Icons** - Icon library
- **Lottie React** - Animation player (optional)

## 📦 Installation

1. **Clone the repository** (or navigate to project folder):
   ```bash
   cd "d:/Kumar Online Service/kos-project"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with your Firebase credentials (see Firebase Setup below)

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - Navigate to `http://localhost:5173`

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Authentication** and add **Email/Password** and **Google** sign-in methods
4. Go to Project Settings → General → Your apps
5. Click on "Web app" and register your app
6. Copy the Firebase config values to your `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## 📂 Folder Structure

```
kos-project/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, animations
│   ├── components/      # Reusable components
│   │   ├── home/        # Home page sections
│   │   ├── services/    # Service-related components
│   │   ├── contact/     # Contact form components
│   │   ├── auth/        # Auth components (if needed)
│   │   └── ui/          # UI primitives
│   ├── config/          # Configuration files (Firebase)
│   ├── constants/       # App constants
│   ├── data/            # Static data (services, testimonials)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Configuration

### Contact Information

Update contact details in `src/constants/contact.js`:
```javascript
export const CONTACT_INFO = {
  email: "your-email@gmail.com",
  whatsapp: "1234567890",
  // ...
};
```

### Services

Modify services data in `src/data/services.js` to add, remove, or update services.

### Testimonials

Update customer reviews in `src/data/testimonials.js`.

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary color shades */ },
  secondary: { /* your secondary color shades */ },
}
```

### Fonts

Change fonts in `tailwind.config.js` and update Google Fonts import in `src/index.css`.

## 📤 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

## 📧 Contact

For questions or support, reach out to:
- **Email**: kushwahaprince199@gmail.com
- **WhatsApp**: 9987607160

## 📄 License

This project is created for Kumar Online Service. All rights reserved.
