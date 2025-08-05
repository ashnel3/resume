import type { TagAnchor, TagIcon, TagImage, TagLink, TagMeta } from './tag'

export interface UserContextHead {
  link?: TagLink[]
  meta?: TagMeta[]
  title?: string
}

export interface UserContextAside {
  location?: TagAnchor
  hero?: {
    image?: TagImage
    links?: Array<TagIcon & TagAnchor>
  }
}

export interface UserContext {
  aside?: UserContextAside
  head?: UserContextHead
  social?: Record<string, string>
  pages?: string[]
}

export default UserContext
