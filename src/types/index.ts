export interface Experience {
  id: string
  title: string
  company: string
  institution?: string
  advisor?: string
  duration: string
  description: string[]
  keywords: string[]
  type: 'work' | 'research'
  imageUrl?: string
  imagePlaceholder?: {
    icon: string
    text: string
  }
  thesisLink?: string
}

export interface Project {
  id: string
  title: string
  type: string
  duration: string
  description: string[]
  keywords: string[]
  links?: ProjectLink[]
  imageUrl?: string
  imagePlaceholder?: {
    icon: string
    text: string
  }
}

export interface ProjectLink {
  type: 'github' | 'pypi' | 'demo' | 'paper'
  url: string
  label: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  duration: string
  gpa?: string
  description: string
  advisor?: string
  thesisLink?: string
  imageUrl?: string
  imagePlaceholder?: {
    icon: string
    text: string
  }
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}