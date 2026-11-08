# Digisinc: Agency Website

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

Marketing website for **Digisinc**, a performance-driven digital marketing agency. It showcases the agency's
services, portfolio and pricing, and turns visitors into leads through a validated contact form.

## Pages

- **Home:** hero, services overview, recent projects, benefits, testimonials and social links
- **Services:** service cards and pricing plans
- **Portfolio:** web and graphic design case studies
- **Contact:** form validated with React Hook Form and Zod

## Highlights

- Smooth scrolling with Locomotive Scroll and page animations with Framer Motion
- Client-side routing with React Router and scroll-to-top on navigation
- SEO meta tags per page with React Helmet Async
- Fully responsive layout with Tailwind CSS

## Getting started

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview the build
```

## Project structure

```
src/
  App.jsx                         Routes
  assets/Components/Home-Page/    Home sections
  assets/Components/Services/     Services and pricing
  assets/Components/Portfolio/    Portfolio
  assets/Components/Contact/      Contact form
  hooks/useLocomotiveScroll.js    Smooth-scroll hook
```

Related: [Digisinc-chatbot](https://github.com/Zotriq/Digisinc-chatbot), the AI assistant built for this site.

## Tech stack

React 19 · Vite · Tailwind CSS · Framer Motion · Locomotive Scroll · React Router · React Hook Form · Zod
