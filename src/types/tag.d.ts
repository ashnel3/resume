export interface TagMeta {
  name: string
  content: string
}

export interface TagAnchor {
  href: string
  text: string
}

export interface TagIcon {
  icon: string
  collection: string
  attributes?: Record<string, string | undefined>
}

export interface TagAnchorImage extends TagImage {
  href: string
}

export interface TagImage {
  alt: string
  src: string
}

export interface TagLink {
  rel: string
  href: string
  type?: string
}
