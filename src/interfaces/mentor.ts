import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  description?: string
  link: string
  category: string
  company?: {
    name: string
    logo: string
  }
}
