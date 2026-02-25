import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// CONFIGURATION — Personnalisez ici facilement !
// ============================================================
const CONFIG = {
  name: "Robert Emmanuel Mamadou Sagne",
  shortName: "R.E.M. Sagne",
  title: ["Fullstack Developer", "UI/UX Architect", "Cybersecurity Enthusiast", "Problem Solver"],
  bio: "Ingénieur en informatique passionné par l'innovation, je conçois des applications robustes et scalables. Expert Angular/React en frontend, Spring Boot & PHP en backend — je transforme des idées ambitieuses en solutions digitales d'élite.",
  location: "Rufisque Ouest, Dakar, Sénégal",
  email: "sagneemma25@gmail.com",
  phone: "+221 77 866 20 79",
  linkedin: "https://linkedin.com/in/robert-sagne",
  github: "https://github.com/robertsagne",

  skills: {
    frontend: ["Angular", "React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma"],
    backend: ["Java", "Spring Boot", "PHP", "Laravel", "Node.js"],
    database: ["MySQL", "PostgreSQL", "DB2"],
    devops: ["Linux", "Windows", "MacOS", "Git", "Jira"],
    security: ["CompTIA Security+", "Cybersécurité"],
  },

  projects: [
    {
      title: "Projet Mercurio — Groupe KIRENE",
      desc: "Plateforme B2B full-stack connectée à l'ERP Business Central pour unifier la distribution du Groupe KIRENE. Gestion des commandes, factures, CRM, tableaux de bord KPI et authentification JWT multi-rôles (Admin, Commercial, Distributeur).",
      tech: ["Angular", "Node.js", "PostgreSQL", "Sequelize", "JWT", "ERP Business Central"],
      color: "#e11d48",
      size: "large",
      emoji: "⚡",
    },
    {
      title: "Globo Check — Suivi Installations",
      desc: "Application web de suivi des dispositifs installés par Globo Afrique : gestion des signalements, tableau de bord multi-profils (Chargé carburant, Directeur ops), historique des interventions et alertes automatiques sur les dispositifs non vérifiés.",
      tech: ["Angular", "Spring Boot", "MySQL", "REST API"],
      color: "#0ea5e9",
      size: "large",
      emoji: "🔧",
    },
    {
      title: "Suivi Livraisons Petrosen",
      desc: "Application web de tracking en temps réel pour les livraisons de Petrosen, développée avec Angular.",
      tech: ["Angular", "TypeScript", "REST API"],
      color: "#00d4ff",
      size: "medium",
      emoji: "🚀",
    },
    {
      title: "Gestion Interventions Pompiers",
      desc: "Système d'affectation et de gestion des interventions pour les pompiers, avec tableau de bord temps réel.",
      tech: ["ReactJS", "Angular", "Spring Boot"],
      color: "#ff6b35",
      size: "medium",
      emoji: "🔥",
    },
    {
      title: "Plateforme DPI Douanes",
      desc: "Fonctionnalité de traitement des Déclarations Préalables d'Importation pour la DSID.",
      tech: ["Angular", "Spring Boot", "DB2"],
      color: "#7c3aed",
      size: "small",
      emoji: "🏛️",
    },
    {
      title: "Suivi Matériel DSID",
      desc: "Plateforme web complète pour le suivi et la gestion du parc matériel de la Direction des Systèmes d'Information.",
      tech: ["Angular 14", "Spring Boot", "UML"],
      color: "#10b981",
      size: "small",
      emoji: "🛡️",
    },
    {
      title: "Location de Voitures ESP",
      desc: "Application web de gestion de location de voitures pour l'École Supérieure Polytechnique.",
      tech: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
      color: "#f59e0b",
      size: "small",
      emoji: "🚗",
    },
  ],

  experience: [
    {
      period: "Oct 2024 — Présent",
      role: "Développeur Fullstack",
      company: "Globo Afrique Dakar",
      desc: "Développement de plateformes web pour Petrosen (suivi livraisons), Globo Check (suivi installations) et gestion d'interventions pompiers.",
      tech: ["Angular", "ReactJS", "Spring Boot", "MySQL"],
    },
    {
      period: "Août 2023",
      role: "Stagiaire Développeur Fullstack",
      company: "DSID — Douanes Sénégalaises",
      desc: "Implémentation d'une fonctionnalité pour le traitement de la DPI.",
      tech: ["Angular", "Spring Boot", "DB2"],
    },
    {
      period: "Août — Nov 2022",
      role: "Stagiaire Développeur Fullstack",
      company: "DSID — Douanes Sénégalaises",
      desc: "Conception et mise en place d'une plateforme Web pour le suivi du matériel.",
      tech: ["Angular 14", "Spring Boot", "UML"],
    },
    {
      period: "Juil — Nov 2020",
      role: "Stagiaire Développeur Web",
      company: "ESP Dakar",
      desc: "Conception et réalisation d'une application web pour la location de voiture.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
    },
  ],

  terminalCommands: {
    help: () =>
      `Commandes disponibles:\n  about     — Qui suis-je ?\n  skills    — Mon stack technique\n  contact   — Me contacter\n  projects  — Mes projets\n  cv        — Télécharger mon CV\n  clear     — Effacer le terminal`,
    about: () =>
      `Robert Emmanuel Mamadou Sagne\nDéveloppeur Fullstack | Dakar, Sénégal\n\nIngénieur en informatique diplômé de l'ESP Dakar.\nPassionné par l'innovation digitale et la cybersécurité.\nCertifié CompTIA Security+ (2024).`,
    skills: () =>
      `Frontend : Angular, React, HTML/CSS, JavaScript\nBackend  : Java, Spring Boot, PHP, Laravel, Node.js\nBase de données : MySQL, PostgreSQL, DB2\nSécurité : CompTIA Security+`,
    contact: () =>
      `Email    : sagneemma25@gmail.com\nTéléphone: +221 77 866 20 79\nAdresse  : Rufisque, Dakar, Sénégal`,
    projects: () =>
      `1. Projet Mercurio — ERP B2B Groupe KIRENE\n2. Globo Check — Suivi installations\n3. Suivi Livraisons Petrosen (Angular)\n4. Gestion Interventions Pompiers (React+Angular)\n5. Plateforme DPI Douanes (Angular+Spring)\n6. Suivi Matériel DSID (Angular 14)\n7. Location Voitures ESP (PHP+MySQL)`,
    cv: () => `Téléchargement du CV en cours...\n[Ajoutez votre CV en PDF dans /public/cv-robert-sagne.pdf\npuis mettez à jour le lien dans CONFIG]`,
    clear: () => "__CLEAR__",
  },
};

