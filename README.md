# React Portfolio Site

This project is a modern portfolio website built with React and Vite. It fetches data from a custom Express/MongoDB API (created in Assignment 1) and displays your projects and skills dynamically. The site is fully responsive and professionally styled.

## Features

- Built with React and Vite for fast development and HMR
- Fetches data from your deployed Express API (projects and skills collections)
- Modern, clean, and responsive design
- Projects section with:
  - Project name
  - Screenshot
  - Technologies (badges)
  - Status
  - Description
  - Visit Site link
- Skills section with:
  - Skill name
  - Category
  - Proficiency (visual bar)
  - Icon (if available)
- About, Contact, and Footer sections
- Modular code structure and best practices

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Your Assignment 1 API deployed and accessible (CORS enabled)

### Installation
1. Clone this repository:
   ```sh
   git clone <your-repo-url>
   cd React-PortfolioSite-PhurtenJangSherpa
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### API Endpoints Used
- `GET /api/projects` — fetches all projects
- `GET /api/skills` — fetches all skills

> Make sure your API is running and accessible from your React app (CORS enabled).

## Deployment
You can deploy this site easily with [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Just connect your GitHub repo and follow the instructions.

**Deployed Site:**
- [YOUR_DEPLOYED_SITE_URL_HERE](#) <!-- Replace with your actual deployed URL -->

## Folder Structure
```
src/
  api.js            # API utility functions
  components/
    AboutSection/
    ContactSection/
    Footer/
    Header/
    HeroSection/
    LanguagesSection/
    ProjectsSection/
    SkillsSection/
  assets/           # Images, fonts, etc.
  styles/           # Global styles
```

## Customization
- Update your name, role, and contact info in the appropriate components.
- Add or update projects and skills via your API/admin site.

## License
This project is for educational purposes (HTTP5222 Assignment 2).

---

**Created by [Your Name]**
