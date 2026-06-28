import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaBrain,
  FaDatabase,
  FaChartLine,
  FaPython,
  FaReact,
  FaWhatsapp,
  FaEnvelope,
  FaBook,
  FaPuzzlePiece,
  FaCode,
  FaCertificate,
  FaServer,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
} from "react-icons/fa";
import { BsCpuFill, BsStars, BsSendFill } from "react-icons/bs";
import "./App.css";
import logo from "./assets/logo.png";
import SplashScreen from "./components/SplashScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import BinaryWaves from "./components/BinaryWaves";
import FloatingIcons from "./components/FloatingIcons";

import hero from "./assets/hero.png";
import robot from "./assets/robot_transparent_3x.png";

import project1 from "./assets/Project1.png";
import project2 from "./assets/Project2.png";
import project3 from "./assets/Project3.png";

import cert1 from "./assets/cert1.png";
import cert2 from "./assets/cert2.png";
import cert3 from "./assets/cert3.png";
import cert4 from "./assets/cert4.png";
import resume from "./assets/resume.pdf";

const projects = [
  {
    title: "FINEXA",
    role: "Graduation Project | AI/ML Engineer & Backend Integration",
    desc: "AI-powered personal finance management platform with a FastAPI forecasting microservice, smart saving recommendations, and backend AI integration through ASP.NET Core.",
    gallery: [project1, project2, project3],
    tags: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Random Forest",
      "REST APIs",
      "ASP.NET Core",
      "Vercel",
    ],
    details: [
      "Developed and integrated a FastAPI AI microservice for personal finance forecasting and smart saving recommendations.",
      "Built an expense forecasting pipeline using Python, pandas, NumPy, and scikit-learn.",
      "Trained a Random Forest Regression model with lag features, rolling averages, category encoding, and log-target transformation.",
      "Designed an explainable Smart Saving Plan Advisor with financial guardrails and recommendation logic.",
      "Integrated the AI service through the main ASP.NET Core backend rather than direct frontend communication.",
    ],
    icon: <FaBrain />,
  },
  {
    title: "Student Performance Predictor",
    desc: "Regression and Neural Network model with preprocessing, Early Stopping, LR Scheduler, Dropout, and Streamlit deployment.",
    tags: ["Regression", "Neural Networks", "Keras", "Streamlit"],
    icon: <FaChartLine />,
  },
  {
    title: "Sudoku Solver",
    desc: "Hybrid solver using Genetic Algorithm including mutation, crossover, fitness plus classical Backtracking to optimize solving time.",
    tags: ["Genetic Algorithm", "Backtracking", "Fitness", "Optimization"],
    icon: <FaPuzzlePiece />,
  },
  {
    title: "Data Mining Project",
    desc: "Applied Decision Tree, SVM, and KNN with preprocessing including scaling and encoding, and evaluation via cross-validation.",
    tags: ["Decision Tree", "SVM", "KNN", "Cross Validation"],
    icon: <FaDatabase />,
  },
  {
    title: "BookSwap",
    desc: "React web app with components, hooks, state management, and REST API integration.",
    tags: ["React", "Hooks", "REST API", "Web App"],
    icon: <FaReact />,
  },
  {
    title: "MoneyTracker",
    desc: "Responsive React app for expense tracking with reusable components and state-based logic.",
    tags: ["React", "Finance", "State", "Responsive"],
    icon: <FaBook />,
  },
];

const experience = [
  {
    title: "Norm Production",
    role: "Software Engineer / AI & Web Development",
    type: "Professional Experience",
    desc: "Worked on production-ready web applications and AI-integrated solutions.",
    icon: <FaBriefcase />,
  },
  {
    title: "DEPI - Microsoft ML Engineer Track",
    type: "Training Program",
    date: "2025 - Present",
    desc: "Machine Learning Engineer training track focused on ML, Deep Learning, NLP, and MLOps growth.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Time Management & Shopping Behavior - EG Bank",
    type: "Training Session",
    desc: "Training session focused on time management and shopping behavior.",
    icon: <BsCpuFill />,
  },
];

