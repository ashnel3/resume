import { resolve } from 'node:path'
import { defineConfig, type UserConfig } from 'vite'
import type { UserContext } from '$types'

// plugins
import { ejs as _EJS, ViteEjsPlugin as ejs } from 'vite-plugin-ejs'
import { viteSingleFile as singlefile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

/** source directory */
export const root = resolve('./src')

/**
 * load template data
 * @returns
 */
export const loadUserData = async () => {
  const helpers = await import('./src/helpers')
  // @ts-ignore - file may not exist
  const context: UserContext = await import('./src/context').then((mod) => mod.default ?? {})

  return {
    EJS_VERSION: _EJS.VERSION,
    context,
    helpers,
  }
}

// config
export default defineConfig(async (): Promise<UserConfig> => {
  return {
    plugins: [ejs(await loadUserData()), singlefile(), tailwindcss()],
    build: {
      emptyOutDir: true,
      outDir: resolve('./dist'),
      modulePreload: false,
    },
    root,
    resolve: {
      alias: {
        $styles: resolve(root, 'styles'),
        $types: resolve(root, 'types'),
      },
    },
  }
})
