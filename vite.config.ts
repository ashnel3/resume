import { defineConfig } from 'vite'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// plugins
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { viteSingleFile as ViteSingleFile } from 'vite-plugin-singlefile'

// configuration
export const EJSContext = async (path: string) => {
  return JSON.parse((await readFile(path)).toString())
}

export default defineConfig(async () => {
  const context = await EJSContext(resolve('./content.json'))
  return {
    root: './src',
    build: {
      modulePreload: false,
      emptyOutDir: true,
      outDir: '../dist',
    },
    plugins: [ViteSingleFile(), ViteEjsPlugin(context)],
  }
})
