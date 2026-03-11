

## Plan: Update Project Links and Add Collapsible Descriptions

### Changes to `src/components/ProjectsSection.tsx`

**1. Update IntentScope project data:**
- GitHub: `https://github.com/Panther0508/IntentScope`
- Live: `https://intentscope.pxxl.click`
- Remove "Zerve" from tech tags, update description

**2. Update Emotional Support Model project data:**
- Live: `https://emotional-support-model.pxxl.click`

**3. Add collapsible descriptions for all projects:**
- Each project gets a short `description` (summary) and a longer `details` string explaining use cases, functionality, and value to employers
- Use Radix Collapsible component (already installed) with a "Read more" / "Read less" toggle
- The collapsible details section will appear below the short description with a smooth expand/collapse animation

**4. Longer descriptions (details) will cover:**
- **IntentScope**: Explain it as a standalone data exploration platform with intent classification, NLP pipelines, interactive code execution, cloud deployment
- **Emotional Support Model**: Explain the NLP pipeline, sentiment analysis, empathetic response generation, mental health use case, how it demonstrates ML/AI skills
- **E-Library**: Explain search, filtering, responsive design, user experience focus
- **MarketAI API**: Explain real-time data, AI synthesis, dashboard analytics

This keeps cards clean with short descriptions while letting employers click to see full functionality details.

