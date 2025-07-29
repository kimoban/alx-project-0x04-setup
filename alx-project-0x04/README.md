# ALX Project 0x04 Setup - AI-Powered Platform

A modern Next.js application built with TypeScript and Tailwind CSS, featuring AI-powered text generation, text-to-image conversion, and interactive components.

## 🚀 Features

- **Custom 404 Page**: Beautiful error handling with FontAwesome icons
- **Reusable Button Component**: TypeScript-powered with multiple color variants
- **Responsive Header**: Clean navigation with sign-in/sign-up functionality
- **AI Integration Ready**: Pages set up for text generation and image creation
- **Modern Tech Stack**: Next.js 13+, TypeScript, Tailwind CSS
- **Type Safety**: Centralized interfaces for consistent typing

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (FontAwesome)
- **Font**: Geist (Vercel's font family)

## 📁 Project Structure

├── components/
│   ├── common/
│   │   └── Button.tsx          # Reusable button component
│   └── layouts/
│       ├── Header.tsx          # Navigation header
│       └── Layout.tsx          # Main layout wrapper
├── interfaces/
│   └── index.ts                # Centralized TypeScript interfaces
├── pages/
│   ├── 404.tsx                 # Custom error page
│   ├── index.tsx               # Home/splash page
│   ├── generate-text-ai.tsx    # AI text generation (coming soon)
│   ├── text-to-image.tsx       # Text-to-image converter (coming soon)
│   └── counter-app.tsx         # Contact page (coming soon)
├── styles/
│   └── globals.css             # Global styles with Tailwind
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js

## 🚦 Getting Started

### Prerequisites

- Node.js 18+

- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/alx-project-0x03-setup.git
   cd alx-project-0x03-setup
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Components

### Button Component

Reusable button with TypeScript support and multiple color variants:

```tsx
import Button from "@/components/common/Button";

<Button 
  buttonLabel="Click Me" 
  buttonBackgroundColor="blue" 
  action={() => console.log('Clicked!')} 
/>
```

**Available Colors**: `blue`, `green`, `red`, `orange`, `gray` (default)

### Header Component

Fixed navigation header with responsive design:

- Logo/Brand name

- Sign In/Sign Up buttons
- Mobile-friendly layout

## 📱 Pages

### Home Page (`/`)

- Welcome message and app description
- Navigation buttons to different features
- Responsive design with Tailwind CSS

### Custom 404 Page

- User-friendly error message
- FontAwesome icons
- Navigation back to home

### Upcoming Features

- **Generate Text AI** (`/generate-text-ai`) - AI-powered text generation
- **Text to Image** (`/text-to-image`) - Convert text descriptions to images
- **Contact Us** (`/counter-app`) - Contact form and information

## 🔧 TypeScript Interfaces

Centralized type definitions in `interfaces/index.ts`:

```typescript
// Page routing
export interface PageRouteProps {
  pageRoute: string;
}

// Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action?: () => void;
}

// Layout wrapper
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- Utility-first CSS framework

- Responsive design built-in
- Custom color schemes for buttons
- Clean, modern UI components

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library documentation

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically deploy your app

### Other Deployment Options

- **Netlify**: Connect your GitHub repository
- **Railway**: One-click deployment for full-stack apps
- **Docker**: Use the included Dockerfile for containerization

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/YOUR_USERNAME/alx-project-0x03-setup/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- [ALX Software Engineering Program](https://www.alxafrica.com/) - For the project requirements
- [Next.js Team](https://nextjs.org/) - For the amazing framework
- [Vercel](https://vercel.com/) - For hosting and font optimization
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework

---

### Built with ❤️ using Next.js and TypeScript
