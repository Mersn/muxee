import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import Components from "unplugin-vue-components/vite"

// https://vite.dev/config/
export default ({ mode }) => defineConfig({
  base: loadEnv(mode, process.cwd()).VITE_BASE_PATH,
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      // 可选：开启目录命名空间
      directoryAsNamespace: true,
      deep: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
