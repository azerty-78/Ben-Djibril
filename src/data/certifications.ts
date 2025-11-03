export type Certification = {
  name: string
  issuer: string
  status: 'in-progress' | 'completed'
  badgeUrl?: string
  completionDate?: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    name: 'Docker Certified Associate (DCA)',
    issuer: 'Docker',
    status: 'in-progress',
    badgeUrl: 'https://www.credly.com/badges/docker-certified-associate',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
    badgeUrl: 'https://www.credly.com/badges/aws-certified-cloud-practitioner',
  },
]

