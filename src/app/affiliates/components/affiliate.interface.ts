export type InstitutionTag = "university" | "medical school" | "college"

export interface SocialMedia {
  platform: string
  url: string
}

export interface Achievement {
  year: number
  title: string
  description: string
}

export interface Institution {
  id: string
  name: string
  abbreviation: string
  tag: InstitutionTag
  logo: string
  coverImage: string
  description: string
  foundedYear: number
  location: string
  website: string
  socialMedia: SocialMedia[]
  achievements: Achievement[]
  studentPopulation: number
  notableFaculties: string[]
  researchAreas: string[]
  collaborations: string[]
  eventsHosted: string[]
  missionStatement: string
  visionStatement: string
  relationWithCOHI: string
}

