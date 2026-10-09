
import type { Project } from "../types/project"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <img src={project.image} alt={`Skärmbild från ${project.title}`} />

      <p>{project.category}</p>
<h3>{project.title}</h3>
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div>
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
    >
      Besök projektet
    </a>
  )}
</div>
    </article>
  )
}

export default ProjectCard
