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
  { name: 'Python', slug: 'python', level: 'mastered' },
  { name: 'C', slug: 'c', level: 'known' },
  { name: 'C++', slug: 'cplusplus', level: 'known' },
]

export const frameworks = {
  backend: [
    { name: 'Spring Boot', slug: 'spring', level: 'daily' as TechLevel },
    { name: 'Laravel', slug: 'laravel', level: 'known' as TechLevel },
  ],
  frontend: [
    { name: 'React', slug: 'react', level: 'daily' as TechLevel },
    { name: 'Next.js', slug: 'nextdotjs', level: 'daily' as TechLevel },
  ],
  mobile: [
    { name: 'Kotlin Multiplatform', slug: 'kotlin', level: 'daily' as TechLevel },
    { name: 'Flutter', slug: 'flutter', level: 'known' as TechLevel },
  ],
  cms: [
    { name: 'Strapi', slug: 'strapi', level: 'daily' as TechLevel },
    { name: 'WordPress', slug: 'wordpress', level: 'known' as TechLevel },
  ],
}

export const databases = {
  sql: [
    { name: 'MySQL', slug: 'mysql', level: 'mastered' as TechLevel },
    { name: 'PostgreSQL', slug: 'postgresql', level: 'mastered' as TechLevel },
    { name: 'Oracle', slug: 'oracle', level: 'mastered' as TechLevel },
    { name: 'SQL Server', slug: 'microsoftsqlserver', level: 'mastered' as TechLevel },
  ],
  nosql: [
    { name: 'MongoDB', slug: 'mongodb', level: 'daily' as TechLevel },
  ],
}

export const technologies: TechItemWithLevel[] = [
  { name: 'Docker', slug: 'docker', level: 'daily' },
  { name: 'Kubernetes', slug: 'kubernetes', level: 'mastered' },
  { name: 'Ansible', slug: 'ansible', level: 'known' },
]

export const aiAutomation: TechItemWithLevel[] = [
  { name: 'n8n', slug: 'n8n', level: 'mastered' },
  { name: 'Claude Code', slug: 'anthropic', level: 'daily' },
]

export const hosting: TechItemWithLevel[] = [
  { name: 'AWS', slug: 'amazonaws', level: 'mastered' },
  { name: 'Vercel', slug: 'vercel', level: 'daily' },
  { name: 'Hostinger', slug: 'hostinger', level: 'mastered' },
  { name: 'Ngrok', slug: 'ngrok', level: 'daily' },
  { name: 'Cloudflare', slug: 'cloudflare', level: 'mastered' },
]

export const design: TechItemWithLevel[] = [
  { name: 'Figma', slug: 'figma', level: 'mastered' },
  { name: 'Canva', slug: 'canva', level: 'mastered' },
]

export const versioning: TechItemWithLevel[] = [
  { name: 'Git', slug: 'git', level: 'daily' },
  { name: 'GitHub', slug: 'github', level: 'daily' },
  { name: 'GitLab', slug: 'gitlab', level: 'known' },
]

