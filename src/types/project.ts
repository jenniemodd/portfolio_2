
export type Project = {
  id: number
  title: string
  description: string
  category: "Webbutveckling" | "Digital marknadsföring"
  tags: string[]
  image: string
  githubUrl?: string
liveUrl?: string
}
