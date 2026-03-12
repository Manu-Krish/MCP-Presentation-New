import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Network, Database, Server, Cpu, Plug, Workflow, Blocks, Waypoints, Terminal, Brain, Link, History, Lock, EyeOff, Calculator, ClipboardCopy, Globe, Usb, BrainCircuit, Handshake, FileText, Cloud, Search, FileJson, Settings, Key, Folder, Github, MessageSquare } from 'lucide-react';

const AmbientBackground = () => {
  const icons = [
    { Icon: Brain, size: 180, top: '10%', left: '5%', delay: 0, duration: 25, xMove: 30, yMove: -40, rot: 15, minOpacity: 0.03, opacityDuration: 12 },
    { Icon: Network, size: 140, top: '65%', left: '80%', delay: 2, duration: 22, xMove: -25, yMove: 35, rot: -10, minOpacity: 0.02, opacityDuration: 18 },
    { Icon: Database, size: 120, top: '20%', left: '75%', delay: 1, duration: 28, xMove: 40, yMove: -20, rot: 20, minOpacity: 0.04, opacityDuration: 15 },
    { Icon: Blocks, size: 150, top: '75%', left: '15%', delay: 3, duration: 20, xMove: -35, yMove: -30, rot: -15, minOpacity: 0.01, opacityDuration: 22 },
    { Icon: Server, size: 100, top: '45%', left: '88%', delay: 1.5, duration: 24, xMove: 20, yMove: 40, rot: 10, minOpacity: 0.03, opacityDuration: 14 },
    { Icon: Plug, size: 130, top: '85%', left: '45%', delay: 2.5, duration: 26, xMove: -20, yMove: -45, rot: -20, minOpacity: 0.02, opacityDuration: 20 },
    { Icon: Waypoints, size: 160, top: '25%', left: '35%', delay: 0.5, duration: 30, xMove: 45, yMove: 25, rot: 25, minOpacity: 0.05, opacityDuration: 17 },
    { Icon: Terminal, size: 110, top: '55%', left: '8%', delay: 4, duration: 21, xMove: -30, yMove: 30, rot: -10, minOpacity: 0.02, opacityDuration: 25 },
    { Icon: Link, size: 90, top: '15%', left: '50%', delay: 1.2, duration: 23, xMove: 25, yMove: -25, rot: 15, minOpacity: 0.01, opacityDuration: 19 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-current"
          style={{ top: item.top, left: item.left }}
          animate={{
            x: [0, item.xMove, -item.xMove * 0.5, 0],
            y: [0, item.yMove, -item.yMove * 0.5, 0],
            rotate: [0, item.rot, -item.rot * 0.5, 0],
            scale: [1, 1.08, 0.95, 1],
            opacity: [item.minOpacity, 0.12, item.minOpacity],
          }}
          transition={{
            default: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            },
            opacity: {
              duration: item.opacityDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }
          }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};

const slides = [
  {
    id: 1,
    title: "Model Context Protocol",
    subtitle: "Standardizing AI-Tool Communication",
    content: "",
    icon: Network,
    bg: "bg-[#F5F5F3]",
    text: "text-[#1A1A1A]",
    theme: "light"
  },
  {
    id: 2,
    title: "The Problem — Why Do We Need Tools?",
    subtitle: "The gap between intelligence and action",
    content: "",
    points: [
      {
        title: "Knowledge Gap",
        desc: "AI models are trained on historical datasets. They are \"frozen in time\" and unaware of events, files, or data created after their training ended.",
        icon: History
      },
      {
        title: "Action Gap",
        desc: "An LLM can describe how to fix a bug, but it cannot access your code to fix it. It can suggest a meal, but it cannot check your fridge or order from a delivery app.",
        icon: Lock
      },
      {
        title: "Lack of Context",
        desc: "Models don't have access to your private, local environment (Slack messages, local spreadsheets, or database schemas) unless you manually provide them.",
        icon: EyeOff
      }
    ],
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 3,
    title: "The Pre-Standardization Era",
    subtitle: "How we connected AI to the real world before MCP",
    content: "",
    layout: "timeline",
    steps: [
      {
        title: "Stage 1: The Manual Era",
        desc: "The human is the \"bridge.\" Copy-pasting context and results back and forth. High friction, slow, and prone to error.",
        icon: ClipboardCopy
      },
      {
        title: "Stage 2: The Hard-Wired Era",
        desc: "The developers built \"proprietary plugs\" (custom tool calling) that lived inside the application logic. This approach allowed models to move beyond text generation and perform specialized tasks",
        icon: Plug
      }
    ],
    bg: "bg-[#F5F5F3]",
    text: "text-[#1A1A1A]",
    theme: "light"
  },
  {
    id: 4,
    title: "What is a Tool?",
    subtitle: "Giving AI hands and eyes",
    content: "A tool is an executable function or API that an AI model can call to interact with the outside world. It transforms an AI from a passive text generator into an active agent.",
    layout: "what-is-a-tool",
    points: [
      {
        title: "Information Retrieval",
        desc: "Tools allow AI to fetch real-time data, read local files, or query databases, giving it the context it needs to answer accurately.",
        icon: Database
      },
      {
        title: "Taking Action",
        desc: "Tools enable AI to execute code, send emails, modify files, or control software, turning decisions into real-world impact.",
        icon: Terminal
      },
      {
        title: "Specialized Computation",
        desc: "Instead of guessing math or logic, an AI can use a calculator or a code interpreter tool to guarantee accurate results.",
        icon: Calculator
      }
    ],
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 5,
    title: "The M × N Problem",
    subtitle: "The Fragmentation Crisis",
    content: "Before a standard, connecting M models to N tools required M × N custom integrations. 5 models × 10 tools = 50 separate codebases to maintain.",
    layout: "mxn",
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 6,
    title: "The MCP Moment",
    subtitle: "The Universal Standard",
    content: "A shift from fragmented, custom-coded \"features\" to a unified, open-source ecosystem that allows AI to communicate with any tool or data source.",
    points: [
      {
        title: "The Origins",
        desc: "Developed by Anthropic (2024); now a neutral, Open Standard.",
        icon: Globe
      },
      {
        title: "The \"USB-C\" for AI",
        desc: "One universal plug that connects any AI model to any tool.",
        icon: Usb
      },
      {
        title: "The 1 × N Shift",
        desc: "Build a tool once → use it in any AI app (Cline, Cursor, Claude).",
        icon: Network
      },
      {
        title: "Decoupled Architecture",
        desc: "Separates the AI Brain (Reasoning) from the Tool Body (Execution).",
        icon: BrainCircuit
      },
      {
        title: "Dynamic Discovery",
        desc: "AI \"asks\" the server what it can do and learns new skills instantly.",
        icon: Search
      }
    ],
    layout: "mcp-hub",
    bg: "bg-[#F5F5F3]",
    text: "text-[#1A1A1A]",
    theme: "light"
  },
  {
    id: 7,
    title: "The Architecture of MCP",
    subtitle: "Host, Client, and Server",
    content: "Understanding the three main actors in the Model Context Protocol ecosystem.",
    points: [
      {
        title: "The Host (The Home)",
        desc: "The application where the user interacts with the AI (e.g., Cline, Claude Desktop, Cursor). Orchestrates the UI, manages permissions, and decides which servers to \"plug in.\"",
        icon: Cpu
      },
      {
        title: "The Client (The Translator)",
        desc: "The internal component within the Host that speaks the MCP language. Maintains the connection to the server and handles the JSON-RPC handshake.",
        icon: Waypoints
      },
      {
        title: "The Server (The Capability)",
        desc: "A lightweight, standalone process (Node.js, Python, Go) that exposes specific tools (e.g., Postgres Server, GitHub Server). Executes raw code and returns results.",
        icon: Server
      }
    ],
    layout: "architecture",
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 8,
    title: "The Mechanism — Under the Hood",
    subtitle: "How the protocol actually works",
    content: "MCP uses a client-server architecture where the Host (like Cline or Cursor) acts as the bridge between the AI model and local tools.",
    points: [
      {
        title: "The Communication Layer",
        desc: "Uses JSON-RPC 2.0, a lightweight, text-based protocol. Communicates via Standard Input/Output (stdio) or HTTP/SSE.",
        icon: Link
      },
      {
        title: "The \"Handshake\" Loop",
        desc: "Discovery: Host asks \"What can you do?\" → Server replies with Tools. Call: AI predicts JSON → Host intercepts and executes local code.",
        icon: Handshake
      },
      {
        title: "Security by Design",
        desc: "The Server runs as a local process. The AI model never has direct access to your system; the Host acts as a gatekeeper.",
        icon: Lock
      }
    ],
    layout: "mechanism",
    bg: "bg-[#F5F5F3]",
    text: "text-[#1A1A1A]",
    theme: "light"
  },
  {
    id: 9,
    title: "Anatomy of an MCP Tool",
    subtitle: "How tools are defined and understood by AI",
    content: "Every MCP tool follows a strict JSON schema that tells the AI exactly what the tool does and how to use it.",
    points: [
      {
        title: "Name",
        desc: "A unique identifier for the tool (e.g., read_file, query_database). It must be clear and descriptive.",
        icon: Terminal
      },
      {
        title: "Description",
        desc: "A detailed explanation of what the tool does, when the AI should use it, and any important context.",
        icon: FileText
      },
      {
        title: "Input Schema",
        desc: "A JSON Schema defining the exact arguments, types, and required fields the tool expects to receive.",
        icon: FileJson
      }
    ],
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 10,
    title: "3 Core Primitives",
    subtitle: "The Building Blocks of MCP",
    content: "The Model Context Protocol standardizes how AI interacts with the world using three fundamental building blocks.",
    points: [
      {
        title: "Resources",
        desc: "Read-only data that the model can access to gain context. Think of this as giving the AI access to read files, database schemas, or API responses.",
        icon: Database
      },
      {
        title: "Prompts",
        desc: "Reusable, pre-written instructions and templates. These help standardize how users ask the AI to perform specific, repeatable tasks.",
        icon: FileText
      },
      {
        title: "Tools",
        desc: "Executable functions the model can call to take action. This allows the AI to run scripts, query databases, or interact with external software.",
        icon: Terminal
      }
    ],
    layout: "primitives",
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  },
  {
    id: 11,
    title: "Commonly Used MCP Servers",
    subtitle: "Real-world integrations powering AI agents today",
    content: "A growing ecosystem of open-source servers allows AI to connect to the tools developers use every day.",
    bubbles: [
      "Filesystem MCP", "Git MCP", "GitHub MCP", "GitLab MCP", "Bitbucket MCP",
      "PostgreSQL MCP", "MySQL MCP", "SQLite MCP", "MongoDB MCP", "Redis MCP",
      "Elasticsearch MCP", "Qdrant MCP", "Pinecone MCP", "Weaviate MCP", "Chroma MCP",
      "Brave Search MCP", "SerpAPI MCP", "Browser Automation MCP", "Playwright MCP",
      "Puppeteer MCP", "Docker MCP", "Kubernetes MCP", "Terminal / Shell MCP",
      "Slack MCP", "Notion MCP", "Google Drive MCP", "Jira MCP", "Linear MCP",
      "S3 MCP", "HTTP / REST API MCP", "SourceBot MCP", "Figma MCP"
    ],
    layout: "floating-bubbles",
    bg: "bg-[#F5F5F3]",
    text: "text-[#1A1A1A]",
    theme: "light"
  },
  {
    id: 12,
    title: "Connecting to an MCP Server",
    subtitle: "How Clients and Servers Link Up",
    bg: "bg-[#1A1A1A]",
    text: "text-[#F5F5F3]",
    theme: "dark"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        zIndex: 0,
        opacity: 1
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 1
      };
    }
  };

  const currentTheme = slides[currentSlide].theme;
  const btnClass = currentTheme === 'dark' 
    ? 'bg-white/10 hover:bg-white/20 text-white' 
    : 'bg-black/5 hover:bg-black/10 text-black';
  const dotClass = currentTheme === 'dark' ? 'bg-white' : 'bg-black';

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      <motion.div
        className="flex h-full w-full"
        animate={{ x: `-${currentSlide * 100}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative flex-shrink-0 w-full h-full flex flex-col items-center justify-center ${
              (slide.layout === 'mcp-hub' || slide.layout === 'mechanism' || slide.layout === 'primitives' || slide.layout === 'architecture' || slide.layout === 'what-is-a-tool') 
                ? 'p-6 md:p-12 lg:p-20' 
                : 'p-12 md:p-24'
            } ${slide.bg} ${slide.text} overflow-hidden`}
          >
            <AmbientBackground />
            <div className={`relative z-10 w-full flex flex-col items-start space-y-6 ${(slide.layout === 'mcp-hub' || slide.layout === 'mechanism' || slide.layout === 'architecture' || slide.layout === 'floating-bubbles' || slide.layout === 'what-is-a-tool') ? 'max-w-7xl' : 'max-w-4xl'}`}>
              {slide.icon && slide.layout !== 'mcp-hub' && slide.layout !== 'mechanism' && slide.layout !== 'architecture' && slide.layout !== 'what-is-a-tool' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 p-5 rounded-2xl bg-black/5 border border-black/10"
                >
                  <slide.icon size={48} strokeWidth={1.5} className="opacity-80" />
                </motion.div>
              )}
              
              {slide.layout !== 'mcp-hub' && slide.layout !== 'mechanism' && slide.layout !== 'architecture' && (
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-semibold tracking-tight"
                >
                  {slide.title}
                </motion.h1>
              )}
              
              {slide.subtitle && slide.layout !== 'mcp-hub' && slide.layout !== 'mechanism' && slide.layout !== 'architecture' && (
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl opacity-60 font-light tracking-wide"
                >
                  {slide.subtitle}
                </motion.h2>
              )}
              
              {slide.content && slide.layout !== 'mcp-hub' && slide.layout !== 'primitives' && slide.layout !== 'mechanism' && slide.layout !== 'architecture' && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`mt-8 text-xl md:text-2xl leading-relaxed opacity-80 max-w-4xl font-light ${slide.layout === 'mxn' ? 'mb-4' : ''}`}
                >
                  <p>{slide.content}</p>
                </motion.div>
              )}

              {slide.points && slide.layout !== 'mcp-hub' && slide.layout !== 'primitives' && slide.layout !== 'mechanism' && slide.layout !== 'architecture' && slide.layout !== 'what-is-a-tool' && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`mt-8 w-full grid grid-cols-1 ${slide.points.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-4 md:gap-6`}
                >
                  {slide.points.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ 
                        default: { delay: 0.5 + (i * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                        scale: { duration: 0.2 },
                        y: { duration: 0.2 }
                      }}
                      className={`flex flex-col space-y-3 p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${
                        slide.theme === 'dark' 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                          : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
                      }`}
                    >
                      {point.icon && (
                        <div className={`p-3 w-fit rounded-xl ${slide.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>
                          <point.icon size={24} strokeWidth={1.5} />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold tracking-tight">{point.title}</h3>
                      <p className="text-sm md:text-base opacity-70 font-light leading-relaxed">{point.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {slide.layout === 'floating-bubbles' && slide.bubbles && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8 }}
                  className="mt-12 w-full flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto"
                >
                  {slide.bubbles.map((bubble, i) => {
                    const getBubbleColor = (index: number, theme: string) => {
                      if (theme === 'dark') {
                        const darkColors = [
                          'bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/40',
                          'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/40',
                          'bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40',
                          'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/40',
                          'bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/20 hover:border-rose-500/40',
                          'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40',
                          'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/40',
                        ];
                        return darkColors[index % darkColors.length];
                      } else {
                        const lightColors = [
                          'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300',
                          'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300',
                          'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 hover:border-purple-300',
                          'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-300',
                          'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100 hover:border-rose-300',
                          'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-300',
                          'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300',
                        ];
                        return lightColors[index % lightColors.length];
                      }
                    };
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0, y: 20 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ 
                          delay: 0.2 + (i * 0.02), type: "spring", stiffness: 100, damping: 15
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{ 
                            scale: { duration: 0.2 },
                            y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                          }}
                          className={`px-4 py-2 md:px-6 md:py-3 rounded-full border backdrop-blur-md shadow-sm flex items-center justify-center text-sm md:text-base font-medium whitespace-nowrap cursor-default transition-colors ${getBubbleColor(i, slide.theme)}`}
                        >
                          {bubble}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {slide.layout === 'primitives' && slide.points && (
                <div className="w-full flex flex-col mt-8">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl leading-relaxed opacity-80 max-w-4xl font-light mb-12"
                  >
                    <p>{slide.content}</p>
                  </motion.div>

                  <div className="flex flex-col md:flex-row w-full gap-6 h-auto md:h-[400px]">
                    {slide.points.map((point, i) => {
                      const colors = [
                        { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', hoverBg: 'hover:bg-cyan-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]', icon: 'text-cyan-400', bgIcon: 'text-cyan-500/5' },
                        { border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/10', hoverBg: 'hover:bg-fuchsia-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(217,70,239,0.3)]', icon: 'text-fuchsia-400', bgIcon: 'text-fuchsia-500/5' },
                        { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', hoverBg: 'hover:bg-emerald-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]', icon: 'text-emerald-400', bgIcon: 'text-emerald-500/5' }
                      ];
                      const color = colors[i];

                      return (
                        <motion.div
                          key={i}
                          initial={{ y: 40, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ delay: 0.5 + (i * 0.2), duration: 0.7, type: "spring", bounce: 0.4 }}
                          className={`group relative flex-1 flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:flex-[1.15] ${color.hoverBg} ${color.glow} hover:border-white/30`}
                        >
                          {/* Large Background Icon */}
                          {point.icon && (
                            <point.icon 
                              size={240} 
                              strokeWidth={0.5} 
                              className={`absolute -bottom-10 -right-10 ${color.bgIcon} transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12`} 
                            />
                          )}
                          
                          <div className="relative z-10 flex flex-col h-full">
                            {point.icon && (
                              <div className={`w-16 h-16 rounded-2xl ${color.bg} border ${color.border} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                <point.icon size={32} strokeWidth={1.5} className={color.icon} />
                              </div>
                            )}
                            <h3 className="text-3xl font-semibold tracking-tight mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                              {point.title}
                            </h3>
                            <p className="text-base md:text-lg opacity-70 font-light leading-relaxed text-white/90">
                              {point.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {slide.layout === 'timeline' && slide.steps && (
                <motion.div className="mt-20 w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24 relative max-w-5xl mx-auto">
                  <div className="hidden md:block absolute top-16 left-[22%] right-[22%] h-1.5 bg-black/5 z-0 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-indigo-500/30"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                      initial={{ left: "-25%" }}
                      whileInView={{ left: "100%" }}
                      transition={{ delay: 2.3, duration: 1.5, ease: "linear", repeat: Infinity }}
                    />
                  </div>
                  {slide.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.4 + (i * 0.4), duration: 0.7, type: "spring", bounce: 0.4 }}
                      className="relative z-10 flex flex-col items-center text-center flex-1 max-w-sm group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-32 h-32 rounded-3xl bg-white shadow-2xl border border-black/5 flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                      >
                        <step.icon size={48} strokeWidth={1.5} className="text-black/70 group-hover:text-indigo-600 transition-colors duration-500" />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (i * 0.4), duration: 0.4 }}
                        className="bg-black/5 text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-full mb-6"
                      >
                        Stage {i + 1}
                      </motion.div>
                      <h3 className="text-3xl font-semibold tracking-tight mb-4">{step.title.split(': ')[1] || step.title}</h3>
                      <p className="text-lg opacity-70 font-light leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {slide.layout === 'mxn' && (
                <div className="relative w-full max-w-4xl h-[350px] md:h-[400px] bg-white/5 rounded-3xl border border-white/10 mt-4 mx-auto overflow-hidden shadow-2xl shrink-0">
                  <div className="absolute top-4 left-[20%] -translate-x-1/2 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold tracking-widest text-white uppercase backdrop-blur-md border border-white/10 z-20">M Models</div>
                  <div className="absolute top-4 left-[80%] -translate-x-1/2 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold tracking-widest text-white uppercase backdrop-blur-md border border-white/10 z-20">N Tools</div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[30, 55, 80].map((ly, m) =>
                      [25, 45, 65, 85].map((ry, n) => (
                        <g key={`${m}-${n}`}>
                          <motion.line
                            x1="20%" y1={`${ly}%`}
                            x2="80%" y2={`${ry}%`}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + Math.random() * 0.5, duration: 1.5, ease: "easeInOut" }}
                          />
                          <motion.line
                            x1="20%" y1={`${ly}%`}
                            x2="80%" y2={`${ry}%`}
                            stroke="rgba(99,102,241,0.3)"
                            strokeWidth="2"
                            strokeDasharray="6 26"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, strokeDashoffset: [0, -32] }}
                            transition={{ 
                              opacity: { delay: 1.5, duration: 1 },
                              strokeDashoffset: { duration: 1.5 + Math.random(), repeat: Infinity, ease: "linear" }
                            }}
                          />
                        </g>
                      ))
                    )}
                  </svg>

                  {[Brain, Cpu, Network].map((Icon, i) => {
                    const ly = [30, 55, 80][i];
                    return (
                      <motion.div
                        key={`l-${i}`}
                        className="absolute w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.2)] z-10"
                        style={{ top: `${ly}%`, left: '20%', x: '-50%', y: '-50%' }}
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + i * 0.15, type: "spring", bounce: 0.5 }}
                      >
                        <Icon size={24} className="text-indigo-300 md:w-7 md:h-7" />
                      </motion.div>
                    );
                  })}

                  {[Database, Terminal, Plug, Blocks].map((Icon, i) => {
                    const ry = [25, 45, 65, 85][i];
                    return (
                      <motion.div
                        key={`r-${i}`}
                        className="absolute w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.2)] z-10"
                        style={{ top: `${ry}%`, left: '80%', x: '-50%', y: '-50%' }}
                        initial={{ scale: 0, rotate: 45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.15, type: "spring", bounce: 0.5 }}
                      >
                        <Icon size={24} className="text-emerald-300 md:w-7 md:h-7" />
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {slide.layout === 'architecture' && (
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-h-full overflow-y-auto lg:overflow-visible custom-scrollbar">
                  {/* Left Column: Text & Points */}
                  <div className="flex-1 flex flex-col w-full space-y-4 md:space-y-6">
                    <motion.h1 
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    {slide.subtitle && (
                      <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl opacity-60 font-light tracking-wide"
                      >
                        {slide.subtitle}
                      </motion.h2>
                    )}
                    
                    {slide.content && (
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl leading-relaxed opacity-80 font-light"
                      >
                        <p>{slide.content}</p>
                      </motion.div>
                    )}

                    {/* Points List */}
                    {slide.points && (
                      <div className="flex flex-col gap-3 w-full mt-2">
                        {slide.points.map((point, i) => (
                          <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 5, scale: 1.01 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ 
                              default: { delay: 0.4 + (i * 0.1), duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                              x: { duration: 0.2 },
                              scale: { duration: 0.2 }
                            }}
                            className={`group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                              slide.theme === 'dark' 
                                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-white/5' 
                                : 'bg-white border-black/5 hover:border-indigo-500/30 hover:shadow-indigo-500/10'
                            }`}
                          >
                            {point.icon && (
                              <div className={`p-2.5 shrink-0 rounded-xl transition-colors duration-300 ${
                                slide.theme === 'dark' 
                                  ? 'bg-white/10 text-white group-hover:bg-white/20' 
                                  : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                              }`}>
                                <point.icon size={22} strokeWidth={1.5} />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <h3 className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                                slide.theme === 'dark' ? 'text-white' : 'text-slate-900 group-hover:text-indigo-900'
                              }`}>{point.title}</h3>
                              <p className="text-sm md:text-base opacity-70 font-light leading-relaxed mt-1">{point.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column: Architecture Diagram */}
                  <div className={`flex-1 relative w-full h-[400px] lg:h-[600px] rounded-3xl border shadow-2xl overflow-hidden flex items-center justify-center mt-8 lg:mt-0 shrink-0 ${
                    slide.theme === 'dark' ? 'bg-slate-900/50 border-white/10' : 'bg-slate-50 border-black/5'
                  }`}>
                    {/* Background grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(150,150,150,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    
                    <div className="relative flex flex-col items-center justify-between h-[80%] w-full max-w-sm z-10">
                      
                      {/* AI Model Node */}
                      <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={`flex flex-col items-center p-4 rounded-2xl border w-48 text-center backdrop-blur-md ${
                          slide.theme === 'dark' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        }`}
                      >
                        <Brain size={32} className="mb-2" />
                        <span className="font-semibold">AI Model</span>
                        <span className="text-xs opacity-70">Claude, GPT-4, etc.</span>
                      </motion.div>

                      {/* Connection 1 */}
                      <div className="relative h-16 w-px flex items-center justify-center">
                        <div className={`absolute inset-0 w-px ${slide.theme === 'dark' ? 'bg-indigo-500/30' : 'bg-indigo-300'}`}></div>
                        <motion.div 
                          className={`w-2 h-2 rounded-full ${slide.theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'}`}
                          animate={{ y: [-30, 30] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      {/* Host Node */}
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className={`flex flex-col items-center p-5 rounded-2xl border w-64 text-center shadow-xl backdrop-blur-md relative ${
                          slide.theme === 'dark' ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <Cpu size={36} className="mb-2 text-blue-500" />
                        <span className="font-bold text-lg">The Host</span>
                        <span className="text-xs opacity-70 mb-3">Cursor, Cline, Claude Desktop</span>
                        
                        {/* Client Sub-node */}
                        <div className={`w-full p-2 rounded-xl border flex items-center justify-center gap-2 ${
                          slide.theme === 'dark' ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-100 border-slate-200'
                        }`}>
                          <Waypoints size={16} className="text-emerald-500" />
                          <span className="text-sm font-medium">MCP Client</span>
                        </div>
                      </motion.div>

                      {/* Connection 2 (MCP Protocol) */}
                      <div className="relative h-16 w-full flex items-center justify-center">
                        <div className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${slide.theme === 'dark' ? 'border-emerald-500/50' : 'border-emerald-500/50'}`}></div>
                        <div className={`absolute px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${
                          slide.theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          MCP Protocol
                        </div>
                        <motion.div 
                          className={`absolute w-2 h-2 rounded-full ${slide.theme === 'dark' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]'}`}
                          animate={{ y: [-30, 30] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      {/* Server Node */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className={`flex flex-col items-center p-4 rounded-2xl border w-48 text-center backdrop-blur-md ${
                          slide.theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}
                      >
                        <Server size={32} className="mb-2" />
                        <span className="font-semibold">MCP Server</span>
                        <span className="text-xs opacity-70">Postgres, GitHub, etc.</span>
                      </motion.div>

                    </div>
                  </div>
                </div>
              )}

              {slide.layout === 'what-is-a-tool' && (
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-h-full overflow-y-auto lg:overflow-visible custom-scrollbar">
                  {/* Left Column: Text & Points */}
                  <div className="flex-1 flex flex-col w-full space-y-4 md:space-y-6">
                    <motion.h1 
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    {slide.subtitle && (
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl font-medium text-indigo-400"
                      >
                        {slide.subtitle}
                      </motion.div>
                    )}

                    {slide.content && (
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl leading-relaxed opacity-80 font-light"
                      >
                        <p>{slide.content}</p>
                      </motion.div>
                    )}

                    {/* Points List */}
                    {slide.points && (
                      <div className="flex flex-col gap-3 w-full mt-2">
                        {slide.points.map((point, i) => (
                          <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                            className={`p-4 rounded-xl border flex items-start gap-4 ${
                              slide.theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 ${
                              slide.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                            }`}>
                              <point.icon size={20} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-base mb-1">{point.title}</h3>
                              <p className="text-sm opacity-70 leading-relaxed">{point.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Illustration */}
                  <div className="flex-1 w-full flex items-center justify-center relative min-h-[400px] lg:min-h-[500px] py-12 lg:py-0">
                    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                      {/* Central AI Brain */}
                      <motion.div
                        className="absolute z-20 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                        animate={{
                          boxShadow: [
                            "0 0 30px rgba(99,102,241,0.6)",
                            "0 0 60px rgba(99,102,241,0.9)",
                            "0 0 30px rgba(99,102,241,0.6)",
                          ],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <BrainCircuit size={40} className="text-white" />
                      </motion.div>

                      {/* Tools connecting */}
                      {[
                        { icon: Database, label: "Database", angle: 0, delay: 0 },
                        { icon: Terminal, label: "Terminal", angle: 60, delay: 1 },
                        { icon: Globe, label: "Web", angle: 120, delay: 2 },
                        { icon: FileText, label: "Files", angle: 180, delay: 3 },
                        { icon: Calculator, label: "Math", angle: 240, delay: 4 },
                        { icon: Search, label: "Search", angle: 300, delay: 5 },
                      ].map((tool, i) => {
                        const radius = 130;
                        const x = Math.cos((tool.angle * Math.PI) / 180) * radius;
                        const y = Math.sin((tool.angle * Math.PI) / 180) * radius;
                        
                        return (
                          <motion.div
                            key={i}
                            className="absolute flex flex-col items-center justify-center gap-2"
                            initial={{ opacity: 0, x: x * 1.5, y: y * 1.5 }}
                            whileInView={{ opacity: 1, x, y }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 + tool.delay * 0.5, duration: 0.8, type: "spring" }}
                          >
                            {/* Connection Line */}
                            <motion.svg
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
                              width={radius * 2}
                              height={radius * 2}
                              style={{ transform: `rotate(${tool.angle + 180}deg)` }}
                            >
                              <motion.line
                                x1={radius}
                                y1={radius}
                                x2={radius * 2}
                                y2={radius}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                className="text-indigo-500/30"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ delay: 1 + tool.delay * 0.5, duration: 1 }}
                              />
                              {/* Energy pulse */}
                              <motion.circle
                                cx={radius * 2}
                                cy={radius}
                                r="3"
                                fill="#818cf8"
                                animate={{
                                  cx: [radius * 2, radius]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: tool.delay * 0.5,
                                  ease: "linear"
                                }}
                              />
                            </motion.svg>

                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-lg">
                              <tool.icon size={20} className="text-emerald-400" />
                            </div>
                            <span className="text-[10px] md:text-xs font-medium text-white/70 absolute -bottom-5 whitespace-nowrap">{tool.label}</span>
                          </motion.div>
                        );
                      })}
                      
                      {/* Expanding rings to show power growing */}
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={`ring-${ring}`}
                          className="absolute rounded-full border border-indigo-500/20"
                          style={{ width: 80 + ring * 70, height: 80 + ring * 70 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 0.2, scale: 1 }}
                          viewport={{ once: false }}
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.1, 0.3, 0.1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: ring * 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {slide.layout === 'mcp-hub' && (
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
                  {/* Left Column: Text & Points */}
                  <div className="flex-1 flex flex-col w-full space-y-4 md:space-y-6">
                    <motion.h1 
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    {slide.subtitle && (
                      <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl opacity-60 font-light tracking-wide"
                      >
                        {slide.subtitle}
                      </motion.h2>
                    )}
                    
                    {slide.content && (
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl leading-relaxed opacity-80 font-light"
                      >
                        <p>{slide.content}</p>
                      </motion.div>
                    )}

                    {/* Points List */}
                    {slide.points && (
                      <div className="flex flex-col gap-3 w-full mt-2">
                        {slide.points.map((point, i) => (
                          <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 5, scale: 1.01 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ 
                              default: { delay: 0.4 + (i * 0.1), duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                              x: { duration: 0.2 },
                              scale: { duration: 0.2 }
                            }}
                            className={`group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                              slide.theme === 'dark' 
                                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-white/5' 
                                : 'bg-white border-black/5 hover:border-indigo-500/30 hover:shadow-indigo-500/10'
                            }`}
                          >
                            {point.icon && (
                              <div className={`p-2.5 shrink-0 rounded-xl transition-colors duration-300 ${
                                slide.theme === 'dark' 
                                  ? 'bg-white/10 text-white group-hover:bg-white/20' 
                                  : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                              }`}>
                                <point.icon size={20} strokeWidth={1.5} />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <h3 className={`text-sm md:text-base font-semibold tracking-tight transition-colors duration-300 ${
                                slide.theme === 'dark' ? 'text-white' : 'text-slate-900 group-hover:text-indigo-900'
                              }`}>{point.title}</h3>
                              <p className="text-xs md:text-sm opacity-70 font-light leading-snug mt-1">{point.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Illustration */}
                  <div className="flex-1 relative w-full h-[320px] lg:h-[500px] bg-white rounded-3xl border border-black/5 overflow-hidden shadow-xl shrink-0 flex items-center justify-center mt-6 lg:mt-0">
                    {/* Central Universal Socket */}
                  <motion.div
                    className="absolute z-20 w-32 h-48 md:w-40 md:h-64 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.2)] border-4 border-slate-700"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <Usb size={48} className="text-indigo-400 opacity-90" />
                      <div className="font-bold tracking-widest text-xs md:text-sm text-white text-center leading-tight">
                        UNIVERSAL<br/>STANDARD
                      </div>
                      <div className="flex gap-2 mt-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-1.5 h-6 bg-indigo-500/50 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    {/* Left side lines (Models) */}
                    {[20, 50, 80].map((ly, i) => (
                      <g key={`l-line-${i}`}>
                        <motion.path
                          d={`M 150 ${ly * 10} C 350 ${ly * 10}, 400 500, 500 500`}
                          fill="none"
                          stroke="rgba(0,0,0,0.1)"
                          strokeWidth="4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                        />
                        <motion.path
                          d={`M 150 ${ly * 10} C 350 ${ly * 10}, 400 500, 500 500`}
                          fill="none"
                          stroke="rgba(99,102,241,0.8)"
                          strokeWidth="4"
                          strokeDasharray="30 60"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1, strokeDashoffset: [0, -90] }}
                          transition={{ 
                            opacity: { delay: 1.5, duration: 1 },
                            strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
                          }}
                        />
                        {/* Left side data packet */}
                        <motion.path
                          d={`M 150 ${ly * 10} C 350 ${ly * 10}, 400 500, 500 500`}
                          fill="none"
                          stroke="rgba(99,102,241,1)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                          whileInView={{ 
                            pathOffset: [0, 1],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.3,
                            times: [0, 0.2, 0.8, 1]
                          }}
                        />
                      </g>
                    ))}

                    {/* Right side lines (Tools) */}
                    {[15, 38, 62, 85].map((ry, i) => (
                      <g key={`r-line-${i}`}>
                        <motion.path
                          d={`M 500 500 C 600 500, 650 ${ry * 10}, 850 ${ry * 10}`}
                          fill="none"
                          stroke="rgba(0,0,0,0.1)"
                          strokeWidth="4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ delay: 1.2 + i * 0.15, duration: 1 }}
                        />
                        {/* Continuous dashed line */}
                        <motion.path
                          d={`M 500 500 C 600 500, 650 ${ry * 10}, 850 ${ry * 10}`}
                          fill="none"
                          stroke="rgba(16,185,129,0.3)"
                          strokeWidth="4"
                          strokeDasharray="30 60"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1, strokeDashoffset: [0, -90] }}
                          transition={{ 
                            opacity: { delay: 1.8, duration: 1 },
                            strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
                          }}
                        />
                        {/* Traveling data packet */}
                        <motion.path
                          d={`M 500 500 C 600 500, 650 ${ry * 10}, 850 ${ry * 10}`}
                          fill="none"
                          stroke="rgba(16,185,129,1)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                          whileInView={{ 
                            pathOffset: [0, 1],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: 1 + i * 0.4,
                            times: [0, 0.2, 0.8, 1]
                          }}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Left side icons (Models) */}
                  {[Brain, Cpu, Network].map((Icon, i) => {
                    const ly = [20, 50, 80][i];
                    const labels = ["Claude", "Cursor", "Cline"];
                    return (
                      <motion.div
                        key={`l-icon-${i}`}
                        className="absolute flex flex-col items-center z-20"
                        style={{ top: `${ly}%`, left: '15%', x: '-50%', y: '-50%' }}
                        initial={{ scale: 0, x: '-100%', y: '-50%' }}
                        whileInView={{ scale: 1, x: '-50%', y: '-50%' }}
                        transition={{ delay: 0.2 + i * 0.15, type: "spring", bounce: 0.5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center shadow-xl mb-2 relative"
                          whileInView={{ 
                            boxShadow: ["0px 0px 0px rgba(99,102,241,0)", "0px 0px 30px rgba(99,102,241,0.8)", "0px 0px 0px rgba(99,102,241,0)"],
                            borderColor: ["rgba(0,0,0,0.1)", "rgba(99,102,241,0.8)", "rgba(0,0,0,0.1)"],
                            scale: [1, 1.15, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3 // Sync with left packet departure
                          }}
                        >
                          <Icon size={24} className="text-indigo-600 md:w-8 md:h-8" />
                        </motion.div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider bg-white/90 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">{labels[i]}</div>
                      </motion.div>
                    );
                  })}

                  {/* Right side icons (Tools) */}
                  {[Database, Terminal, FileText, Cloud].map((Icon, i) => {
                    const ry = [15, 38, 62, 85][i];
                    const labels = ["Postgres", "Bash", "Files", "AWS"];
                    return (
                      <motion.div
                        key={`r-icon-${i}`}
                        className="absolute flex flex-col items-center z-20"
                        style={{ top: `${ry}%`, left: '85%', x: '-50%', y: '-50%' }}
                        initial={{ scale: 0, x: '0%', y: '-50%' }}
                        whileInView={{ scale: 1, x: '-50%', y: '-50%' }}
                        transition={{ delay: 0.4 + i * 0.15, type: "spring", bounce: 0.5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center shadow-xl mb-2 relative"
                          whileInView={{ 
                            boxShadow: ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 30px rgba(16,185,129,0.8)", "0px 0px 0px rgba(16,185,129,0)"],
                            borderColor: ["rgba(0,0,0,0.1)", "rgba(16,185,129,0.8)", "rgba(0,0,0,0.1)"],
                            scale: [1, 1.15, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1 + i * 0.4 + 1.8 // Sync with right packet arrival
                          }}
                        >
                          <Icon size={24} className="text-emerald-600 md:w-8 md:h-8" />
                        </motion.div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider bg-white/90 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">{labels[i]}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {slide.layout === 'mechanism' && (
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full max-h-full overflow-y-auto lg:overflow-visible custom-scrollbar">
                {/* Left Column: Text & Points */}
                <div className="flex-1 flex flex-col w-full space-y-3 md:space-y-4 lg:space-y-6">
                  <div className="space-y-2 md:space-y-4">
                    <motion.h1 
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    {slide.subtitle && (
                      <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl lg:text-2xl opacity-60 font-light tracking-wide"
                      >
                        {slide.subtitle}
                      </motion.h2>
                    )}
                  </div>
                  
                  {slide.content && (
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-light"
                    >
                      <p>{slide.content}</p>
                    </motion.div>
                  )}

                  {/* Points List */}
                  {slide.points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 w-full mt-2">
                      {slide.points.map((point, i) => {
                        const colors = [
                          { bg: 'bg-blue-500/5', border: 'border-blue-500/20', iconBg: 'bg-blue-500/10', iconText: 'text-blue-600' },
                          { bg: 'bg-purple-500/5', border: 'border-purple-500/20', iconBg: 'bg-purple-500/10', iconText: 'text-purple-600' },
                          { bg: 'bg-orange-500/5', border: 'border-orange-500/20', iconBg: 'bg-orange-500/10', iconText: 'text-orange-600' }
                        ];
                        const color = colors[i % colors.length];

                        return (
                          <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 5, scale: 1.01 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ 
                              default: { delay: 0.4 + (i * 0.1), duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                              x: { duration: 0.2 },
                              scale: { duration: 0.2 }
                            }}
                            className={`group flex items-start gap-3 p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                              slide.theme === 'dark' 
                                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                                : `${color.bg} ${color.border} hover:bg-white hover:border-indigo-500/30`
                            }`}
                          >
                            {point.icon && (
                              <div className={`p-2 shrink-0 rounded-xl transition-colors duration-300 ${
                                slide.theme === 'dark' 
                                  ? 'bg-white/10 text-white group-hover:bg-white/20' 
                                  : `${color.iconBg} ${color.iconText} group-hover:bg-indigo-50 group-hover:text-indigo-600`
                              }`}>
                                <point.icon size={18} strokeWidth={1.5} />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <h3 className={`text-sm md:text-base font-semibold tracking-tight transition-colors duration-300 ${
                                slide.theme === 'dark' ? 'text-white' : 'text-slate-900 group-hover:text-indigo-900'
                              }`}>{point.title}</h3>
                              <p className="text-xs md:text-sm opacity-70 font-light leading-snug mt-0.5">{point.desc}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                {/* Right Column: Illustration */}
                <div className={`flex-1 relative w-full h-[280px] sm:h-[350px] lg:h-[500px] rounded-3xl border shadow-xl overflow-hidden flex items-center justify-center mt-4 lg:mt-0 shrink-0 ${
                  slide.theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-black/5'
                }`}>
                  <div className="relative w-full h-full p-4 md:p-8 flex flex-col justify-between">
                    <div className="relative w-full h-16 md:h-24 z-10">
                      <div className="absolute left-[15%] top-0 -translate-x-1/2 flex flex-col items-center space-y-1 md:space-y-2">
                        <motion.div 
                          className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border ${
                            slide.theme === 'dark' ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'bg-indigo-100 text-indigo-600 border-indigo-200'
                          }`}
                          animate={{
                            boxShadow: [
                              "0px 0px 0px rgba(0,0,0,0)",
                              "0px 0px 20px rgba(99,102,241,0.6)",
                              "0px 0px 0px rgba(0,0,0,0)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Brain size={20} className="md:w-8 md:h-8" />
                        </motion.div>
                        <span className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">AI Model</span>
                      </div>
                      <div className="absolute left-[50%] top-0 -translate-x-1/2 flex flex-col items-center space-y-1 md:space-y-2">
                        <motion.div 
                          className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border shadow-lg ${
                            slide.theme === 'dark' ? 'bg-slate-800 text-white border-slate-700' : 'bg-slate-800 text-white border-slate-700'
                          }`}
                          animate={{
                            boxShadow: [
                              "0px 0px 0px rgba(0,0,0,0)",
                              "0px 0px 20px rgba(148,163,184,0.6)",
                              "0px 0px 0px rgba(0,0,0,0)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        >
                          <Cpu size={20} className="md:w-8 md:h-8" />
                        </motion.div>
                        <span className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Host (Cline)</span>
                      </div>
                      <div className="absolute left-[85%] top-0 -translate-x-1/2 flex flex-col items-center space-y-1 md:space-y-2">
                        <motion.div 
                          className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border ${
                            slide.theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-600 border-emerald-200'
                          }`}
                          animate={{
                            boxShadow: [
                              "0px 0px 0px rgba(0,0,0,0)",
                              "0px 0px 20px rgba(52,211,153,0.6)",
                              "0px 0px 0px rgba(0,0,0,0)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                          }}
                        >
                          <Server size={20} className="md:w-8 md:h-8" />
                        </motion.div>
                        <span className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">MCP Server</span>
                      </div>
                    </div>

                    {/* Lifelines */}
                    <div className={`absolute top-20 md:top-32 bottom-8 left-[15%] w-px border-dashed border-l ${slide.theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-slate-200 border-slate-300'}`} />
                    <div className={`absolute top-20 md:top-32 bottom-8 left-[50%] w-px border-dashed border-l ${slide.theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-slate-200 border-slate-300'}`} />
                    <div className={`absolute top-20 md:top-32 bottom-8 left-[85%] w-px border-dashed border-l ${slide.theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-slate-200 border-slate-300'}`} />

                    {/* Messages */}
                    <div className="relative flex-1 mt-4 md:mt-6 space-y-2 md:space-y-4 lg:space-y-5">
                      {[
                        { id: 1, label: '"What can you do?"', left: '50%', right: '15%', arrow: 'right', color: 'slate', start: 1, end: 2.5 },
                        { id: 2, label: 'List of Tools', left: '50%', right: '15%', arrow: 'left', color: 'emerald', start: 2, end: 3.5 },
                        { id: 3, label: 'System Prompt + Tools', left: '15%', right: '50%', arrow: 'left', color: 'indigo-light', start: 3, end: 4.5 },
                        { id: 4, label: "{method: 'tools/call'}", left: '15%', right: '50%', arrow: 'right', color: 'indigo', start: 4, end: 5.5 },
                        { id: 5, label: 'Execute Local Code', left: '50%', right: '15%', arrow: 'right', color: 'slate-dark', start: 5, end: 6.5 },
                        { id: 6, label: 'Tool Result', left: '50%', right: '15%', arrow: 'left', color: 'emerald', start: 6, end: 7.5 },
                        { id: 7, label: 'Observation (Result)', left: '15%', right: '50%', arrow: 'left', color: 'indigo-light', start: 7, end: 8.5 },
                        { id: 8, label: 'Final Inference', left: '15%', right: '50%', arrow: 'right', color: 'indigo', start: 8, end: 9.5 },
                      ].map((msg, i) => {
                        const getColors = () => {
                          if (msg.color === 'slate') return slide.theme === 'dark' ? { bg: 'bg-slate-500', border: 'border-slate-500', text: 'text-slate-400' } : { bg: 'bg-slate-300', border: 'border-slate-300', text: 'text-slate-500' };
                          if (msg.color === 'emerald') return slide.theme === 'dark' ? { bg: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-400' } : { bg: 'bg-emerald-400', border: 'border-emerald-400', text: 'text-emerald-600' };
                          if (msg.color === 'indigo-light') return slide.theme === 'dark' ? { bg: 'bg-indigo-500/50', border: 'border-indigo-500/50', text: 'text-indigo-400/70' } : { bg: 'bg-indigo-300', border: 'border-indigo-300', text: 'text-indigo-500' };
                          if (msg.color === 'indigo') return slide.theme === 'dark' ? { bg: 'bg-indigo-500', border: 'border-indigo-500', text: 'text-indigo-400' } : { bg: 'bg-indigo-400', border: 'border-indigo-400', text: 'text-indigo-600' };
                          if (msg.color === 'slate-dark') return slide.theme === 'dark' ? { bg: 'bg-slate-400', border: 'border-slate-400', text: 'text-slate-300' } : { bg: 'bg-slate-800', border: 'border-slate-800', text: 'text-slate-800' };
                          return { bg: '', border: '', text: '' };
                        };
                        const colors = getColors();
                        const DURATION = 25;
                        const startT = msg.start / DURATION;
                        const endT = msg.end / DURATION;
                        const fadeInEndT = (msg.start + 1) / DURATION;
                        const fadeOutStartT = 24 / DURATION;
                        const particleFadeInT = (msg.start + 0.2) / DURATION;
                        
                        return (
                          <motion.div 
                            key={msg.id}
                            className="relative h-4 md:h-5"
                            animate={{ 
                              opacity: [0.3, 0.3, 1, 1, 0.3]
                            }}
                            transition={{ 
                              duration: DURATION, 
                              repeat: Infinity, 
                              times: [0, startT, fadeInEndT, fadeOutStartT, 1], 
                              ease: "easeInOut" 
                            }}
                          >
                            <div 
                              className={`absolute top-2 md:top-2.5 h-0.5 ${colors.bg}`}
                              style={{ left: msg.left, right: msg.right }}
                            >
                              <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 border-t-2 ${
                                msg.arrow === 'right' ? `right-0 border-r-2 rotate-45` : `left-0 border-l-2 rotate-[315deg]`
                              } ${colors.border}`} />
                              
                              {/* Moving particle */}
                              <motion.div
                                className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full z-20 ${
                                  slide.theme === 'dark' ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]'
                                }`}
                                animate={{
                                  left: msg.arrow === 'right' ? ['0%', '0%', '100%', '100%', '100%'] : ['100%', '100%', '0%', '0%', '0%'],
                                  opacity: [0, 0, 1, 0, 0]
                                }}
                                transition={{
                                  duration: DURATION,
                                  repeat: Infinity,
                                  times: [0, startT, particleFadeInT, endT, 1],
                                  ease: "linear"
                                }}
                              />
                            </div>
                            <div 
                              className={`absolute -top-1.5 md:-top-1 text-[6px] md:text-[8px] font-bold text-center ${colors.text}`}
                              style={{ left: msg.left, right: msg.right }}
                            >
                              {msg.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 md:px-12 z-50 pointer-events-none">
        <div className="flex space-x-3 pointer-events-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
              currentSlide === 0 
                ? 'opacity-30 cursor-not-allowed ' + btnClass
                : 'opacity-100 ' + btnClass
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
              currentSlide === slides.length - 1 
                ? 'opacity-30 cursor-not-allowed ' + btnClass
                : 'opacity-100 ' + btnClass
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        {/* Slide Indicator */}
        <div className="flex space-x-3 pointer-events-auto items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? `w-8 opacity-100 ${dotClass}` 
                  : `w-2 opacity-30 hover:opacity-50 ${dotClass}`
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
