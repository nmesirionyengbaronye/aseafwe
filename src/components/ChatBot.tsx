import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sun, Moon, ArrowDown, Download, Mail, Code, Briefcase, MapPin } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string; action?: () => void; actionLabel?: string };

type QuickAction = {
  label: string;
  icon: React.ElementType;
  message: string;
};

const quickActions: QuickAction[] = [
  { label: "Show skills", icon: Code, message: "What are your skills?" },
  { label: "View projects", icon: Briefcase, message: "Show me your projects" },
  { label: "Contact info", icon: Mail, message: "How can I contact you?" },
  { label: "Download CV", icon: Download, message: "Download CV" },
  { label: "Toggle theme", icon: Sun, message: "Toggle dark/light mode" },
  { label: "Where are you?", icon: MapPin, message: "Where are you from?" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const triggerCVDownload = () => {
  const btn = document.querySelector('[data-cv-download]') as HTMLButtonElement | null;
  if (btn) {
    btn.click();
  } else {
    // Fallback: scroll to hero where the button is
    scrollToSection("hero");
  }
};

const toggleTheme = () => {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");
  if (isDark) {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }
};

type QAEntry = {
  keywords: string[];
  answer: string;
  action?: () => void;
  actionLabel?: string;
};

const qaData: QAEntry[] = [
  {
    keywords: ["who", "about", "name", "introduce", "yourself"],
    answer: "I'm Ngbaronye Nmesirionye — a Frontend & API Developer and Mechatronics Engineering student at FUTO. I have 3 years of experience building web apps and APIs.",
    action: () => scrollToSection("about"),
    actionLabel: "Go to About section",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "framework"],
    answer: "My skills include React, TypeScript, Tailwind CSS, Next.js, Node.js, Express, Python, NLP, PostgreSQL, MongoDB, Docker, Git, and more. I also work with Arduino and Raspberry Pi for robotics.",
    action: () => scrollToSection("skills"),
    actionLabel: "Go to Skills section",
  },
  {
    keywords: ["project", "portfolio", "built", "show me", "work"],
    answer: "I've built MarketAI API, Developer News Dashboard, E-Library, Emotional Support Model, IntentScope, and AI Resume Analyzer. Let me take you there!",
    action: () => scrollToSection("projects"),
    actionLabel: "Go to Projects section",
  },
  {
    keywords: ["client", "completed", "delivered", "real project"],
    answer: "I have completed projects for real clients across e-commerce, finance, and healthcare. Check them out!",
    action: () => scrollToSection("completed-projects"),
    actionLabel: "Go to Client Work",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "freelance", "message"],
    answer: "You can reach me at nmesirionyengbaronye@gmail.com, WhatsApp (07040369525), GitHub (Panther0508), or X (@Pantherlord0508). I'll take you to the contact section!",
    action: () => scrollToSection("contact"),
    actionLabel: "Go to Contact section",
  },
  {
    keywords: ["education", "school", "university", "study"],
    answer: "I'm studying Mechatronics Engineering at the Federal University of Technology, Owerri (FUTO), Nigeria.",
  },
  {
    keywords: ["location", "where", "country", "from", "live"],
    answer: "I'm from Umuahia, Abia State, Nigeria, and currently studying at FUTO in Owerri.",
  },
  {
    keywords: ["github", "code", "repository", "repo"],
    answer: "Check out my GitHub at github.com/Panther0508 — all my open source projects are there!",
  },
  {
    keywords: ["available", "open", "opportunity"],
    answer: "Yes! I'm currently open to new opportunities, freelance work, and collaborations. Feel free to reach out!",
    action: () => scrollToSection("contact"),
    actionLabel: "Go to Contact",
  },
  {
    keywords: ["cv", "resume", "download"],
    answer: "Sure! I'll trigger the CV download for you now.",
    action: () => triggerCVDownload(),
    actionLabel: "Download CV",
  },
  {
    keywords: ["dark", "light", "theme", "mode", "toggle"],
    answer: "Done! I've toggled the theme for you. 🎨",
    action: () => toggleTheme(),
  },
  {
    keywords: ["hello", "hi", "hey", "greet", "sup", "yo"],
    answer: "Hey there! 👋 I'm the assistant on Ngbaronye's portfolio. Ask me anything about his skills, projects, or how to get in touch! Try the quick actions below.",
  },
  {
    keywords: ["thank", "thanks", "nice", "cool", "awesome", "great"],
    answer: "You're welcome! 😊 Let me know if there's anything else I can help with.",
  },
];

const findAnswer = (input: string): { answer: string; action?: () => void; actionLabel?: string } => {
  const lower = input.toLowerCase();
  for (const qa of qaData) {
    if (qa.keywords.some((kw) => lower.includes(kw))) {
      return { answer: qa.answer, action: qa.action, actionLabel: qa.actionLabel };
    }
  }
  return {
    answer: "I'm not sure about that! Try one of the quick actions below, or reach Ngbaronye directly through the Contact section.",
    action: () => scrollToSection("contact"),
    actionLabel: "Go to Contact",
  };
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Ngbaronye's portfolio assistant. Ask me about his skills, projects, or how to get in touch — or use the quick actions below!" },
  ]);
  const [input, setInput] = useState("");
  const [showQuickActions, setShowQuickActions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const processMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", content: trimmed };
    const result = findAnswer(trimmed);

    // Execute action immediately if present
    if (result.action) {
      setTimeout(() => result.action!(), 300);
    }

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        role: "assistant",
        content: result.answer,
        action: result.action,
        actionLabel: result.actionLabel,
      },
    ]);
    setInput("");
    setShowQuickActions(false);
  }, []);

  const handleSend = () => processMessage(input);

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[520px] rounded-xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <Bot size={18} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">Portfolio Assistant</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[340px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={12} className="text-primary" />
                    </div>
                  )}
                  <div className="max-w-[75%]">
                    <div
                      className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/50 text-foreground border border-border"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "assistant" && msg.actionLabel && msg.action && (
                      <button
                        onClick={msg.action}
                        className="mt-1 text-xs font-mono text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                      >
                        <ArrowDown size={10} />
                        {msg.actionLabel}
                      </button>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={12} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}

              {/* Quick actions */}
              {showQuickActions && (
                <div className="pt-2">
                  <p className="text-xs font-mono text-muted-foreground mb-2">Quick actions:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickActions.map((qa) => (
                      <button
                        key={qa.label}
                        onClick={() => processMessage(qa.message)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/20 px-2.5 py-1.5 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all"
                      >
                        <qa.icon size={10} />
                        {qa.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Show quick actions toggle */}
            {!showQuickActions && (
              <button
                onClick={() => setShowQuickActions(true)}
                className="text-xs font-mono text-muted-foreground hover:text-primary px-4 py-1 transition-colors text-left"
              >
                ↑ Show quick actions
              </button>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 px-3 py-3 border-t border-border"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-mono"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40"
                disabled={!input.trim()}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
