

# Plan: Enhanced Projects, Chatbot, Template Messages & Client Projects Section

## Summary
Four major updates: restructured project details with separate collapsible sections, an AI chatbot widget, pre-filled template messages for WhatsApp/Email, and a new "Completed Projects" section for real client work.

---

## 1. Restructured Project Card Details

**File: `src/components/ProjectsSection.tsx`**

Split each project's data into separate fields: `description`, `problem`, `solution`, `features`. The card UI will show description always visible, then three independent collapsible sections:
- **Problem** (collapsible, red-ish accent border)
- **Solution** (collapsible, green-ish accent border)
- **Key Features** (collapsible, primary accent border)

Each with its own toggle trigger, all collapsed by default.

---

## 2. AI Chatbot Widget

**New file: `src/components/ChatBot.tsx`**

A floating chat bubble (bottom-right corner) that opens a chat panel. Uses Lovable AI via a Supabase edge function. General-purpose assistant.

**New file: `supabase/functions/chat/index.ts`**

Edge function that proxies to Lovable AI gateway with streaming SSE. System prompt: "You are a helpful AI assistant on Ngbaronye's portfolio site."

**File: `src/pages/Index.tsx`** — Add `<ChatBot />` component.

---

## 3. Template Messages for WhatsApp & Email

**File: `src/components/ContactSection.tsx`**

For WhatsApp and Email tabs, add pre-written template messages the visitor can select:
- "Hi, I'd like to discuss a project opportunity"
- "Hi, I'm interested in hiring you for freelance work"
- "Hi, I have a question about your portfolio"

Clicking a template auto-fills the WhatsApp link (`?text=...`) or `mailto:` link (`?subject=...&body=...`).

---

## 4. Completed Projects Section (Client Work)

**New file: `src/components/CompletedProjectsSection.tsx`**

A new section between the existing Projects section and Contact section. Titled "Completed Projects" with subtitle "Real projects delivered for clients." Contains 3 placeholder cards with editable fields (title, client industry, description, tech used). Styled similarly to the project cards but with a "Client Work" badge instead of "Featured."

**File: `src/pages/Index.tsx`** — Insert `<CompletedProjectsSection />` after `<ProjectsSection />`.

**File: `src/components/Navbar.tsx`** — Update nav numbering if needed.

---

## 5. Rename Existing Projects Section

**File: `src/components/ProjectsSection.tsx`**

Change section title from "Featured Projects" to "Open Source Projects" — making it clear these are GitHub-based, not MVPs.

---

## Technical Notes

- Chatbot requires Lovable Cloud for the edge function and `LOVABLE_API_KEY`
- Streaming SSE pattern for real-time token rendering in chat
- Template messages use URL encoding for WhatsApp (`wa.me` API `text` param) and `mailto:` query params
- All collapsible sections use existing Radix Collapsible component