const certificates = [
  {
    title: "IBM – Machine Learning with Python",
    date: "2025",
    image: cert1,
    type: "IBM",
  },
  {
    title: "IBM – Introduction to Deep Learning & Neural Networks with Keras",
    date: "2025",
    image: cert2,
    type: "IBM",
  },
  {
    title: "IBM – Deep Learning with Keras and TensorFlow",
    date: "2026",
    image: cert3,
    type: "IBM",
  },
  {
    title: "Introduction to Artificial Intelligence & Applications",
    subtitle: "Zewail City – Certificate of Attendance",
    date: "August 2023",
    image: cert4,
    type: "Zewail",
  },
  {
    title: "DEPI – Microsoft ML Engineer Track",
    date: "2025–Present",
    image: null,
    type: "Training",
  },
  {
    title: "Time Management & Shopping Behavior",
    subtitle: "EG Bank Training Session",
    image: null,
    type: "Training",
  },
];

const skills = [
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation",
      "Cross Validation",
      "Scikit-learn",
    ],
  },
  {
    title: "Python for AI",
    icon: <FaPython />,
    items: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Deep Learning",
    icon: <BsCpuFill />,
    items: [
      "Neural Networks with Keras",
      "Activation Functions",
      "Loss Functions",
      "Basics of CNNs",
      "Basics of NLP Models",
    ],
  },
  {
    title: "Backend / APIs",
    icon: <FaServer />,
    items: [
      "FastAPI",
      "REST APIs",
      "ASP.NET Core basics",
      "Swagger documentation",
      "Backend integration",
    ],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    items: ["React", "Hooks", "State", "Components", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["SQL Server", "MySQL", "MongoDB", "Realtime DB"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: ["Python", "C", "C++", "C#", "Java OOP", "PHP", "HTML / HTML5", "CSS / CSS3"],
  },
  {
    title: "Software Engineering",
    icon: <FaProjectDiagram />,
    items: ["OOP", "SDLC", "Design Patterns", "UML Diagrams"],
  },
  {
    title: "Soft Skills",
    icon: <BsStars />,
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Fast Learning",
      "Communication",
      "Teamwork",
      "Time Management",
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EPE3LTZQU/",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/m.o.a.z.h.a.n.y?igsh=c2lseWozcGZqd3lx",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moazhany27",
    icon: <FaLinkedinIn />,
  },
  {
    label: "GitHub",
    href: "https://github.com/EngMoazHany",
    icon: <FaGithub />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201557992912",
    icon: <FaWhatsapp />,
  },
  {
    label: "Email",
    href: "mailto:moazhany27@gmail.com",
    icon: <FaEnvelope />,
  },
];

const quickQuestions = [
  "What are Moaz's strongest AI/ML skills?",
  "Tell me about the FINEXA graduation project.",
  "Which technologies does Moaz use for backend APIs?",
  "How can I contact Moaz?",
];

const API_URL =
  import.meta.env.VITE_CHAT_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "https://api-portfolio-eta.vercel.app");
const CHAT_ERROR_MESSAGE =
  "Sorry, the chat service is currently unavailable. Please try again later.";
const CHAT_ERROR_MESSAGE_AR = "حصلت مشكلة بسيطة في الشات. جرّب تاني بعد لحظات.";

