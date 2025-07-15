# Malek Mameri - Electrical Engineering Portfolio

A professional portfolio website showcasing the skills, experience, and projects of Malek Mameri, an electrical engineering professional based in Leicester, United Kingdom.

## Features

- **Responsive Design**: Mobile-first approach with modern UI
- **Professional Sections**: Hero, About, Experience, Education, Skills, and Contact
- **Interactive Elements**: Smooth scrolling, animations, and form handling
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, and Vite

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MalikPortfolio.git
cd MalikPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Automatic Deployment

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Set the source to "GitHub Actions"
5. Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Manual Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

## Project Structure

```
MalikPortfolio/
├── client/
│   ├── public/
│   │   └── images/
│   │       └── malik.jpg
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── ui/
│   ├── index.html
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Customization

### Updating Personal Information

Edit `client/src/lib/constants.ts` to update:
- Personal information (name, title, contact details)
- Work experience
- Education
- Skills

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `client/src/index.css`. You can customize colors, fonts, and other design elements there.

### Images

Replace `client/public/images/malik.jpg` with your own profile picture. The image should be square and high quality.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please contact Malek Mameri at malek.mameri.0607@gmail.com. 