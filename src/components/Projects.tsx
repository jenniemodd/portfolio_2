
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
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("Alla")

  const filteredProjects: Project[] =
    activeFilter === "Alla"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter,
        )

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
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${
                activeFilter === filter
                  ? styles.filterActive
                  : ""
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
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
