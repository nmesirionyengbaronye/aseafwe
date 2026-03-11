
# Portfolio Update Plan

## Overview
Multiple updates to your portfolio: new color scheme, contact details, tabbed layouts, project images, favicon, and navbar branding.

## Changes

### 1. Color Scheme: Dark Black, Gold, and White
Update `src/index.css` CSS variables:
- Background: deep black (`0 0% 4%`)
- Foreground: white (`0 0% 95%`)
- Primary/accent: gold (`45 90% 55%`)
- Muted foreground: warm gray
- Cards/borders: dark charcoal tones
- Update gradients and glow to use gold instead of teal

### 2. Navbar Site Title
Update `src/components/Navbar.tsx`:
- Change the logo text from "NN." to "Ngbaronye Nmesirionye" (or "Ngbaronye N." for space)
- Add profile photo as a small avatar next to the name

### 3. Skills Section as Tabs
Rewrite `src/components/SkillsSection.tsx`:
- Use Radix UI Tabs (already installed) to display skill categories as tab triggers
- Each tab shows its skill list when selected
- Styled to match the gold/black theme

### 4. Contact Section with Tabs + Real Details
Rewrite `src/components/ContactSection.tsx`:
- Add tabs for different contact methods: Email, Phone, GitHub, X (Twitter)
- Real details:
  - Email: nmesirionyengbaronye@gmail.com
  - Phone: 07040369525
  - GitHub: Panther0508
  - X: Pantherlord0508

### 5. Update Social Links Throughout
Update `src/components/HeroSection.tsx` side social links:
- GitHub: https://github.com/Panther0508
- X/Twitter: https://x.com/Pantherlord0508
- Email: mailto:nmesirionyengbaronye@gmail.com

### 6. Generate Project Images
Use the AI image generation API to create placeholder images for:
- E-Library (a digital library visual)
- Zerve API Notebook (a data science/API notebook visual)

Update `src/components/ProjectsSection.tsx` to display these images in project cards.

### 7. Favicon
Copy the uploaded profile photo to `public/favicon.png` and update `index.html` to reference it as the favicon.

### 8. Update Contact Email Everywhere
Replace `hello@example.com` with `nmesirionyengbaronye@gmail.com` in HeroSection and ContactSection.

## Technical Details
- Tabs component: use existing `src/components/ui/tabs.tsx` (Radix)
- Image generation: use Nano banana model for 2 project images, save as static assets
- Files modified: `index.css`, `Navbar.tsx`, `HeroSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`, `ContactSection.tsx`, `index.html`
- New files: generated project images in `src/assets/`
