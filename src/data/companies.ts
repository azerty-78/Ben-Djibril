import uy2SoaLogo from '../assets/trust-company/uy2-soa.webp'
import ensLogo from '../assets/trust-company/ens.webp'
import kobeCorpLogo from '../assets/trust-company/kobe-corporation.jpeg'

export type Company = {
  name: string
  logo?: string
  website: string
}

export const companies: Company[] = [
  {
    name: 'UY2 SOA',
    logo: uy2SoaLogo,
    website: 'https://www.univ-yaounde2.cm', // À confirmer
  },
  {
    name: 'ENS Y',
    logo: ensLogo,
    website: 'https://www.ens-yaounde.cm', // À confirmer
  },
  {
    name: 'Kobe Corp',
    logo: kobeCorpLogo,
    website: 'https://www.kobecorporation.com', // À confirmer
  },
]

