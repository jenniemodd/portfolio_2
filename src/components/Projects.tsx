
import { projects } from "../data/project"
import ProjectCard from "./ProjectCard"
import { useState } from "react"

function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("Alla")
  const filteredProjects = projects.filter((project) => {
  if (selectedTechnology === "Alla") {
    return true
  }

  return project.technologies.includes(selectedTechnology)
}) 
  return (
    <section id="projects">
      <p>03 — Utvalda projekt</p>

      <h2>Projekt där idéer blir verklighet.</h2>

      <p>
        Här är några projekt där jag utforskar frontend,
        digitala lösningar och användarupplevelser.
      </p>

      <div>
  {["Alla", "JavaScript", "TypeScript", "React", "SCSS"].map(
    (technology) => (
      <button
        key={technology}
        onClick={() => setSelectedTechnology(technology)}
        aria-pressed={selectedTechnology === technology}
      >
        {technology}
      </button>
    )
  )}
</div>

      <div>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
