import { defineConfig, loadEnv } from 'vite'

import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { viteSingleFile as ViteSingleFile } from 'vite-plugin-singlefile'

// TODO: load secret.json instead of env

export const EJSContext = ({
  VITE_TITLE: title,
  VITE_CONTACT_EMAIL: contact_email,
  VITE_CONTACT_EMAIL_URL: contact_email_url,
  VITE_CONTACT_LOCATION: contact_location,
  VITE_CONTACT_LOCATION_URL: contact_location_url,
  VITE_CONTACT_PHONE: contact_phone,
  VITE_CONTACT_PHONE_URL: contact_phone_url,
}: Record<string, string>) => ({
  title,
  contact_email,
  contact_email_url,
  contact_location,
  contact_location_url,
  contact_phone,
  contact_phone_url,
})

export default defineConfig(({ mode }) => {
  return {
    root: './src',
    build: {
      modulePreload: false,
      emptyOutDir: true,
      outDir: '../dist',
    },
    plugins: [ViteSingleFile(), ViteEjsPlugin(EJSContext(loadEnv(mode, '', '')))],
  }
})
