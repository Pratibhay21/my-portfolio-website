# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🚀 Built with React 19 and TypeScript
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔧 Modern build tooling with Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[YOUR_USERNAME]/[REPO_NAME].git
cd [REPO_NAME]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Create a new GitHub repository** with your desired name

2. **Update the homepage in package.json**:
   Replace `[YOUR_USERNAME]` and `[REPO_NAME]` with your actual GitHub username and repository name:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[YOUR_USERNAME]/[REPO_NAME].git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

5. **Your site will be available at**: `https://[YOUR_USERNAME].github.io/[REPO_NAME]`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Technologies Used

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages, GitHub Actions

## Customization

- Update the content in the component files to match your information
- Modify colors and styling in `tailwind.config.js`
- Add or remove sections as needed for your portfolio

## License

This project is open source and available under the [MIT License](LICENSE).