
import { useState } from "react"
import styles from "./Projects.module.css"

type Project = {
  number: string
  title: string
  category: string
  description: string
  tags: string[]
  filters: string[]
  preview: "northbound" | "forma" | "grow"
  featured?: boolean
  caseUrl?: string
  githubUrl?: string
}

const filters = [
  "Alla",
  "Front End",
  "JavaScript",
  "TypeScript",
  "React",
  "Digital Marketing",
  "UX",
]

const projects: Project[] = [
  {
    number: "01",
    title: "Northbound",
    category: "Featured case · Front End",
    description:
      "En innehållsdriven reseplattform där inspirerande storytelling möter ett snabbt, tillgängligt och konverterande gränssnitt.",
    tags: ["React", "TypeScript", "API", "UX"],
    filters: ["Front End", "TypeScript", "React", "UX"],
    preview: "northbound",
    featured: true,
    caseUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "Studio Forma",
    category: "Webbdesign · Utveckling",
    description:
      "En tydlig och varm studiosajt med ett flexibelt komponentsystem och genomtänkta mikrointeraktioner.",
    tags: ["JavaScript", "Sass", "Figma"],
    filters: ["Front End", "JavaScript", "UX"],
    preview: "forma",
    caseUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "Grow/Together",
    category: "Digital strategi · SEO",
    description:
      "En datadriven innehållsstrategi som gör komplexa tjänster enklare att hitta, förstå och välja.",
    tags: ["SEO", "Analytics", "Content"],
    filters: ["Digital Marketing", "UX"],
    preview: "grow",
    caseUrl: "#",
    githubUrl: "#",
  },
]

function ProjectPreview({ type }: { type: Project["preview"] }) {
  if (type === "northbound") {
    return (
      <div className={`${styles.mockup} ${styles.northbound}`}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.northboundScreen}>
          <span className={styles.mockupLabel}>NORTHBOUND</span>
          <div className={styles.sun} />
          <h3>
            Where will you
            <br />
            go next?
          </h3>
          <span className={styles.mockupButton}>EXPLORE PLACES</span>
        </div>
      </div>
    )
  }

  if (type === "forma") {
    return (
      <div className={`${styles.mockup} ${styles.forma}`}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.formaScreen}>
          <span className={styles.mockupLabel}>FORMA®</span>
          <h3>
            Ideas
            <br />
            with
            <br />
            shape.
          </h3>
          <div className={styles.formaCircle} />
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.mockup} ${styles.grow}`}>
      <div className={styles.browserBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.growScreen}>
        <span className={styles.mockupLabel}>GROW / TOGETHER</span>
        <h3>
          Better visibility.
          <br />
          Real momentum.
        </h3>
        <span className={styles.growStar} aria-hidden="true">
          ✳
        </span>
      </div>
    </div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Alla")

  const visibleProjects =
    activeFilter === "Alla"
      ? projects
      : projects.filter((project) =>
          project.filters.includes(activeFilter),
        )

  const featuredProject = visibleProjects.find(
    (project) => project.featured,
  )

  const otherProjects = visibleProjects.filter(
    (project) => !project.featured,
  )

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
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
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${
                activeFilter === filter ? styles.filterActive : ""
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectList}>
        {featuredProject && (
          <article className={`${styles.card} ${styles.featured}`}>
            <div className={styles.featuredPreview}>
              <ProjectPreview type={featuredProject.preview} />
            </div>

            <div className={styles.featuredInfo}>
              <span className={styles.projectNumber}>
                {featuredProject.number}
              </span>

              <p className={styles.projectCategory}>
                {featuredProject.category}
              </p>

              <h3>{featuredProject.title}</h3>

              <p className={styles.description}>
                {featuredProject.description}
              </p>

              <div className={styles.tags}>
                {featuredProject.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {featuredProject.caseUrl && (
                  <a href={featuredProject.caseUrl}>
                    ↗ <span>Se case</span>
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a href={featuredProject.githubUrl}>
                    <span aria-hidden="true">⌘</span>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {otherProjects.length > 0 && (
          <div className={styles.grid}>
            {otherProjects.map((project) => (
              <article className={styles.card} key={project.number}>
                <div className={styles.cardPreview}>
                  <ProjectPreview type={project.preview} />
                </div>

                <div className={styles.cardInfo}>
                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <p className={styles.projectCategory}>
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.caseUrl && (
                      <a href={project.caseUrl}>
                        ↗ <span>Se case</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl}>
                        <span aria-hidden="true">⌘</span>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {visibleProjects.length === 0 && (
          <p>Inga projekt matchar den valda kategorin ännu.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
