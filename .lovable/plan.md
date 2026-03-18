

# Plan: Longer Template Messages + PDF CV Download

## 1. Longer Template Messages

**File: `src/components/ContactSection.tsx`**

Expand the three template messages from one-liners to detailed, professional multi-sentence messages:

- **Project opportunity**: Include greeting, mention of finding the portfolio, interest in discussing a specific project, request for availability, and sign-off placeholder.
- **Freelance hiring**: Include greeting, company/project context placeholder, scope of work mention, budget/timeline discussion request, and sign-off.
- **Portfolio question**: Include greeting, specific compliment on a project, detailed question about tech stack/approach, and sign-off.

Each template will be ~4-6 sentences long. The label shown on the button stays short; the `text` field contains the full message.

## 2. PDF CV Download

**File: `src/components/HeroSection.tsx`**

Replace the plain-text `.txt` CV generation with proper PDF generation using the `jspdf` library:

- Install `jspdf` package
- Rewrite `generateCV()` to create a formatted PDF document with sections, headings, and proper layout
- Output file: `Ngbaronye_Nmesirionye_CV.pdf`

The PDF will include styled headings, section separators, and properly formatted content matching the existing CV data.

