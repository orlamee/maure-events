# Maure Events Website

A stunning, professional event planning website built with Next.js 16, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern Animations**: Smooth animations using Framer Motion
- **6 Complete Pages**:
  - Home - Hero section with mission statement and service previews
  - About - Company story, values, and vision
  - Services - Comprehensive service offerings
  - Portfolio - Filterable gallery of past events
  - Journal - Blog/insights section
  - Contact - Contact form with business information

- **Professional Design**: 
  - Elegant color palette (olive green, beige, cream, brown, gold)
  - Beautiful typography (Playfair Display + Inter)
  - High-quality stock images from Unsplash
  - Clean, minimal aesthetic inspired by industry-leading event planners

- **Key Components**:
  - Fixed navigation with mobile menu
  - Comprehensive footer with contact info
  - Reusable service cards
  - Smooth scroll animations
  - Interactive portfolio filtering

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd maure-events
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
maure-events/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section
│   │   └── ServiceCard.tsx  # Service card component
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── portfolio/
│   │   └── page.tsx         # Portfolio page
│   ├── journal/
│   │   └── page.tsx         # Journal/Blog page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🎨 Color Palette

- **Olive Green**: #556B2F (Primary)
- **Beige**: #F5F5DC (Background)
- **Cream**: #FAF8F5 (Light Background)
- **Brown**: #2C2416 (Text/Dark)
- **Gold**: #C4A57B (Accent)

## 🛠️ Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📱 Pages Overview

### Home
- Elegant hero section with call-to-actions
- Mission statement
- Why Choose Us section
- Service previews with images
- Call-to-action section

### About
- Company story and background
- Explanation of brand name
- Core values
- Long-term vision

### Services
- 7 detailed service offerings:
  - Full Event Planning & Management
  - Event Design & Creative Direction
  - Day-Of Coordination
  - Vendor Sourcing & Management
  - Intimate Events + Private Celebrations
  - Corporate & Brand Events
  - Social Events & Milestones

### Portfolio
- Filterable gallery (All, Weddings, Corporate, Social, Intimate)
- Beautiful image grid
- Hover effects and descriptions

### Journal
- Featured blog post
- Article grid
- Newsletter subscription section

### Contact
- Contact form with validation
- Business hours and contact information
- Service area details
- Social media links

## 🔗 Business Information

- **Email**: info@maureevents.com
- **Phone**: (240) 636-7044
- **Instagram**: @maure_events
- **Hours**: Monday - Saturday: 12pm - 7pm | Sunday: Closed

## 📝 Customization

To customize the website:

1. **Images**: Replace Unsplash URLs with your own images in the page files
2. **Content**: Update text content in each page component
3. **Colors**: Modify color values in `globals.css` and Tailwind classes
4. **Contact Form**: Implement form submission logic in `contact/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is created for Maure Events.

## 🙏 Acknowledgments

- Design inspiration from Vieira Events, Eni N Every Event, and OBCurates
- Images from Unsplash
- Icons from React Icons

---

**Maure Events** - Curating Maure Memorable Moments

For questions or support, contact: info@maureevents.com

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
