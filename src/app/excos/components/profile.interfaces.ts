export type ProfileTag = "admin" | "secretary" | "finance" | "president" | "vice-president" | "executives"

export interface Achievement {
  year: number
  title: string
  description: string
}

export interface SocialMedia {
  platform: string
  url: string
}

export interface RankProgression {
  year: number
  position: string
  responsibilities: string[]
}

export interface Profile {
  id: string
  name: string
  role: string
  gender: "male" | "female"
  image: string
  school: string
  department: string
  level: string
  hobbies: string[]
  bio: string
  tag: ProfileTag
  isHead?: boolean
  achievements: Achievement[]
  socialMedia: SocialMedia[]
  skills: string[]
  quote: string
  rankProgression?: RankProgression[]
}

export interface TagGroup {
  tag: ProfileTag
  profiles: Profile[]
}

export interface GenderGroup {
  male: TagGroup[]
  female: TagGroup[]
}

export interface YearData {
  year: number
  data: GenderGroup
}

export type ExcoData = YearData[]
