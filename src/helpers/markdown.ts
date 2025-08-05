import * as marked from 'marked'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { root } from '../../vite.config'

export const renderMarkdown = (filename: string): string => {
  const path = resolve(root, filename)
  const data = readFileSync(path).toString()
  return marked.parse(data, { async: false })
}
