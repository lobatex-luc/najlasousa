import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The Cloudflare plugin is only applied to `vite build`: it compiles the Worker
// that serves dist/client in production. The page itself is fully static, so
// local development runs plain Vite (the workerd bridge used by the plugin does
// not start on every machine).
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), ...(command === 'build' ? [cloudflare()] : [])],
  server: { host: '127.0.0.1', port: 5173, strictPort: false },
}))
