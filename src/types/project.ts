
export type ProjectResult = {
  value: string
  label: string
}

export type Project = {
  id: number
  title: string
  description: string
  category: "Front end-utveckling" | "Digital marknadsföring"
  tags: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  results?: ProjectResult[]
}

export const projectFilters = [
  "Alla",
  "Front end-utveckling",
  "Digital marknadsföring",
] as const

export type ProjectFilter = (typeof projectFilters)[number]
