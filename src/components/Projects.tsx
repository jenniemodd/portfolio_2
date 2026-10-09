
import { projects } from "../data/project"
import ProjectCard from "./ProjectCard"
import { useState } from "react"

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Alla")
  const filteredProjects = projects.filter((project) => {
  if (selectedCategory === "Alla") {
    return true
  }

  return project.category === selectedCategory
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
  {["Alla", "Webbutveckling", "Digital marknadsföring"].map(
    (category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        aria-pressed={selectedCategory === category}
      >
        {category}
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
