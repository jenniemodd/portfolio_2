
import { useState } from "react"
import { projects } from "../data/project"
import {
  projectFilters,
  type Project,
  type ProjectFilter,
} from "../types/project"
import ProjectCard from "./ProjectCard"
import styles from "./Projects.module.css"

function Projects() {
const [selectedTags, setSelectedTags] = useState<ProjectFilter[]>([])

const filteredProjects: Project[] =
  selectedTags.length === 0
    ? projects
    : projects.filter((project) =>
        selectedTags.includes(project.category),
      )

function toggleFilter(filter: ProjectFilter) {
  if (filter === "Alla") {
    setSelectedTags([])
    return
  }

  setSelectedTags((currentTags) =>
    currentTags.includes(filter)
      ? currentTags.filter((tag) => tag !== filter)
      : [...currentTags, filter],
  )
}
  return (
    <section className={styles.projects} id="projects">
      <header className={styles.header}>
        <p className={styles.eyebrow}>03 · Utvalda projekt</p>

        <h2>
          Idéer som blivit
          <br />
          något på riktigt.
        </h2>

        <div
          className={styles.filters}
          aria-label="Filtrera projekt"
        >
   
{projectFilters.map((filter) => {
  const isActive =
    filter === "Alla"
      ? selectedTags.length === 0
      : selectedTags.includes(filter)

  return (
    <button
      key={filter}
      type="button"
      className={`${styles.filter} ${
        isActive ? styles.filterActive : ""
      }`}
      aria-pressed={isActive}
      onClick={() => toggleFilter(filter)}
    >
      {filter}
    </button>
  )
})}



<button
  type="button"
  className={styles.clearFilters}
  onClick={() => setSelectedTags([])}
  disabled={selectedTags.length === 0}
>
  <span aria-hidden="true">↺</span>
  Rensa val
</button>
 </div>


      </header>

      {filteredProjects.length > 0 ? (
       <div
  className={`${styles.projectList} ${
    filteredProjects.length === 2 &&
    filteredProjects.every(
      (project) => project.category === "Digital marknadsföring",
    )
      ? styles.twoProjects
      : ""
  }`}
>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={
                index === 0 &&
                Boolean(project.results?.length)
              }
            />
          ))}
        </div>
      ) : (
        <p>Inga projekt matchar det valda filtret ännu.</p>
      )}
    </section>
  )
}

export default Projects