function isArabicText(text) {
  return /[\u0600-\u06FF]/.test(text);
}

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [modalImg, setModalImg] = useState(null);
  const [botInput, setBotInput] = useState("");
  const [isBotLoading, setIsBotLoading] = useState(false);
  const messagesContainerRef = useRef(null);
  const isBotLoadingRef = useRef(false);
  const [botMessages, setBotMessages] = useState([
    {
      from: "bot",
      text: "Portfolio assistant ready. Ask about FINEXA, skills, training, certificates, or contact details.",
    },
  ]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [botMessages, isBotLoading]);

  const toApiMessages = (messages) =>
    messages.map((message) => ({
      role: message.from === "user" ? "user" : "assistant",
      content: message.text,
    }));

  const sendMessage = async (messageText = botInput) => {
    const value = messageText.trim();
    if (!value || isBotLoadingRef.current) return;

    setBotInput("");
    isBotLoadingRef.current = true;
    setIsBotLoading(true);

    const isArabic = isArabicText(value);
    const userMessage = { from: "user", text: value };
    const typingMessage = { from: "bot", text: isArabic ? "بيكتب..." : "Typing..." };
    const uiConversationHistory = [...botMessages, userMessage];
    const conversationHistory = toApiMessages(uiConversationHistory);
    const chatApiUrl = `${API_URL}/api/chat`;

    setBotMessages([...uiConversationHistory, typingMessage]);

    try {
      console.log("Chat API URL:", chatApiUrl);

      const response = await fetch(chatApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
          messages: conversationHistory,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Chat API error:", response.status, errorText);
        throw new Error(errorText || "Chat API request failed");
      }

      const data = await response.json();
      const reply = data?.reply?.trim() || (isArabic ? CHAT_ERROR_MESSAGE_AR : CHAT_ERROR_MESSAGE);

      setBotMessages([...uiConversationHistory, { from: "bot", text: reply }]);
    } catch {
      setBotMessages([
        ...uiConversationHistory,
        { from: "bot", text: isArabic ? CHAT_ERROR_MESSAGE_AR : CHAT_ERROR_MESSAGE },
      ]);
    } finally {
      isBotLoadingRef.current = false;
      setIsBotLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="portfolio">
      <SplashScreen />

      <AnimatedBackground />

      <nav className="navbar">
        <a className="logo" href="#home">
          <img src={logo} alt="Moaz Hany Logo" />
        </a>

        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact me</a>
        </div>
      </nav>

      <section className="hero-section section" id="home">
        <motion.div
          className="hero-text"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-pill" variants={fadeUp}>
            <BsStars />
            AI / ML Engineer Portfolio
          </motion.div>

          <motion.h2 variants={fadeUp}>Hi, I am</motion.h2>

          <motion.h1 variants={fadeUp}>{"{Moaz Hany} "}</motion.h1>

          <motion.p variants={fadeUp}>
            I&apos;m an AI/ML Engineer specializing in intelligent web applications,
            machine learning solutions, FastAPI microservices, and
            production-ready AI systems.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <a className="btn primary" href={resume} download>
              Download CV
            </a>

            <a
              className="btn outline"
              href="https://wa.me/201557992912"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-glow"></div>

          <FloatingIcons />

          <img src={hero} alt="Moaz Hany" className="hero-image" />
        </motion.div>
      </section>

      <section className="about-section section" id="about">
        <motion.div
          className="about-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2>About me</h2>
          <p className="section-mini-text">
            Building intelligence through code, data, and clean systems.
          </p>
          <div className="brain-shape"></div>
        </motion.div>

        <motion.div
          className="terminal-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="browser-top">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="url">moaz.dev / intelligence</div>
          </div>

          <div className="terminal-input">
            <span>
              <BsStars />
            </span>
            <input value="AI profile initialized..." readOnly />
            <i></i>
          </div>

          <div className="terminal-content">
            <p>
              AI/ML Engineer with hands-on experience building machine learning
              solutions, FastAPI microservices, and production-ready web
              applications. Experienced in forecasting models, REST APIs, AI
              integration, and data-driven applications. Professional experience
              at Norm Production and graduate of Capital University 2026.
            </p>

            <div className="profile-facts">
              <span>
                <FaUniversity /> Capital University 2026
              </span>
              <span>
                <FaDatabase /> Information Systems
              </span>
              <span>
                <FaBrain /> ML, Data Mining, Algorithms
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="experience-section section" id="experience">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Experience / Training</h2>

          <p className="section-subtitle">
            Professional work, AI training, and focused sessions supporting
            practical engineering growth.
          </p>
        </motion.div>

        <motion.div
          className="experience-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item) => (
            <motion.article
              className="experience-card glass-card"
              key={item.title}
              variants={fadeUp}
            >
              <div className="experience-icon">{item.icon}</div>
              <span className="experience-type">{item.type}</span>
              <h3>{item.title}</h3>
              {item.role && <p className="experience-role">{item.role}</p>}
              {item.date && <p className="experience-date">{item.date}</p>}
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="projects-bg-glow glow-left"></div>
        <div className="projects-bg-glow glow-right"></div>

        <div className="projects-grid-bg"></div>

        <div className="projects-floating-badges">
          {["AI", "ML", "DL", "NLP", "DATA", "API", "MODEL", "SYSTEM"].map(
            (badge, index) => (
              <span key={badge} className={`floating-badge badge-${index + 1}`}>
                {badge}
              </span>
            )
          )}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Projects</h2>

          <p className="section-subtitle">
            Intelligent systems, machine learning workflows, backend AI
            services, and interactive web experiences.
          </p>
        </motion.div>

        <div className="projects-layout">
          <motion.div
            className="project-left"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="project-tabs" variants={fadeUp}>
              {projects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className={
                    activeProject.title === project.title ? "active" : ""
                  }
                >
                  {project.gallery ? (
                    <img src={project.gallery[0]} alt={project.title} />
                  ) : (
                    <span className="tab-icon">{project.icon}</span>
                  )}
                  <span>{project.title}</span>
                </button>
              ))}
            </motion.div>

            <motion.div className="project-line" variants={fadeUp}></motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                className="project-info glass-card"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="project-icon">{activeProject.icon}</div>
                <h3>{activeProject.title}</h3>
                {activeProject.role && (
                  <p className="project-role">{activeProject.role}</p>
                )}
                <p>{activeProject.desc}</p>

                {activeProject.details && (
                  <ul className="project-details">
                    {activeProject.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}

                <div className="tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="project-preview glass-card"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <AnimatePresence mode="wait">
              {activeProject.gallery ? (
                <motion.div
                  key={activeProject.title}
                  className="project-gallery"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                >
                  {activeProject.gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={index === 0 ? "main-shot" : ""}
                      onClick={() => setModalImg(image)}
                    >
                      <img src={image} alt={`${activeProject.title} preview ${index + 1}`} />
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={activeProject.title}
                  className="project-icon-preview"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                >
                  <div>{activeProject.icon}</div>
                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="cert-section section" id="certificates">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Certificates</h2>

          <p className="section-subtitle">
            Learning path across Machine Learning, Deep Learning, Keras, and AI
            engineering.
          </p>
        </motion.div>

        <motion.div
          className="certificates-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {certificates.map((certificate) => (
            <motion.article
              className={`cert-card glass-card ${certificate.image ? "has-image" : "no-image"}`}
              key={certificate.title}
              variants={fadeUp}
            >
              <div className="cert-title">
                <FaCertificate />
                <h3>{certificate.title}</h3>
                {certificate.subtitle && <p>{certificate.subtitle}</p>}
                {certificate.date && <span>{certificate.date}</span>}
              </div>

              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  onClick={() => setModalImg(certificate.image)}
                />
              ) : (
                <div className="cert-placeholder">
                  <FaCertificate />
                  <span>{certificate.type}</span>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="skills-section section" id="skills">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Skills</h2>

          <p className="section-subtitle">
            Technical stack focused on AI systems, data pipelines, APIs, and
            frontend integration.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div className="skill-card" key={skill.title} variants={fadeUp}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.title}</span>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bot-section section" id="contact">
        <motion.div
          className="bot-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Ask my bot</h2>
          <p className="bot-intro">
            Hi Moaz 👋 Ask me anything about projects, skills, AI, ML, or the portfolio.
          </p>

          <div className="mini-chat" ref={messagesContainerRef}>
            {botMessages.map((msg, index) => (
              <div
                key={`${msg.from}-${index}`}
                className={`mini-message ${msg.from} ${
                  isArabicText(msg.text) ? "arabic-message" : "english-message"
                }`}
                dir={isArabicText(msg.text) ? "rtl" : "ltr"}
                lang={isArabicText(msg.text) ? "ar" : "en"}
              >
                <div className="message-content">
                  {msg.from === "bot" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer" />
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="simple-bot-input" onSubmit={handleSubmit}>
            <span>
              <BsStars />
            </span>

            <input
              value={botInput}
              onChange={(e) => setBotInput(e.target.value)}
              placeholder="Ask anything about Moaz..."
            />

            <button type="submit" aria-label="Send message">
              <BsSendFill />
            </button>
          </form>

          <div className="quick-questions">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => sendMessage(question)}>
                {question}
                <small>Suggested question</small>
              </button>
            ))}
          </div>

          <div className="bot-cta">
            <h3>Let&apos;s start something great together</h3>

            <a
              className="btn primary small-btn"
              href="https://wa.me/201557992912"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bot-right"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div className="hello">Hello!</div>
          <img src={robot} alt="AI Bot" />
        </motion.div>

        <BinaryWaves />
      </section>

      <footer className="footer">
        <div>
          <h3>Follow me at :</h3>

          <div className="socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-info">
          <p>Phone: +20 1557992912</p>
          <p>Email: moazhany27@gmail.com</p>
          <p>Location: Cairo, Egypt</p>
        </div>

        <div className="footer-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
        </div>

        <p className="copyright">© Copyright 2026 Made by Moaz</p>
      </footer>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <button className="close-modal">×</button>

          <img
            src={modalImg}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
