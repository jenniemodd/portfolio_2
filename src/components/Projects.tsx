
import { projects } from "../data/project"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects">
      <p>03 — Utvalda projekt</p>

      <h2>Projekt där idéer blir verklighet.</h2>

      <p>
        Här är några projekt där jag utforskar frontend,
        digitala lösningar och användarupplevelser.
      </p>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
