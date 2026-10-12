
export type Project = {
  id: number
  title: string
  description: string
  category: "Front End Utveckling" | "Digital marknadsföring"
  tags: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

export const projectFilters = [
  "Alla",
  "Front End Utveckling",
  "Digital marknadsföring",
] as const

export type ProjectFilter = (typeof projectFilters)[number]