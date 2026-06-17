import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { BsCpuFill, BsStars } from "react-icons/bs";
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

const projects = [
  {
    title: "FINEXA",
    desc: "AI-powered personal finance management platform using FastAPI, forecasting models, smart saving recommendations, and backend AI integration.",
    img: project1,
    tags: ["AI", "FastAPI", "Forecasting", "ML"],
    icon: <FaBrain />,
  },
  {
    title: "Student Performance",
    desc: "Machine Learning app using regression and neural networks with preprocessing, model evaluation, callbacks, and Streamlit deployment.",
    img: project2,
    tags: ["Python", "Keras", "Streamlit", "Regression"],
    icon: <FaChartLine />,
  },
  {
    title: "Sudoku Solver",
    desc: "Hybrid AI solver using Genetic Algorithm and Backtracking to optimize solving time and improve solution quality.",
    img: project3,
    tags: ["AI", "GA", "Backtracking", "Optimization"],
    icon: <BsCpuFill />,
  },
];

const certificates = [
  { img: cert1, title: "IBM Machine Learning" },
  { img: cert2, title: "Deep Learning with Keras" },
  { img: cert3, title: "DEPI ML Engineer Track" },
];

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "FastAPI", icon: <BsCpuFill /> },
  { name: "React", icon: <FaReact /> },
  { name: "Scikit-learn", icon: <FaChartLine /> },
  { name: "Pandas", icon: <FaDatabase /> },
  { name: "NumPy", icon: <BsStars /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "AI Integration", icon: <FaRobot /> },
];

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
  const [botMessages, setBotMessages] = useState([
    {
      from: "bot",
      text: "Hi Moaz 👋 Ask me anything about projects, skills, AI, ML, or the portfolio.",
    },
  ]);

  const sendMessage = () => {
    const value = botInput.trim();
    if (!value) return;

    setBotMessages((prev) => [
      ...prev,
      { from: "user", text: value },
      {
        from: "bot",
        text: "API is not connected yet. Your message is saved locally until we connect the real agent.",
      },
    ]);

    setBotInput("");
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
            I’m an AI/ML Engineer specializing in intelligent web applications,
            machine learning solutions, FastAPI microservices, and
            production-ready AI systems.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <a className="btn primary" href="/resume.pdf" download>
              Download CV
            </a>

            <a className="btn outline" href="#contact">
              Start Project
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
            <span>✨</span>
            <input value="AI profile initialized..." readOnly />
            <i></i>
          </div>

          <div className="terminal-content">
            <p>
              Moaz Hany is a passionate Computer Science and Artificial
              Intelligence student focused on AI, Machine Learning, backend
              integration, and modern web development. He works with Python,
              FastAPI, Scikit-learn, React, and production-ready APIs to build
              intelligent and useful applications.
            </p>
          </div>
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
                  <img src={project.img} alt={project.title} />
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
                <p>{activeProject.desc}</p>

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
              <motion.img
                key={activeProject.img}
                src={activeProject.img}
                alt={activeProject.title}
                onClick={() => setModalImg(activeProject.img)}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
              />
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
          className="certificates-row"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="cert-card small" variants={fadeUp}>
            <img
              src={certificates[0].img}
              alt={certificates[0].title}
              onClick={() => setModalImg(certificates[0].img)}
            />
          </motion.div>

          <div className="cert-connector left"></div>

          <motion.div className="cert-card main" variants={fadeUp}>
            <img
              src={certificates[1].img}
              alt={certificates[1].title}
              onClick={() => setModalImg(certificates[1].img)}
            />
          </motion.div>

          <div className="cert-dot"></div>

          <div className="cert-connector right"></div>

          <motion.div className="cert-card small" variants={fadeUp}>
            <img
              src={certificates[2].img}
              alt={certificates[2].title}
              onClick={() => setModalImg(certificates[2].img)}
            />
          </motion.div>
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
            <motion.div className="skill-card" key={skill.name} variants={fadeUp}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
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

          <div className="simple-bot-input">
            <span>✨</span>

            <input
              value={botInput}
              onChange={(e) => setBotInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything about Moaz..."
            />

            <button type="button" onClick={sendMessage}>
              ➤
            </button>
          </div>

          <div className="mini-chat">
            {botMessages.map((msg, index) => (
              <div key={index} className={`mini-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="quick-questions">
            <button
              type="button"
              onClick={() =>
                setBotInput("What are the strongest skills of Moaz?")
              }
            >
              what are the point of strength of Moaz ?
              <small>just the technical once</small>
            </button>

            <button
              type="button"
              onClick={() =>
                setBotInput("What are the weaknesses of Moaz?")
              }
            >
              what are the point of weakness of Moaz ?
              <small>just the technical once</small>
            </button>
          </div>

          <div className="bot-cta">
            <h3>Let&apos;s start something great together</h3>

            <a
              className="btn primary small-btn"
              href="mailto:moazhany27@gmail.com"
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
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com/in/moazhany27"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a
              href="https://github.com/EngMoazHany"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-info">
          <p>+20 1557992912</p>
          <p>moazhany27@gmail.com</p>
          <p>Cairo, Egypt</p>
        </div>

        <div className="footer-links">
          <a href="#projects">Articles</a>
          <a href="#certificates">Courses</a>
          <a href="#skills">Books</a>
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