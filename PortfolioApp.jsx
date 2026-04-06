import { useState } from "react";

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"] },
  { category: "AI & ML", items: ["Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"] },
  { category: "Web", items: ["React", "Responsive Design", "Git", "GitHub", "Figma"] },
  { category: "Database & BI", items: ["MySQL", "Power BI", "Tableau", "SQLAlchemy"] },
];

const projects = [
  {
    title: "Parkinson's Disease Detection",
    description:
      "Built and compared 4 ML classification models (SVM, Naive Bayes, KNN, Logistic Regression). SVM achieved 95.67% accuracy. Deployed as a real-time Streamlit web app for live diagnosis.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/SahilPathan17",
    color: "#1F4E79",
  },
  {
    title: "E-Commerce Sales Analysis",
    description:
      "Designed an ETL pipeline to process 50,000+ retail records using Python & MySQL. SQL window functions used for revenue analysis, regional rankings, and MoM growth.",
    tech: ["Python", "MySQL", "Pandas", "SQLAlchemy"],
    github: "https://github.com/SahilPathan17",
    color: "#2E75B6",
  },
  {
    title: "College Website Replica",
    description:
      "Collaborated in a 4-member team to build a fully functional frontend replica of our institute's website with responsive layouts and navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SahilPathan17",
    color: "#1F4E79",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website built with React — showcasing projects, skills, and experience with a clean responsive design.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/SahilPathan17",
    color: "#2E75B6",
  },
];

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a", background: "#f8f9fa" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", background: "#1F4E79",
        zIndex: 1000, boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>Sahil Pathan</span>
          <div style={{ display: "flex", gap: 8 }}>
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} style={{
                background: active === link ? "rgba(255,255,255,0.2)" : "transparent",
                color: "#fff", border: "none", padding: "8px 14px", borderRadius: 6,
                cursor: "pointer", fontWeight: active === link ? 700 : 400, fontSize: 14,
                transition: "all 0.2s"
              }}>{link}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="About" style={{
        minHeight: "100vh", background: "linear-gradient(135deg, #1F4E79 0%, #2E75B6 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
        textAlign: "center", padding: "80px 24px 40px"
      }}>
        <div style={{
          width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 48, marginBottom: 24, border: "3px solid rgba(255,255,255,0.4)"
        }}>👨‍💻</div>
        <h1 style={{ color: "#fff", fontSize: 48, margin: "0 0 8px", fontWeight: 800 }}>Sahil Pathan</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, margin: "0 0 16px" }}>
          Python Developer  •  AI/ML Engineer  •  Web Developer
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, maxWidth: 600, lineHeight: 1.7, margin: "0 0 32px" }}>
          B.Tech CS Graduate (2025) passionate about building real-world AI solutions and clean web applications.
          Currently working at Northern Light Analytics, Nagpur.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://github.com/SahilPathan17" target="_blank" rel="noreferrer" style={{
            background: "#fff", color: "#1F4E79", padding: "12px 28px", borderRadius: 8,
            textDecoration: "none", fontWeight: 700, fontSize: 15
          }}>GitHub</a>
          <a href="mailto:sahilspathan0@gmail.com" style={{
            background: "transparent", color: "#fff", padding: "12px 28px", borderRadius: 8,
            textDecoration: "none", fontWeight: 700, fontSize: 15, border: "2px solid #fff"
          }}>Hire Me</a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, color: "#1F4E79", marginBottom: 8 }}>Technical Skills</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 48 }}>Technologies I work with</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {skills.map((group) => (
              <div key={group.category} style={{
                background: "#f8f9fa", borderRadius: 12, padding: 24,
                borderTop: "4px solid #1F4E79", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
              }}>
                <h3 style={{ color: "#1F4E79", margin: "0 0 16px", fontSize: 16, fontWeight: 700 }}>{group.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{
                      background: "#1F4E79", color: "#fff", padding: "4px 12px",
                      borderRadius: 20, fontSize: 13, fontWeight: 500
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding: "80px 24px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, color: "#1F4E79", marginBottom: 8 }}>Projects</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 48 }}>Things I've built</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {projects.map((p) => (
              <div key={p.title} style={{
                background: "#fff", borderRadius: 12, padding: 28, display: "flex",
                flexDirection: "column", boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                borderTop: `4px solid ${p.color}`, transition: "transform 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <h3 style={{ color: "#1F4E79", margin: "0 0 12px", fontSize: 17 }}>{p.title}</h3>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, flex: 1, margin: "0 0 16px" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      background: "#e8f0fe", color: "#1F4E79", padding: "3px 10px",
                      borderRadius: 20, fontSize: 12, fontWeight: 600
                    }}>{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  color: "#1F4E79", fontWeight: 700, fontSize: 14, textDecoration: "none"
                }}>View on GitHub →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, color: "#1F4E79", marginBottom: 8 }}>Experience</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 48 }}>Where I've worked</p>
          {[
            {
              role: "AI/ML Developer & Web Developer",
              company: "Northern Light Analytics, Nagpur",
              dates: "Jan 2025 – Present",
              points: [
                "Built company website, college website, and crop insurance platform (HTML, CSS, JS)",
                "Developed Python & ML data analysis pipelines for internal business insights",
                "Collaborated with team using Git for version control",
              ]
            },
            {
              role: "Frontend Developer (Volunteer)",
              company: "Yuvak Samajik Jankalyan Sanstha, Nagpur",
              dates: "Aug 2023 – Nov 2023",
              points: [
                "Developed responsive NGO website using HTML, CSS, and JavaScript",
                "Ensured cross-device compatibility and clean public-facing UI",
              ]
            },
            {
              role: "Salesforce Developer (Virtual Internship)",
              company: "Smartbridge, Remote",
              dates: "Oct 2023 – Nov 2023",
              points: [
                "Completed 8-week Salesforce Developer internship",
                "Worked on flows, security, testing, and debugging",
              ]
            }
          ].map((exp) => (
            <div key={exp.role} style={{
              borderLeft: "4px solid #1F4E79", paddingLeft: 24, marginBottom: 36, position: "relative"
            }}>
              <div style={{
                width: 14, height: 14, background: "#1F4E79", borderRadius: "50%",
                position: "absolute", left: -9, top: 4
              }} />
              <h3 style={{ margin: "0 0 4px", color: "#1F4E79", fontSize: 18 }}>{exp.role}</h3>
              <p style={{ margin: "0 0 4px", color: "#555", fontWeight: 600 }}>{exp.company}</p>
              <p style={{ margin: "0 0 12px", color: "#888", fontSize: 14 }}>{exp.dates}</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {exp.points.map((pt) => (
                  <li key={pt} style={{ color: "#444", fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "80px 24px", background: "linear-gradient(135deg, #1F4E79 0%, #2E75B6 100%)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: 36, marginBottom: 8 }}>Get In Touch</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>Open to opportunities — let's talk!</p>
          {submitted ? (
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: 40, color: "#fff" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ margin: 0 }}>Message sent! I'll get back to you soon.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["name", "email"].map((field) => (
                <input key={field} type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  value={formData[field]}
                  onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                  required
                  style={{
                    padding: "14px 16px", borderRadius: 8, border: "none",
                    fontSize: 15, outline: "none"
                  }}
                />
              ))}
              <textarea placeholder="Your Message" value={formData.message} rows={5}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ padding: "14px 16px", borderRadius: 8, border: "none", fontSize: 15, resize: "vertical", outline: "none" }}
              />
              <button type="submit" style={{
                background: "#fff", color: "#1F4E79", border: "none", padding: "14px 32px",
                borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer"
              }}>Send Message</button>
            </form>
          )}
          <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Email", value: "sahilspathan0@gmail.com" },
              { label: "Phone", value: "+91 8830024257" },
              { label: "GitHub", value: "github.com/SahilPathan17" },
            ].map(({ label, value }) => (
              <div key={label} style={{ color: "rgba(255,255,255,0.9)", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0d2d4a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "20px 24px", fontSize: 13 }}>
        © 2025 Sahil Pathan. Built with React.
      </footer>
    </div>
  );
}
