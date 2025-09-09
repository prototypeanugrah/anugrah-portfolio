# Anugrah Vaishnav - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a sleek dark theme with dynamic animations and an elegant user experience.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Dark Theme**: Beautiful black-blue color scheme with matte black background
- **Dynamic Animations**: Framer Motion for smooth page transitions and interactions
- **Typewriter Effect**: Dynamic hero title animation
- **Responsive Design**: Mobile-first approach with perfect desktop scaling
- **Performance Optimized**: Fast loading with Vite's hot reload
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── TypeWriter.tsx
│   │   ├── KeywordTag.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ExperienceCard.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── CV.tsx
│   ├── hooks/              # Custom hooks
│   │   └── useTypewriter.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions and data
│   │   └── data.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                 # Static assets
├── index.html
└── Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information

Update your details in `src/utils/data.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description...',
  email: 'your.email@example.com',
  // ... other details
}
```

### Adding Your Photo

1. Add your profile image to `public/` folder
2. Update the image placeholders in the components:
   ```tsx
   // Replace the placeholder div with:
   <img 
     src="/your-image.jpg" 
     alt="Your Name" 
     className="w-80 h-80 rounded-full object-cover"
   />
   ```

### Adding Project Images

1. Create directories: `public/images/projects/`
2. Add your project images
3. Update project data in `src/utils/data.ts`:
   ```typescript
   {
     id: 'project-id',
     // ... other fields
     imageUrl: '/images/projects/project-image.jpg'
   }
   ```

### CV PDF

1. Add your CV PDF to `public/cv.pdf`
2. The download button will automatically link to it

## 🎨 Customizing Colors

The color scheme is defined in `tailwind.config.js`. Update the colors to match your brand:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
      accent: {
        // Your accent color palette
      },
      dark: {
        // Your dark theme palette
      }
    }
  }
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deployment Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

3. **GitHub Pages**
   - Build the project
   - Deploy the `dist` folder to `gh-pages` branch

4. **Traditional Hosting**
   - Upload the `dist` folder contents to your server

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly interactions
- Optimized typography scaling
- Hamburger menu for mobile navigation

## ⚡ Performance Features

- **Vite**: Lightning-fast development and build times
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images load on demand
- **Optimized Fonts**: Preloaded Google Fonts
- **Minimized Bundle**: Tree-shaking and minification

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] CMS integration

---

**Built with ❤️ by Anugrah Vaishnav**