// ============================================================
// UTILITIES
// ============================================================
function useTypewriter(words, speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// ============================================================
// GLOBAL STYLES injected once
// ============================================================
const GLOBAL_CSS = `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { background: #050814; color: #fff; overflow-x: hidden; font-family: sans-serif; }
  @keyframes blink { 50% { opacity: 0; } }
  @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(12px); } }
  @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
  ::selection { background: rgba(0,212,255,0.25); color: #fff; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #050814; }
  ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); border-radius: 4px; }
  a { transition: color 0.2s, opacity 0.2s; }
  a:hover { opacity: 0.85; }

  /* Nav desktop / mobile */
  .nav-links { display: flex; gap: 2rem; }
  .nav-burger { display: none !important; }
  .nav-mobile-menu { display: none; }

  @media (max-width: 768px) {
    .nav-links { display: none !important; }
    .nav-burger { display: block !important; }
    .nav-mobile-menu { display: block; }
    .about-grid { grid-template-columns: 1fr !important; }
    .bento-grid { grid-template-columns: 1fr !important; }
    .bento-grid > div { grid-column: span 1 !important; }
    .timeline-item { grid-template-columns: 1fr !important; }
    .timeline-item > div:last-child { display: none; }
    .timeline-line { display: none; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: 1fr 1fr !important; }
    .hero-btns { flex-direction: column; align-items: center; }
  }
`;

// ============================================================
// PARTICLE CANVAS
// ============================================================
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      color: Math.random() > 0.5 ? "#00d4ff" : "#7c3aed",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "bb";
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.1 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

// ============================================================
// NAV
// ============================================================
function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À Propos" },
    { id: "projets", label: "Projets" },
    { id: "competences", label: "Compétences" },
    { id: "experience", label: "Expérience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,8,20,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="#accueil"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.1rem",
            color: "#00d4ff",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          &lt;REMS /&gt;
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              style={{
                color: active === l.id ? "#00d4ff" : "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "'Space Mono', monospace",
                transition: "color 0.2s",
                borderBottom: active === l.id ? "1px solid #00d4ff" : "1px solid transparent",
                paddingBottom: 2,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Burger */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: 6,
            cursor: "pointer",
            color: "#00d4ff",
            fontSize: "1.1rem",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: "rgba(5,8,20,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.1)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: active === l.id ? "#00d4ff" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                padding: "0.85rem 0",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {active === l.id ? "› " : "  "}
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ============================================================
// SHARED BUTTON STYLES
// ============================================================
const btnPrimary = {
  display: "inline-block",
  padding: "0.85rem 2.2rem",
  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
  color: "#fff",
  textDecoration: "none",
  fontFamily: "'Space Mono', monospace",
  fontSize: "0.82rem",
  letterSpacing: "0.1em",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.2s, transform 0.2s",
};

const btnSecondary = {
  display: "inline-block",
  padding: "0.85rem 2.2rem",
  background: "transparent",
  border: "1px solid rgba(0,212,255,0.4)",
  color: "#00d4ff",
  textDecoration: "none",
  fontFamily: "'Space Mono', monospace",
  fontSize: "0.82rem",
  letterSpacing: "0.1em",
  borderRadius: 6,
  cursor: "pointer",
  transition: "border-color 0.2s, background 0.2s",
};

// ============================================================
// SECTION LABEL
// ============================================================
function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      <div style={{ width: 24, height: 1, background: "#00d4ff" }} />
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "#00d4ff",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <div style={{ width: 24, height: 1, background: "#00d4ff" }} />
    </div>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  const typed = useTypewriter(CONFIG.title);
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="accueil"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "8rem 2rem 4rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 820 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,212,255,0.07)",
            border: "1px solid rgba(0,212,255,0.25)",
            borderRadius: 4,
            padding: "0.4rem 1.1rem",
            marginBottom: "2rem",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            color: "#00d4ff",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          &gt; Fullstack Engineer — Dakar, Sénégal
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            fontFamily: "'Syne', sans-serif",
            margin: "0 0 1rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Robert Emmanuel
            <br />
          </span>
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mamadou Sagne
          </span>
        </h1>

        {/* Typewriter */}
        <div
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontFamily: "'Space Mono', monospace",
            color: "#00d4ff",
            minHeight: "2.2rem",
            marginBottom: "2rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.35s",
          }}
        >
          {typed}
          <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: "0.97rem",
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.85,
            maxWidth: 580,
            margin: "0 auto 3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          {CONFIG.bio}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-btns"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.65s",
          }}
        >
          <a href="#projets" style={btnPrimary}>
            Voir mes projets →
          </a>
          <a href="#contact" style={btnSecondary}>
            Me contacter
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            animation: "bounce 2s infinite",
          }}
        >
          <div
            style={{
              width: 1,
              height: 56,
              background: "linear-gradient(to bottom, rgba(0,212,255,0.7), transparent)",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="apropos"
      ref={ref}
      style={{ padding: "6rem 2rem", zIndex: 1, position: "relative" }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Avatar card */}
          <div
            style={{
              width: "100%",
              maxWidth: 360,
              aspectRatio: "1/1",
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.08))",
              border: "1px solid rgba(0,212,255,0.18)",
              borderRadius: 16,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <span style={{ fontSize: "7rem", opacity: 0.25, animation: "float 4s ease-in-out infinite" }}>
              👨‍💻
            </span>
            {/* Corner decorations */}
            {[
              { top: 10, left: 10, borderTop: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" },
              { top: 10, right: 10, borderTop: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" },
              { bottom: 10, left: 10, borderBottom: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" },
              { bottom: 10, right: 10, borderBottom: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" },
            ].map((s, i) => (
              <div
                key={i}
                style={{ position: "absolute", width: 20, height: 20, ...s }}
              />
            ))}
          </div>

          {/* Stats */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              ["4+", "Années d'XP"],
              ["7+", "Projets livrés"],
              ["10+", "Technologies"],
              ["1", "Certification"],
            ].map(([n, l]) => (
              <div
                key={l}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    fontFamily: "'Syne', sans-serif",
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.38)",
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <SectionLabel>À Propos</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              margin: "1rem 0 1.5rem",
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            Construire le futur,
            <br />
            <span style={{ color: "#00d4ff" }}>une ligne à la fois.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.57)",
              lineHeight: 1.9,
              marginBottom: "1.4rem",
              fontSize: "0.94rem",
            }}
          >
            Diplômé Ingénieur Technologue en Informatique de l'ESP Dakar, je me spécialise dans le
            développement d'applications web modernes et performantes. Mon parcours couvre le
            frontend (Angular, React), le backend (Spring Boot, PHP/Laravel) et la sécurité des
            systèmes.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.57)",
              lineHeight: 1.9,
              marginBottom: "2rem",
              fontSize: "0.94rem",
            }}
          >
            Certifié{" "}
            <span style={{ color: "#00d4ff", fontFamily: "'Space Mono', monospace" }}>
              CompTIA Security+
            </span>{" "}
            (2024), j'apporte une vision holistique alliant développement et sécurité pour créer
            des applications robustes et fiables.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {["Angular Expert", "Spring Boot Expert", "CompTIA Sec+", "UML & Architecture"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.4rem 0.9rem",
                    border: "1px solid rgba(0,212,255,0.22)",
                    borderRadius: 4,
                    fontSize: "0.7rem",
                    fontFamily: "'Space Mono', monospace",
                    color: "#00d4ff",
                    background: "rgba(0,212,255,0.05)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROJECTS — Bento Grid
// ============================================================
function Projects() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projets"
      ref={ref}
      style={{ padding: "6rem 2rem", zIndex: 1, position: "relative" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionLabel>Projets</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#fff",
              marginTop: "0.6rem",
            }}
          >
            Ce que j'ai <span style={{ color: "#00d4ff" }}>construit</span>
          </h2>
        </div>

        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          {CONFIG.projects.map((p, i) => {
            const isLarge = p.size === "large";
            const isMedium = p.size === "medium";
            const rgb = hexToRgb(p.color);

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  gridColumn: isLarge ? "span 3" : isMedium ? "span 2" : "span 1",
                  background:
                    hovered === i
                      ? `linear-gradient(135deg, rgba(${rgb},0.1), rgba(5,8,20,0.95))`
                      : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hovered === i ? p.color + "55" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 14,
                  padding: "1.8rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: isLarge ? 200 : isMedium ? 180 : 160,
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: p.color,
                    opacity: hovered === i ? 0.1 : 0,
                    filter: "blur(35px)",
                    transition: "opacity 0.3s",
                    pointerEvents: "none",
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{p.emoji}</span>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontFamily: "'Space Mono', monospace",
                      color: p.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      border: `1px solid ${p.color}44`,
                      borderRadius: 3,
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {isLarge ? "Featured" : isMedium ? "Project" : "Project"}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: isLarge ? "1.25rem" : "0.97rem",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.7rem",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "0.81rem",
                    color: "rgba(255,255,255,0.48)",
                    lineHeight: 1.75,
                    marginBottom: "1.2rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.45rem",
                    flexWrap: "wrap",
                    opacity: hovered === i ? 1 : 0.45,
                    transform: hovered === i ? "translateY(0)" : "translateY(5px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: 3,
                        background: `rgba(${rgb},0.13)`,
                        color: p.color,
                        fontSize: "0.67rem",
                        fontFamily: "'Space Mono', monospace",
                        border: `1px solid ${p.color}33`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SKILLS
// ============================================================
function Skills() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState("frontend");

  const categories = [
    { key: "frontend", label: "Frontend", color: "#00d4ff", icon: "🖥️" },
    { key: "backend", label: "Backend", color: "#7c3aed", icon: "⚙️" },
    { key: "database", label: "Base de données", color: "#10b981", icon: "🗄️" },
    { key: "devops", label: "DevOps & OS", color: "#f59e0b", icon: "🔧" },
    { key: "security", label: "Sécurité", color: "#e11d48", icon: "🛡️" },
  ];

  const activeData = categories.find((c) => c.key === active);

  return (
    <section
      id="competences"
      ref={ref}
      style={{ padding: "6rem 2rem", zIndex: 1, position: "relative" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionLabel>Compétences</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#fff",
              marginTop: "0.6rem",
            }}
          >
            Mon <span style={{ color: "#00d4ff" }}>Stack Technologique</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.7rem",
            justifyContent: "center",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: 6,
                cursor: "pointer",
                background:
                  active === c.key
                    ? `linear-gradient(135deg, ${c.color}20, ${c.color}0d)`
                    : "transparent",
                border: `1px solid ${active === c.key ? c.color : "rgba(255,255,255,0.1)"}`,
                color: active === c.key ? c.color : "rgba(255,255,255,0.48)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.76rem",
                letterSpacing: "0.06em",
                transition: "all 0.22s",
              }}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Skill pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.9rem",
            justifyContent: "center",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          {CONFIG.skills[active].map((skill, i) => (
            <div
              key={skill}
              style={{
                padding: "0.9rem 1.6rem",
                background: `rgba(${hexToRgb(activeData.color)}, 0.06)`,
                border: `1px solid ${activeData.color}33`,
                borderRadius: 10,
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                transform: inView ? "translateY(0)" : "translateY(20px)",
                opacity: inView ? 1 : 0,
                transition: `all 0.5s ease ${i * 0.07}s`,
                cursor: "default",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: activeData.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE TIMELINE
// ============================================================
function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "6rem 2rem", zIndex: 1, position: "relative" }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionLabel>Expérience</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#fff",
              marginTop: "0.6rem",
            }}
          >
            Mon <span style={{ color: "#00d4ff" }}>Parcours</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0.05))",
              transform: "translateX(-50%)",
            }}
          />

          {CONFIG.experience.map((exp, i) => (
            <div
              key={i}
              className="timeline-item"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "2.5rem",
                position: "relative",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              {i % 2 === 0 ? (
                <>
                  <div style={{ textAlign: "right", paddingRight: "2.5rem" }}>
                    <ExperienceCard exp={exp} />
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div style={{ paddingLeft: "2.5rem" }}>
                    <ExperienceCard exp={exp} />
                  </div>
                </>
              )}

              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "1.4rem",
                  transform: "translate(-50%, -50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#00d4ff",
                  boxShadow: "0 0 14px rgba(0,212,255,0.65)",
                  border: "2px solid #050814",
                  zIndex: 2,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "1.4rem",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.67rem",
          color: "#00d4ff",
          letterSpacing: "0.1em",
          marginBottom: "0.5rem",
          textTransform: "uppercase",
        }}
      >
        {exp.period}
      </div>
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#fff",
          marginBottom: "0.2rem",
        }}
      >
        {exp.role}
      </h3>
      <div
        style={{
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.38)",
          marginBottom: "0.75rem",
        }}
      >
        {exp.company}
      </div>
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.52)",
          lineHeight: 1.75,
          marginBottom: "1rem",
        }}
      >
        {exp.desc}
      </p>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {exp.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "0.22rem 0.55rem",
              borderRadius: 3,
              background: "rgba(0,212,255,0.07)",
              color: "#00d4ff",
              fontSize: "0.63rem",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// TERMINAL
// ============================================================
function Terminal() {
  const [history, setHistory] = useState([
    {
      type: "output",
      text: "╔══════════════════════════════════════╗\n║   REMS Terminal v1.0.0               ║\n║   Tapez 'help' pour commencer        ║\n╚══════════════════════════════════════╝\n",
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [ref, inView] = useInView();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      const handler = CONFIG.terminalCommands[trimmed];
      const output = handler ? handler() : `Commande introuvable: '${trimmed}'\nTapez 'help' pour voir les commandes disponibles.`;

      setCmdHistory((h) => [trimmed, ...h]);
      setHistIdx(-1);

      if (output === "__CLEAR__") {
        setHistory([]);
      } else {
        setHistory((h) => [
          ...h,
          { type: "input", text: `➜ ${cmd}` },
          { type: "output", text: output },
        ]);
      }
      setInput("");
    },
    []
  );

  const onKey = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] || "");
    }
  };

  return (
    <section style={{ padding: "0 2rem 6rem", zIndex: 1, position: "relative" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }} ref={ref}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <SectionLabel>Terminal</SectionLabel>
          <h2
            style={{
              fontSize: "1.8rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#fff",
              marginTop: "0.5rem",
            }}
          >
            Explorer mon <span style={{ color: "#00d4ff" }}>profil</span>
          </h2>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Space Mono', monospace",
              marginTop: "0.5rem",
            }}
          >
            ↑ ↓ pour naviguer dans l'historique
          </p>
        </div>

        <div
          onClick={() => inputRef.current?.focus()}
          style={{
            background: "rgba(5,8,20,0.92)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: 12,
            overflow: "hidden",
            cursor: "text",
            boxShadow: "0 0 50px rgba(0,212,255,0.06)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "0.7rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{ width: 12, height: 12, borderRadius: "50%", background: c }}
              />
            ))}
            <span
              style={{
                marginLeft: "0.5rem",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.28)",
              }}
            >
              rems@portfolio ~ zsh
            </span>
          </div>

          {/* Output */}
          <div
            style={{
              padding: "1.2rem",
              minHeight: 200,
              maxHeight: 320,
              overflowY: "auto",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.79rem",
              lineHeight: 1.85,
            }}
          >
            {history.map((h, i) => (
              <div
                key={i}
                style={{
                  color:
                    h.type === "input"
                      ? "#00d4ff"
                      : "rgba(255,255,255,0.68)",
                  whiteSpace: "pre-wrap",
                  marginBottom: "0.2rem",
                }}
              >
                {h.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1.2rem",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                color: "#00d4ff",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
              }}
            >
              ➜
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="tapez une commande..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.79rem",
                caretColor: "#00d4ff",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================
function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "6rem 2rem", zIndex: 1, position: "relative" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel>Contact</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            color: "#fff",
            margin: "1rem 0 1.5rem",
            lineHeight: 1.1,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          Travaillons{" "}
          <span style={{ color: "#00d4ff" }}>ensemble</span> 🚀
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.85,
            marginBottom: "3rem",
            fontSize: "0.95rem",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease 0.2s",
          }}
        >
          Disponible pour des missions freelance, des projets innovants ou des opportunités en CDI.
          N'hésitez pas à me contacter !
        </p>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.85rem",
            marginBottom: "2.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.3s",
          }}
        >
          {[
            { icon: "✉️", label: "Email", value: CONFIG.email, href: `mailto:${CONFIG.email}` },
            { icon: "📱", label: "Téléphone", value: CONFIG.phone, href: `tel:${CONFIG.phone}` },
            { icon: "📍", label: "Localisation", value: CONFIG.location, href: "#" },
            { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/robert-sagne", href: CONFIG.linkedin },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                padding: "1.2rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                textDecoration: "none",
                transition: "all 0.25s",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.28)";
                e.currentTarget.style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>{item.icon}</div>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontFamily: "'Space Mono', monospace",
                  color: "rgba(255,255,255,0.28)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#00d4ff", marginTop: "0.2rem" }}>
                {item.value}
              </div>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${CONFIG.email}`}
          style={{ ...btnPrimary, fontSize: "1rem", padding: "1rem 3rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Envoyer un message →
        </a>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.08em",
        }}
      >
        © {new Date().getFullYear()} Robert Emmanuel Mamadou Sagne — Crafted with ❤️ & ☕ in Dakar,
        Sénégal
      </p>
    </footer>
  );
}

// ============================================================
// APP ROOT
// ============================================================
export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Inject global CSS once
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = ["accueil", "apropos", "projets", "competences", "experience", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, rgba(0,212,255,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(124,58,237,0.04) 0%, transparent 60%)",
        minHeight: "100vh",
      }}
    >
      <ParticleCanvas />
      <Nav active={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
