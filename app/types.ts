export type contribution = {
  description: string
}

export type milestone = {
  title: string
  description: string
}

export type workExperience = {
  step: number
  company: company
  location: string
  remote: boolean
  logo: string
  period: string
  title: string
  description: string
  contributions?: contribution[]
  technologies?: string[]
  milestones?: milestone[]
}

export type company = {
  name: string
  location: string
  description: string
  linkedin: string
}
