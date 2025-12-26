// Technologies maîtrisées par ordre de compétence
// Niveaux: 'daily' = Utilisé au quotidien, 'mastered' = Bien maîtrisé, 'known' = Connaissance solide

export type TechLevel = 'daily' | 'mastered' | 'known'

export type TechItemWithLevel = {
  name: string
  slug: string
  level: TechLevel
  category?: string
}

export const programmingLanguages: TechItemWithLevel[] = [
  { name: 'Kotlin', slug: 'kotlin', level: 'daily' },
  { name: 'Java', slug: 'oracle', level: 'daily' },
  { name: 'TypeScript', slug: 'typescript', level: 'daily' },
  { name: 'JavaScript', slug: 'javascript', level: 'mastered' },
  { name: 'HTML', slug: 'html5', level: 'mastered' },
  { name: 'CSS', slug: 'css3', level: 'mastered' },
  { name: 'Python', slug: 'python', level: 'known' },
  { name: 'C', slug: 'c', level: 'known' },
  { name: 'C++', slug: 'cplusplus', level: 'known' },
]

export const frameworks = {
  backend: [
    { name: 'Spring Boot', slug: 'spring', level: 'daily' as TechLevel },
  ],
  frontend: [
    { name: 'React', slug: 'react', level: 'daily' as TechLevel },
  ],
  mobile: [
    { name: 'Kotlin Multiplatform', slug: 'kotlin', level: 'daily' as TechLevel },
  ],
}

export const databases = {
  sql: [
    { name: 'MySQL', slug: 'mysql', level: 'mastered' as TechLevel },
    { name: 'PostgreSQL', slug: 'postgresql', level: 'mastered' as TechLevel },
  ],
  nosql: [
    { name: 'MongoDB', slug: 'mongodb', level: 'known' as TechLevel },
  ],
}

export const technologies: TechItemWithLevel[] = [
  { name: 'Docker', slug: 'docker', level: 'daily' },
  { name: 'Kubernetes', slug: 'kubernetes', level: 'mastered' },
  { name: 'Ansible', slug: 'ansible', level: 'known' },
]

export const hosting: TechItemWithLevel[] = [
  { name: 'AWS', slug: 'amazonaws', level: 'mastered' },
  { name: 'Vercel', slug: 'vercel', level: 'daily' },
  { name: 'Hostinger', slug: 'hostinger', level: 'mastered' },
  { name: 'Ngrok', slug: 'ngrok', level: 'daily' },
  { name: 'NS', slug: 'cloudflare', level: 'mastered' }, // NS - Cloudflare DNS ou autre service
]

export const design: TechItemWithLevel[] = [
  { name: 'Figma', slug: 'figma', level: 'mastered' },
  { name: 'Canva', slug: 'canva', level: 'known' },
]

export const versioning: TechItemWithLevel[] = [
  { name: 'Git', slug: 'git', level: 'daily' },
  { name: 'GitHub', slug: 'github', level: 'daily' },
]

