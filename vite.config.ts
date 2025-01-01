import { defineConfig } from 'vite'

// plugins
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { viteSingleFile as ViteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(async () => {
  return {
    root: './src',
    build: {
      modulePreload: false,
      emptyOutDir: true,
      outDir: '../dist',
    },
    plugins: [ViteSingleFile(), ViteEjsPlugin(await import('./context.json'))],
  }
})
