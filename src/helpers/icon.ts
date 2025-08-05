import { readFileSync } from 'node:fs'
import { locate } from '@iconify/json'
import { getIconData, iconToHTML } from '@iconify/utils'
import type { IconifyJSON } from '@iconify/types'

export const icon = (
  collection: string,
  name: string,
  attributes: Record<string, string> = {},
): string => {
  const path = locate(collection)
  const data: IconifyJSON = JSON.parse(readFileSync(path).toString())
  const icon = getIconData(data, name)

  if (!icon) {
    return ''
  }

  const width = (attributes.width ?? data.width ?? 24).toString()
  const height = (attributes.height ?? data.height ?? 24).toString()

  return iconToHTML(icon.body, {
    width,
    height,
    viewbox: `0 0 ${height} ${width}`,
    ...attributes,
  })
}
