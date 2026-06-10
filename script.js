// -------- COMPONENTS

function SkillsRow(skills, options = {}) {
  const { marginTop = '2rem' } = options;
  
  const tags = skills
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join('');

  return `
    <div class="skills-row" style="margin-top:${marginTop}">
      ${tags}
    </div>
  `;
}

function TimelineView(experiences) {
  const jobs = experiences
    .map(experience => `
      <div class="timeline-item">
        <p class="timeline-year">${experience.year}</p>
        <p class="timeline-role">${experience.role}</p>
        <p class="timeline-org">${experience.org}</p>
        <p class="timeline-desc">${experience.desc}</p>
      </div>`
      )
    .join('');

  return `
    <div class="timeline">
      ${jobs}
    </div>
  `;
}

function AwardListView(awards) {
  const awardListItems = awards
    .map(award => 
      `<li>${award}</li>`
      )
    .join('');

  return `
    <ul class="awards-list">
      ${awardListItems}
    </ul>
  `;
}

function ProjectGridView(projects) {
  const projectListItems = projects
    .map(project => 
      `
      <a href="${project.link}" target="_blank" rel="noopener" class="project-card">
        <span class="project-badge">${project.year}</span>
        <p class="project-title">${project.title}</p>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tech">
          ${project.tech.map(t =>
            `<span class="tech-dot">${t}</span>`
          ).join('')}
        </div>
      </a>
    `
      )
    .join('');

  return `
    <div class="projects-grid fade-in" style="transition-delay:0.1s">
      ${projectListItems}
    </div>
  `;
}


class ProjectGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ProjectGridView(myProjects);
  }
}


// ------- MAIN FUNCTION

function render() {
  customElements.define('project-grid', ProjectGrid);
  // Intersection Observer for fade-ins
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      }
  });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Nav active state on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` 
          ? 'var(--cold-white)' 
          : '';
      });
      }
  });
  }, { threshold: 0.4 });

  sections.forEach(s => scrollObserver.observe(s));


  document.getElementById('skills-container').innerHTML = SkillsRow(mySkills);
  document.getElementById('experiences-container').innerHTML = TimelineView(myExperiences);
  document.getElementById('awardlist-container').innerHTML = AwardListView(myAwards);
}


render();