// Skills Data
const skillsData = [
  { name: "Java" },
  { name: "Data Structures & Algorithms" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "SQL" },
  { name: "Git & GitHub" }
];

// Projects Data
const projectsData = [
  {
    title: "Data Visualization and Analytics Platform",
    description: "A full-stack web application that allows users to upload Excel files and automatically generates interactive visualizations such as Bar Charts, Pie Charts, and Line Graphs for better insights and analytics.",
    technologies: ["MERN Stack", "Chart.js", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/AjayS080703/AI-EXCEL"
  },
  {
    title: "ChatGPT Clone",
    description: "An AI-powered chatbot interface that mimics ChatGPT functionality. It takes user input, processes responses, and dynamically updates the DOM for engaging conversations.",
    technologies: ["Python", "Flask/FastAPI", "OpenAI API", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/AjayS080703/AiProject"
  },
  {
    title: "AI-Based UPI & QR Code Fraud Detection Website",
    description: "A machine learning-integrated platform designed to detect fraudulent UPI transactions and QR codes in real-time. Provides secure, responsive web pages to alert users about potential threats.",
    technologies: ["Python", "Scikit-learn", "Flask", "HTML", "CSS", "JavaScript"],
    link: ""
  }
];

// Experience Data
const experienceData = [
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Bansal Institute of Research Technology and Science, Bhopal, MP.",
    date: "2022 - 2026",
  },
  {
    type: "internship",
    title: "Foundation of Artificial Intelligence",
    institution: "IBM - Edunet Foundation",
    date: "April 2025",
    description: "Hands-on experience in AI fundamentals including Machine Learning, Neural Networks, and NLP. Built mini-projects involving data preprocessing, model training, and evaluation."
  },
  {
    type: "internship",
    title: "Web Development Intern",
    institution: "Infotact Solutions, Bengaluru",
    date: "January 2025",
    description: "Worked on front-end and back-end development using React, Node.js, and REST APIs. Built responsive UI, debugged code, and collaborated on real-world client projects."
  }
];

// Render Functions
function renderSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsData.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.textContent = skill.name;
    skillsList.appendChild(skillCard);
  });
}

function renderProjects() {
  const projectsList = document.getElementById("projects-list");
  projectsData.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
        ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
      </div>
    `;
    projectsList.appendChild(projectCard);
  });
}

function renderExperience() {
  const experienceTimeline = document.getElementById("experience-timeline");
  experienceData.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.institution}</p>
      <span class="date">${item.date}</span>
      ${item.description ? `<p>${item.description}</p>` : ""}
    `;
    experienceTimeline.appendChild(timelineItem);
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderExperience();
});
