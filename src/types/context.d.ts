import type { TagAnchor, TagIcon, TagImage, TagLink, TagMeta } from './tag'

export interface UserContextHead {
  link?: TagLink[]
  meta?: TagMeta[]
  title?: string
}

export interface UserContextAside {
  hero?: {
    image?: TagImage
    icons?: Array<TagIcon & Omit<TagAnchor, 'text'>>
    links?: Array<TagIcon & TagAnchor>
  }
}

export interface UserContext {
  aside?: UserContextAside
  head?: UserContextHead
  pages?: string[]
}

export default UserContext
