import * as marked from 'marked'
import matter from 'gray-matter'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { root } from '../../vite.config'

export const loopMarkdown = (filenames: string[] = []) => {
  return filenames.map((filename) => {
    const path = resolve(root, filename)
    const data = readFileSync(path).toString()
    const meta = matter(data)
    return {
      template: marked.parse(meta.content, { async: false }),
      data: meta.data,
    }
  })
}
