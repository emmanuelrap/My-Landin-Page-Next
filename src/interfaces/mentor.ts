import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  description?: string
  link: string
  category: string
  company?: {
    name?: string
    logo1?: string
    logo2?: string
    logo3?: string
    logo4?: string
    logo5?: string
  }
}
