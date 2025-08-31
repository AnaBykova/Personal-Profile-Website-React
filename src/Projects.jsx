import project_1 from './assets/Project_11.png';
import project_2 from './assets/Project_22.png';
import project_3 from './assets/Project_3.jpg';

const projects = [
  {
    img: project_1,
    title: "To-Do List Application",
    desc: "A full-stack App that allows users to create, update, and organize tasks with due dates and categories. Built with React, Express.js, and MongoDB, featuring user authentication, real-time task updates, and persistent data storage.",
    link: "https://github.com/AnaBykova"
  },
  {
    img: project_2,
    title: "Blog Platform",
    desc: "A full-stack web app where authenticated users can manage blog posts. Developed with React, Express.js, and MongoDB, featuring user login, content management, and SEO optimization.",
    link: "https://github.com/AnaBykova"
  },
  {
    img: project_3,
    title: "Expenses Tracker Dashboard",
    desc: "App that enables users to log income and expenses, categorize transactions, and visualize spending with interactive charts. Built with React, Express.js, and MongoDB, featuring JWT authentication, real-time data updates, and responsive dashboards with Recharts/D3.js.",
    link: "https://github.com/AnaBykova"
  },
  {
    img: project_1,
    title: "Project #4",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    link: "https://github.com/AnaBykova"
  }
];

function Projects() {
  return (
    <section id="projects">
      <div>
        <h5 className="card-title">My Projects</h5>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Link to Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
