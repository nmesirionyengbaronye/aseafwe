

## Plan: Add Developer News Dashboard, Reorder Projects, Update Links & CV

### Changes

**1. `src/components/ProjectsSection.tsx`**
- Update MarketAI API live link to `https://market-trend-ai.onrender.com/`
- Add new "Developer News Dashboard" project entry with:
  - GitHub: `https://github.com/Panther0508/Developer-News-Dashboard`
  - Live: `https://developer-news-dashboard.onrender.com`
  - Generated image asset
  - Description and structured "Read more" details with Problem / Solution sections
  - Tech tags (React, TypeScript, API, etc.)
- Reorder projects array to: MarketAI API → Developer News Dashboard → E-Library → Emotional Support Model → IntentScope → AI Resume Analyzer
- Update all project `details` fields to include structured sections: **Problem**, **Solution**, and **Key Features** for better readability

**2. `src/assets/project-news-dashboard.jpg`** (new)
- Generate a preview image for the Developer News Dashboard project

**3. `src/components/HeroSection.tsx`**
- Update the CV content in `generateCV()` to include all current projects (MarketAI API, Developer News Dashboard, E-Library, Emotional Support Model, IntentScope, AI Resume Analyzer) with correct links

### Project Order
1. MarketAI API
2. Developer News Dashboard (new)
3. E-Library
4. Emotional Support Model
5. IntentScope
6. AI Resume Analyzer

