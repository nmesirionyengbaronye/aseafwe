import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const qaData: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["who", "about", "name", "introduce"],
    answer: "I'm Ngbaronye Nmesirionye — a Frontend & API Developer and Mechatronics Engineering student at FUTO. I have 2+ years of experience building web apps and APIs.",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "framework"],
    answer: "My skills include React, TypeScript, Tailwind CSS, Next.js, Node.js, Express, Python, NLP, PostgreSQL, MongoDB, Docker, Git, and more. I also work with Arduino and Raspberry Pi for robotics projects.",
  },
  {
    keywords: ["project", "portfolio", "built", "work"],
    answer: "I've built MarketAI API, Developer News Dashboard, E-Library, Emotional Support Model, IntentScope, and AI Resume Analyzer. Check out the Projects section above for details and live links!",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "freelance"],
    answer: "You can reach me at nmesirionyengbaronye@gmail.com, WhatsApp (07040369525), or find me on GitHub (Panther0508) and X (@Pantherlord0508). Scroll down to the Contact section for quick message templates!",
  },
  {
    keywords: ["education", "school", "university", "study"],
    answer: "I'm currently studying Mechatronics Engineering at the Federal University of Technology, Owerri (FUTO), Nigeria.",
  },
  {
    keywords: ["location", "where", "country", "from"],
    answer: "I'm from Umuahia, Abia State, Nigeria, and currently studying at FUTO in Owerri.",
  },
  {
    keywords: ["github", "code", "repository"],
    answer: "Check out my GitHub at github.com/Panther0508 — all my open source projects are there!",
  },
  {
    keywords: ["available", "open", "opportunity"],
    answer: "Yes! I'm currently open to new opportunities, freelance work, and collaborations. Feel free to reach out through the Contact section.",
  },
  {
    keywords: ["hello", "hi", "hey", "greet"],
    answer: "Hey there! 👋 I'm the assistant on Ngbaronye's portfolio. Ask me anything about his skills, projects, or how to get in touch!",
  },
];

const findAnswer = (input: string): string => {
  const lower = input.toLowerCase();
  for (const qa of qaData) {
    if (qa.keywords.some((kw) => lower.includes(kw))) return qa.answer;
  }
  return "I'm not sure about that! You can reach Ngbaronye directly at nmesirionyengbaronye@gmail.com or check the Contact section below for more ways to connect.";
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Ngbaronye's portfolio assistant. Ask me about his skills, projects, or how to get in touch!" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", content: trimmed };
    const answer = findAnswer(trimmed);
    setMessages((prev) => [...prev, userMsg, { role: "assistant", content: answer }]);
    setInput("");
  };

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
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[480px] rounded-xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <Bot size={18} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">Portfolio Assistant</span>
              <span className="ml-auto flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
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
                  <div
                    className={`max-w-[75%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-foreground border border-border"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={12} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

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
