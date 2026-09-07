import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="background-effects">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="floating-dot dot-one"></div>
        <div className="floating-dot dot-two"></div>
        <div className="floating-dot dot-three"></div>
      </div>

      <nav>
        <h2>ELAR DE LOS SANTOS</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="subtitle hero-animation">
              SOFTWARE ENGINEER • PEOPLESOFT DEVELOPER • GAME DEVELOPER
            </div>

            <h1 className="hero-animation delay-one">
              Hello, I'm <span>Elar.</span>
            </h1>

            <p className="hero-text hero-animation delay-two">
              I help businesses with technical support, administrative tasks,
              problem-solving, and software-related work. With a strong IT
              background, I bring both technical expertise and a flexible
              approach to every project.
            </p>

            <div className="buttons hero-animation delay-three">
              <a href="#contact" className="primary-button">
                Let's Work Together
              </a>

              <a href="#projects" className="secondary-button">
                View My Work
              </a>
            </div>
          </div>

          <div className="hero-photo-container hero-animation delay-two">
  <div className="hero-photo">
    <div className="photo-ring"></div>
    <img src="/profile.jpg" alt="Elar" />
  </div>
</div>

          <div className="scroll-indicator">
            <span></span>
            Scroll to explore
          </div>
        </section>

        <section id="about" className="reveal">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>Technical experience with a problem-solving mindset.</h2>

          <p>
            I'm an IT professional with experience in software engineering,
            PeopleSoft development, application support, troubleshooting, and
            technical problem-solving. I also enjoy exploring new technologies
            and building personal projects using modern development tools.
          </p>

          <p>
            Beyond professional software development, I have hands-on
            experience working with web development and Unreal Engine projects,
            allowing me to approach technical challenges from different
            perspectives.
          </p>
        </section>

        <section id="skills" className="reveal">
          <p className="section-label">02 — SKILLS</p>

          <h2>What I can help you with.</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>Technical Support</h3>
              <p>
                Troubleshooting software issues, investigating problems, and
                helping users resolve technical concerns.
              </p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>Virtual Assistance</h3>
              <p>
                Administrative support, organization, documentation, research,
                and other remote business tasks.
              </p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>Software Development</h3>
              <p>
                Experience with software development, application maintenance,
                debugging, and technical problem-solving.
              </p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>PeopleSoft</h3>
              <p>
                Professional experience developing, maintaining, testing, and
                troubleshooting PeopleSoft applications.
              </p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Web Development</h3>
              <p>
                Experience working with web technologies and building
                functional software projects.
              </p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>Unreal Engine</h3>
              <p>
                Basic experience with Unreal Engine, animations, assets,
                gameplay systems, and game development workflows.
              </p>
            </div>

            <div className="skill-card">
              <span>07</span>
              <h3>Unity</h3>
              <p>
                Basic experience with Unity and C#, including gameplay
                mechanics, character controls, and interactive game development.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="reveal">
          <p className="section-label">03 — EXPERIENCE</p>

          <h2>Professional experience.</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <span className="experience-number">01</span>

                <p className="date">2 YEARS</p>

                <h3>Software Engineer</h3>

                <h4>Accenture</h4>

                <p>
                  As a Software Engineer at Accenture, I developed, maintained,
                  and supported enterprise software applications. I worked
                  with teams to troubleshoot technical issues, investigate
                  problems, and deliver software solutions based on business
                  requirements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <span className="experience-number">02</span>

                <p className="date">2 YEARS</p>

                <h3>PeopleSoft Developer</h3>

                <h4>Oracle PeopleSoft</h4>

                <p>
                  Developed and maintained PeopleSoft applications, performed
                  testing and debugging, investigated application issues, and
                  implemented solutions based on technical and business
                  requirements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <span className="experience-number">03</span>

                <p className="date">PERSONAL PROJECTS</p>

                <h3>Unreal Engine</h3>

                <h4>Basic Experience</h4>

                <p>
                  Worked with Unreal Engine projects involving character
                  animations, Animation Blueprints, Blend Spaces, imported
                  assets, and basic gameplay systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <span className="experience-number">04</span>

                <p className="date">PERSONAL PROJECTS</p>

                <h3>Unity Game Development</h3>

                <h4>Basic Experience</h4>

                <p>
                  Explored Unity game development using C#, including gameplay
                  mechanics, character controls, interactive systems, and
                  general game development workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="reveal">
          <p className="section-label">04 — PROJECTS</p>

          <h2>Things I've built.</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <span>PETVAXCARE</span>
              </div>

              <div className="project-content">
                <p className="project-type">WEB / MOBILE SYSTEM</p>

                <h3>PETVAXCARE</h3>

                <p>
                  A pet vaccination management system designed to help pet
                  owners manage vaccination records, scheduling, reminders,
                  and pet information.
                </p>

                <div className="project-tags">
                  <span>Java</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>

               
              </div>
            </div>

            <div className="project-card">
              <div className="project-image unreal-image">
                <span>UNREAL ENGINE</span>
              </div>

              <div className="project-content">
                <p className="project-type">GAME DEVELOPMENT</p>

                <h3>Unreal Engine Projects</h3>

                <p>
                  Personal game development work involving character
                  animations, assets, gameplay systems, and Unreal Engine
                  workflows.
                </p>

                <div className="project-tags">
                  <span>Unreal Engine</span>
                  <span>Blueprints</span>
                  <span>Animation</span>
                </div>

             
              </div>
            </div>

            <div className="project-card">
              <div className="project-image unity-image">
                <span>UNITY</span>
              </div>

              <div className="project-content">
                <p className="project-type">GAME DEVELOPMENT</p>

                <h3>Unity Game Development</h3>

                <p>
                  Personal game development experience using Unity, exploring
                  gameplay systems, game mechanics, character controls, and
                  interactive game development.
                </p>

                <div className="project-tags">
                  <span>Unity</span>
                  <span>C#</span>
                  <span>Game Development</span>
                  <span>Gameplay</span>
                </div>

              
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section reveal">
          <p className="section-label">05 — CONTACT</p>

          <h2>Let's work together.</h2>

          <p>
            I'm open to remote opportunities, freelance projects, virtual
            assistance, technical support, and software-related work.
          </p>

          <div className="contact-buttons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elohimddls@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Email Me
            </a>

            <a
  href="/Elar_De_Los_Santos_Resume.pdf"
  download="Elar_De_Los_Santos_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button"
>
  Download Resume
</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Elar</p>

        <p>
          Software Engineer • PeopleSoft Developer • Game Developer
        </p>
      </footer>
    </div>
  );
}

export default App;